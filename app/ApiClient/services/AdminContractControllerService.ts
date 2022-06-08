/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminContractControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 用projectId取得列表
     * @param projectId projectId
     * @returns any OK
     * @throws ApiError
     */
    public listUsingGet3(
projectId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/contract/list/{projectId}',
            path: {
                'projectId': projectId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 測試用
     * @param formData 
     * @returns any OK
     * @throws ApiError
     */
    public createContractUsingPost1(
formData?: {
/**
 * file
 */
file: Blob;
},
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/contract/test',
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
     * 用Id取得單一合約資訊
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public findByProjectIdAndUserIdUsingGet(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/contract/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 刪除合約內容
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public deleteUsingDelete(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/contract/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * 新增合約內容
     * @param userId userId
     * @param projectId projectId
     * @param formData 
     * @returns any OK
     * @throws ApiError
     */
    public createContractUsingPost(
userId: number,
projectId: number,
formData?: {
/**
 * file
 */
file: Blob;
},
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/contract/{userId}/{projectId}',
            path: {
                'userId': userId,
                'projectId': projectId,
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

}
