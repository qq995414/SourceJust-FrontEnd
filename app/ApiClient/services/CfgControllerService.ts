/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cfg } from '../models/Cfg';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CfgControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 新增cfg
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public addUsingPost(
requestBody?: Cfg,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cfg',
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
     * 取得單一cfg
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public getUsingGet3(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cfg/{id}',
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
     * 刪除cfg
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public removeUsingDelete3(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/cfg/{id}',
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
     * 用category取得cfg
     * @param projectId projectId
     * @param category category
     * @returns any OK
     * @throws ApiError
     */
    public findByCategoryUsingGet(
projectId: number,
category: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cfg/{projectId}/{category}',
            path: {
                'projectId': projectId,
                'category': category,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 修改cfg
     * @param projectId projectId
     * @param category category
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public updateUsingPut6(
projectId: number,
category: string,
requestBody?: Cfg,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/cfg/{projectId}/{category}',
            path: {
                'projectId': projectId,
                'category': category,
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

}
