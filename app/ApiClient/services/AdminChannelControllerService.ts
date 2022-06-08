/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChannelRequest } from '../models/ChannelRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminChannelControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 新增欄目
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public saveUsingPost1(
requestBody?: ChannelRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/channel',
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
     * 用id刪除欄目
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public removeUsingDelete1(
id?: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/channel',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * 全部欄目
     * @returns any OK
     * @throws ApiError
     */
    public listUsingGet1(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/channel/list',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 更新欄目
     * @param id id
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public updateUsingPut2(
id: number,
requestBody?: ChannelRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/admin/channel/{id}',
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

}
