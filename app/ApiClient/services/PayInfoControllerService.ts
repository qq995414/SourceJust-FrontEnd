/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PayInfoControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 取得使用者報價清單
     * @param projectId projectId
     * @returns any OK
     * @throws ApiError
     */
    public findPayInfoListUsingGet1(
projectId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/payInfo/{projectId}',
            path: {
                'projectId': projectId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
