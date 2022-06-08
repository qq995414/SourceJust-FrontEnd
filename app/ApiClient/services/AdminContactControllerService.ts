/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminContactControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 刪除聯絡我們
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public removeUsingDelete2(
id?: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/contact',
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
     * 聯絡我們列表
     * @param limit 
     * @param offset 
     * @param order 
     * @param page 
     * @param sort 
     * @param startDate startDate
     * @param endDate endDate
     * @returns any OK
     * @throws ApiError
     */
    public listUsingGet2(
limit?: any,
offset?: any,
order?: any,
page?: any,
sort?: any,
startDate?: string,
endDate?: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/contact/list',
            query: {
                'limit': limit,
                'offset': offset,
                'order': order,
                'page': page,
                'sort': sort,
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
