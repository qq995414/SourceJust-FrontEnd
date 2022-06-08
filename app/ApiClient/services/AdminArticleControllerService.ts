/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArticleRequest } from '../models/ArticleRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminArticleControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 新增文章
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public saveUsingPost(
requestBody?: ArticleRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/article',
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
     * 刪除文章
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public removeUsingDelete(
id?: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/article',
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
     * 文章列表
     * @param channelId channelId
     * @param limit 
     * @param offset 
     * @param order 
     * @param page 
     * @param sort 
     * @param title title
     * @param startDate startDate
     * @param endDate endDate
     * @returns any OK
     * @throws ApiError
     */
    public listUsingGet(
channelId?: number,
limit?: any,
offset?: any,
order?: any,
page?: any,
sort?: any,
title?: string,
startDate?: string,
endDate?: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/article/list',
            query: {
                'channelId': channelId,
                'limit': limit,
                'offset': offset,
                'order': order,
                'page': page,
                'sort': sort,
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

    /**
     * 用id查詢文章
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public getUsingGet(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/article/{id}',
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
     * 更新文章
     * @param id id
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public updateUsingPut1(
id: number,
requestBody?: ArticleRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/admin/article/{id}',
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
