/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserRequest } from '../models/UserRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * save
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public saveUsingPost9(
requestBody?: UserRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user',
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
     * remove
     * @param userId userId
     * @returns any OK
     * @throws ApiError
     */
    public removeUsingDelete7(
userId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user',
            query: {
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * list
     * @param account account
     * @param limit 
     * @param offset 
     * @param order 
     * @param page 
     * @param sort 
     * @param name name
     * @returns any OK
     * @throws ApiError
     */
    public listUsingGet15(
account?: string,
limit?: any,
offset?: any,
order?: any,
page?: any,
sort?: any,
name?: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/list',
            query: {
                'account': account,
                'limit': limit,
                'offset': offset,
                'order': order,
                'page': page,
                'sort': sort,
                'name': name,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * resetPwd
     * @param userId userId
     * @param password password
     * @returns any OK
     * @throws ApiError
     */
    public resetPwdUsingPost(
userId?: number,
password?: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/resetPwd',
            query: {
                'userId': userId,
                'password': password,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * setRole
     * @param userId userId
     * @param roleIds roleIds
     * @returns any OK
     * @throws ApiError
     */
    public setRoleUsingGet(
userId: number,
roleIds: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/setRole',
            query: {
                'userId': userId,
                'roleIds': roleIds,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * update
     * @param id id
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public updateUsingPut7(
id: number,
requestBody?: UserRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/user/{id}',
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
