/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginRequest } from '../models/LoginRequest';
import type { UserRequest } from '../models/UserRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AccountControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * info
     * @returns any OK
     * @throws ApiError
     */
    public infoUsingGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/account/info',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * login
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public loginUsingPost(
requestBody?: LoginRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/account/login',
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
     * logout
     * @returns any OK
     * @throws ApiError
     */
    public logoutUsingGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/account/logout',
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
    public updateUsingPut(
id: number,
requestBody?: UserRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/account/update/{id}',
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
     * updatePwd
     * @param oldPassword oldPassword
     * @param password password
     * @param rePassword rePassword
     * @returns any OK
     * @throws ApiError
     */
    public updatePwdUsingPost(
oldPassword?: string,
password?: string,
rePassword?: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/account/updatePwd',
            query: {
                'oldPassword': oldPassword,
                'password': password,
                'rePassword': rePassword,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
