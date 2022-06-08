/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PayInfo } from '../models/PayInfo';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminPayInfoControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 新增報價
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public saveUsingPost2(
requestBody?: PayInfo,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/payInfo',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 取得使用者報價清單
     * @param projectId projectId
     * @param userId userId
     * @returns any OK
     * @throws ApiError
     */
    public findPayInfoListUsingGet(
projectId: number,
userId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/payInfo/list',
            query: {
                'projectId': projectId,
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 更新報價
     * @param id id
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public updateUsingPut3(
id: number,
requestBody?: PayInfo,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/admin/payInfo/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 刪除報價
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public deleteUsingDelete1(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/payInfo/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
