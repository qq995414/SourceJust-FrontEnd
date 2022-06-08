/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CacheControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * list
     * @returns any OK
     * @throws ApiError
     */
    public listUsingGet6(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cache/list',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
