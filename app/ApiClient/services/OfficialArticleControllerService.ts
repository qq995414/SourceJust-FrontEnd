/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OfficialArticleControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 文章列表
     * @param channelId channelId
     * @param title title
     * @param startDate startDate
     * @param endDate endDate
     * @returns any OK
     * @throws ApiError
     */
    public listUsingGet10(
channelId?: number,
title?: string,
startDate?: string,
endDate?: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/official/article/list',
            query: {
                'channelId': channelId,
                'title': title,
                'startDate': startDate,
                'endDate': endDate,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
