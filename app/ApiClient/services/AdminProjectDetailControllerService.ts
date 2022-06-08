/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectDetail } from '../models/ProjectDetail';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminProjectDetailControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 新增projectDetail
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public saveUsingPost4(
requestBody?: ProjectDetail,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/project/detail',
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
     * list
     * @param limit 
     * @param offset 
     * @param order 
     * @param page 
     * @param sort 
     * @returns any OK
     * @throws ApiError
     */
    public listUsingGet5(
limit?: any,
offset?: any,
order?: any,
page?: any,
sort?: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/project/detail/list',
            query: {
                'limit': limit,
                'offset': offset,
                'order': order,
                'page': page,
                'sort': sort,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 用id查詢
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public getUsingGet2(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/project/detail/{id}',
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
     * 更新projectDetail
     * @param id id
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public updateUsingPut5(
id: number,
requestBody?: ProjectDetail,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/admin/project/detail/{id}',
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
