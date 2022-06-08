/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Project } from '../models/Project';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminProjectControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 新增project
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public saveUsingPost3(
requestBody?: Project,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/project',
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
     * 刪除對應的使用者
     * @param projectId projectId
     * @param userId userId
     * @returns any OK
     * @throws ApiError
     */
    public deleteUserUsingDelete(
projectId: number,
userId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/project/deleteUser',
            query: {
                'projectId': projectId,
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * 取得專案對應的使用者
     * @param projectId projectId
     * @returns any OK
     * @throws ApiError
     */
    public getUserUsingGet(
projectId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/project/getUser',
            query: {
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
     * list
     * @param limit 
     * @param offset 
     * @param order 
     * @param page 
     * @param sort 
     * @returns any OK
     * @throws ApiError
     */
    public listUsingGet4(
limit?: any,
offset?: any,
order?: any,
page?: any,
sort?: any,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/project/list',
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
     * 設定專案對應的使用者
     * @param projectId projectId
     * @param userId userId
     * @returns any OK
     * @throws ApiError
     */
    public setUserUsingPost(
projectId: number,
userId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/project/setUser',
            query: {
                'projectId': projectId,
                'userId': userId,
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
    public getUsingGet1(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/project/{id}',
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
     * 更新project
     * @param id id
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public updateUsingPut4(
id: number,
requestBody?: Project,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/admin/project/{id}',
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
