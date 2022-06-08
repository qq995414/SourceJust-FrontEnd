/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MessageLogControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * list
     * @param limit 
     * @param offset 
     * @param order 
     * @param page 
     * @param projectId projectId
     * @param sort 
     * @param uiId uiId
     * @returns any OK
     * @throws ApiError
     */
    public listUsingGet9(
limit?: any,
offset?: any,
order?: any,
page?: any,
projectId?: number,
sort?: any,
uiId?: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/messageLog/list',
            query: {
                'limit': limit,
                'offset': offset,
                'order': order,
                'page': page,
                'projectId': projectId,
                'sort': sort,
                'uiId': uiId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
