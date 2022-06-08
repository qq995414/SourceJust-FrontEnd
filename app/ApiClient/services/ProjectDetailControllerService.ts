/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectDetailControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 取得project detail 列表
     * @param projectId projectId
     * @returns any OK
     * @throws ApiError
     */
    public listUsingGet12(
projectId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/project/detail/{projectId}',
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
