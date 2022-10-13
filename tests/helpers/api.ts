import { APIRequestContext, APIResponse } from '@playwright/test';
import { API_SERVER } from '../support';

export const apiHelper = {
    /**
     *
     * @param apiContext API Context
     * @param reqUrl Request Url
     * @param imageData Image Data to add to the DB
     * @returns API Response
     */
    addImage: async (
        apiContext: APIRequestContext,
        reqUrl: string,
        imageData: {}
    ): Promise<APIResponse> => {
        const res = await apiContext.post(`${API_SERVER}/${reqUrl}`, {
            data: imageData,
        });

        return res;
    },
    /**
     *
     * @param apiContext API Context
     * @param reqUrl Request URL
     * @returns API Response
     */
    getTags: async (apiContext: APIRequestContext, reqUrl: string): Promise<APIResponse> => {
        const res = await apiContext.get(`${API_SERVER}/${reqUrl}`);
        return res;
    },
    /**
     *
     * @param apiContext API Context
     * @param reqUrl Request URL
     * @returns API Response
     */
    getImages: async (
        apiContext: APIRequestContext,
        reqUrl: string
    ): Promise<APIResponse> => {
        const res = await apiContext.get(`${API_SERVER}/${reqUrl}`);
        return res;
    },
    /**
     *
     * @param apiContext API Context
     * @param reqUrl Request URL with imageID
     * @param imageData Updated ImageData
     * @returns API Response
     */
    updateImage: async (apiContext: APIRequestContext, reqUrl: string, imageData: {}): Promise<APIResponse> => {
        const res = await apiContext.put(`${API_SERVER}/${reqUrl}`, {
            data: imageData
        });
        return res;
    },
};
