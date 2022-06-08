/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * list
     * @param limit 
     * @param offset 
     * @param order 
     * @param page 
     * @param projectName projectName
     * @param sort 
     * @returns any OK
     * @throws ApiError
     */
    public listUsingGet11(
limit?: any,
offset?: any,
order?: any,
page?: any,
projectName?: string,
sort?: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/project/list',
            query: {
                'limit': limit,
                'offset': offset,
                'order': order,
                'page': page,
                'projectName': projectName,
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
     * 用projectId查詢
     * @param projectId projectId
     * @returns any OK
     * @throws ApiError
     */
    public getUsingGet4(
projectId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/project/{projectId}',
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

    /**
     * 更新角色狀態
     * @param projectId projectId
     * @param roleCode roleCode
     * @param status status
     * @returns any OK
     * @throws ApiError
     */
    public updateProjectRoleStatusUsingPut(
projectId: number,
roleCode: string,
status: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/project/{projectId}/status/{roleCode}/{status}',
            path: {
                'projectId': projectId,
                'roleCode': roleCode,
                'status': status,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 更新狀態
     * @param projectId projectId
     * @param status status
     * @returns any OK
     * @throws ApiError
     */
    public updateProjectStatusUsingPut(
projectId: number,
status: 'CLOSE' | 'DONE' | 'FINISH' | 'PAYING' | 'PROPOSAL' | 'REVIEW' | 'RUNNING' | 'UI_FINISH',
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/project/{projectId}/status/{status}',
            path: {
                'projectId': projectId,
                'status': status,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
