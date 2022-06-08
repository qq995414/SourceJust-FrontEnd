/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RoleControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * save
     * @param name 
     * @param createBy 
     * @param createTime 
     * @param id 
     * @param modifyBy 
     * @param modifyTime 
     * @param num 
     * @param pid 
     * @param tips 
     * @param version 
     * @returns any OK
     * @throws ApiError
     */
    public saveUsingPost8(
name: string,
createBy?: number,
createTime?: string,
id?: number,
modifyBy?: number,
modifyTime?: string,
num?: number,
pid?: number,
tips?: string,
version?: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/role',
            query: {
                'createBy': createBy,
                'createTime': createTime,
                'id': id,
                'modifyBy': modifyBy,
                'modifyTime': modifyTime,
                'name': name,
                'num': num,
                'pid': pid,
                'tips': tips,
                'version': version,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * remove
     * @param roleId roleId
     * @returns any OK
     * @throws ApiError
     */
    public removeUsingDelete6(
roleId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/role',
            query: {
                'roleId': roleId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * list
     * @param limit 
     * @param name name
     * @param offset 
     * @param order 
     * @param page 
     * @param sort 
     * @param tips tips
     * @returns any OK
     * @throws ApiError
     */
    public listUsingGet14(
limit?: any,
name?: string,
offset?: any,
order?: any,
page?: any,
sort?: any,
tips?: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/role/list',
            query: {
                'limit': limit,
                'name': name,
                'offset': offset,
                'order': order,
                'page': page,
                'sort': sort,
                'tips': tips,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * roleTreeListByIdUser
     * @param idUser idUser
     * @returns any OK
     * @throws ApiError
     */
    public roleTreeListByIdUserUsingGet(
idUser?: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/role/roleTreeListByIdUser',
            query: {
                'idUser': idUser,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * setAuthority
     * @param roleId roleId
     * @param permissions permissions
     * @returns any OK
     * @throws ApiError
     */
    public setAuthorityUsingPost(
roleId?: number,
permissions?: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/role/savePermission',
            query: {
                'roleId': roleId,
                'permissions': permissions,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
