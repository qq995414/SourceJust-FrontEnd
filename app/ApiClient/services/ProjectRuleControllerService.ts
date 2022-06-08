/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectRuleControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 下載製作規範
     * @returns any OK
     * @throws ApiError
     */
    public downloadUsingGet1(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/project/rule/download',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
