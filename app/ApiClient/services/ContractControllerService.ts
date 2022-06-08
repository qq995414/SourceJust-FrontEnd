/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ContractControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 用projectId取得單一合約資訊
     * @param projectId projectId
     * @returns any OK
     * @throws ApiError
     */
    public findByProjectIdAndUserIdUsingGet1(
projectId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contract/{projectId}',
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
