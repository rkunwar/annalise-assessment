import { test, expect, request, APIRequestContext } from '@playwright/test';
import { apiHelper } from '../helpers/api';

import { API_SERVER, getFiles, getStudyPath } from '../support';
import fs from 'fs';
import { imageData } from '../data/imageData';

test.describe('API Tests', async () => {
    let apiContext: APIRequestContext;
    let imageId: number;
    
    test.beforeAll(async () => {
        test.setTimeout(30000);

        apiContext = await request.newContext({
            // All requests in this test we send go to this API endpoint.
            baseURL: API_SERVER!,
            extraHTTPHeaders: {
                'Content-Type': 'application/json',
            },
        });
    });

    test.afterAll(async () => {});

    // Add a Dicom Image to Server and assert Id values to be greater than or equal to 1 if there are no existent images in the DB and filename to be the same
    test('Assert Dicom images can be added successfully', async () => {
        for (const file of getFiles(getStudyPath())) {
            const response = await apiHelper.addImage(apiContext, `upload`, {
                ...imageData, 
                filename: file,
                image_data: fs.readFileSync(getStudyPath()+`/${file}`, {encoding: 'base64'})
            });
            console.log(await response.json());
            expect(response.ok()).toBeTruthy();
            const imageDetails = await response.json();
            imageId = await imageDetails.id 
            expect(imageId).toBeGreaterThanOrEqual(1);
            expect(await imageDetails.filename).toBe(file);
        }
    });

    test('Assert calls to get tags is successfull and return results', async () => {
        const response = await apiHelper.getTags(apiContext, `tags`);
        expect(response.ok()).toBeTruthy();
        const tags = await response.json();
        expect (tags.results.length).toBeGreaterThanOrEqual(1)
    });

    test('Assert calls to get images is successfull', async () => {
        const response = await apiHelper.getImages(apiContext, `images`);
        expect(response.ok()).toBeTruthy();
        const images = await response.json();
        expect (images.results.length).toBeGreaterThanOrEqual(1)
    });

    test('Assert calls to update image tags is successfull and verify it contains the updated values', async () => {
        const response = await apiHelper.updateImage(apiContext, `images/${imageId}`, { ...imageData, 
        filename: 'updated-image-0000.dcm',
        tags: ['savik'] });
        expect(response.ok()).toBeTruthy();
        const images = await response.json();
        const updatedTag = !!images.tags.find((tag: { name: string; }) => {
            return tag.name === 'savik'
        })
        expect (updatedTag).toBeTruthy()
    });
});
