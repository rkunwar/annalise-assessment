import path from "path";
import fs from 'fs';

/**
 *
 * @param obj
 * @param key
 * @returns object that matches the key value
 */
export const getKeyValue = function <T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
};

export const API_SERVER = 'http://localhost:8000/v1';


export function getStudyPath(): string {
    const studyPath = path.normalize(`${__dirname}/../data`);
    return studyPath;
}

export function getFiles(path: string): string[] {
    const files: string[] = fs
        .readdirSync(`${path}`, { withFileTypes: true })
        .filter((item) => !item.isDirectory() && item.name.includes('.dcm'))
        .map((item) => item.name);

    return files;
}