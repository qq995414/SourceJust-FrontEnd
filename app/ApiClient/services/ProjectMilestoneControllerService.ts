/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectMilestoneRequest } from '../models/ProjectMilestoneRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectMilestoneControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 新增milestone
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public saveUsingPost7(
requestBody?: ProjectMilestoneRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/project/milestone',
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
     * 刪除milestone
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public removeUsingDelete5(
id?: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/project/milestone',
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
     * 修改milestone
     * @param id id
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public editUsingPut(
id: number,
requestBody?: ProjectMilestoneRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/project/milestone/{id}',
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

    /**
     * 取得milestone
     * @param projectId projectId
     * @returns any OK
     * @throws ApiError
     */
    public listUsingGet13(
projectId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/project/milestone/{projectId}',
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
