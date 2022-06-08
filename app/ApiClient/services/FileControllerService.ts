/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class FileControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 從FTP下載單一檔案
     * @param fileId fileId
     * @param version version
     * @returns any OK
     * @throws ApiError
     */
    public downloadUsingGet(
fileId: number,
version?: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/file/download/{fileId}',
            path: {
                'fileId': fileId,
            },
            query: {
                'version': version,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 從FTP下載多個上傳檔案,代入fileId(逗點隔開)
     * @param fileIds fileIds
     * @returns any OK
     * @throws ApiError
     */
    public downloadMultipleFileUsingGet(
fileIds: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/file/downloadMultipleFile',
            query: {
                'fileIds': fileIds,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 取得聊天室圖片
     * @param fileName fileName
     * @returns any OK
     * @throws ApiError
     */
    public getImgStreamUsingGet1(
fileName: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/file/getChatImage',
            query: {
                'fileName': fileName,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 從FTP取得上傳檔案圖
     * @param fileId fileId
     * @param version version
     * @returns any OK
     * @throws ApiError
     */
    public getImgStreamUsingGet(
fileId: number,
version?: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/file/getImgStream/{fileId}',
            path: {
                'fileId': fileId,
            },
            query: {
                'version': version,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 從FTP取得上傳PDF
     * @param fileId fileId
     * @param version version
     * @returns any OK
     * @throws ApiError
     */
    public getPdfStreamUsingGet(
fileId: number,
version?: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/file/getPDFStream/{fileId}',
            path: {
                'fileId': fileId,
            },
            query: {
                'version': version,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 取得檔案列表
     * @param projectId projectId
     * @param title title
     * @param fileType fileType
     * @returns any OK
     * @throws ApiError
     */
    public listUsingGet7(
projectId: number,
title?: string,
fileType?: 'CONTRACT' | 'DATA' | 'DEV_TEST' | 'PROD_TEST' | 'UI',
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/file/list/{projectId}',
            path: {
                'projectId': projectId,
            },
            query: {
                'title': title,
                'fileType': fileType,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 上傳新版本檔案至FTP(用FileType區分)
     * @param fileId fileId
     * @param fileType fileType
     * @param projectId projectId
     * @param title title
     * @param remark remark
     * @param formData 
     * @returns any OK
     * @throws ApiError
     */
    public addVersionUsingPost(
fileId: number,
fileType: 'CONTRACT' | 'DATA' | 'DEV_TEST' | 'PROD_TEST' | 'UI',
projectId: number,
title?: string,
remark?: string,
formData?: {
/**
 * file
 */
file: Blob;
},
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/file/upload/{fileId}/{fileType}',
            path: {
                'fileId': fileId,
                'fileType': fileType,
            },
            query: {
                'projectId': projectId,
                'title': title,
                'remark': remark,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 上傳檔案至FTP(用FileType區分)
     * @param fileType fileType
     * @param projectId projectId
     * @param title title
     * @param remark remark
     * @param formData 
     * @returns any OK
     * @throws ApiError
     */
    public uploadUsingPost(
fileType: 'CONTRACT' | 'DATA' | 'DEV_TEST' | 'PROD_TEST' | 'UI',
projectId: number,
title?: string,
remark?: string,
formData?: {
/**
 * file
 */
file: Blob;
},
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/file/upload/{fileType}',
            path: {
                'fileType': fileType,
            },
            query: {
                'projectId': projectId,
                'title': title,
                'remark': remark,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 上傳聊天室檔案
     * @param formData 
     * @returns any OK
     * @throws ApiError
     */
    public uploadUsingPost1(
formData?: {
/**
 * file
 */
file: Blob;
},
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/file/uploadChatFile',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 從FTP上刪除檔案並刪除資料
     * @param fileId fileId
     * @param version version
     * @returns any OK
     * @throws ApiError
     */
    public deleteFileUsingDelete(
fileId: number,
version?: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/file/{fileId}',
            path: {
                'fileId': fileId,
            },
            query: {
                'version': version,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
