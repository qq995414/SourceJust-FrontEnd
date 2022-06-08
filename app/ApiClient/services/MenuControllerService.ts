/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MenuControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * save
     * @param code 
     * @param name 
     * @param pCode 
     * @param pCodes 
     * @param component 
     * @param createBy 
     * @param createTime 
     * @param hidden 
     * @param icon 
     * @param id 
     * @param isMenu 
     * @param isOpen 
     * @param levels 
     * @param modifyBy 
     * @param modifyTime 
     * @param num 
     * @param tips 
     * @param url 
     * @returns any OK
     * @throws ApiError
     */
    public saveUsingPost5(
code: string,
name: string,
pCode?: string,
pCodes?: string,
component?: string,
createBy?: number,
createTime?: string,
hidden?: boolean,
icon?: string,
id?: number,
isMenu?: number,
isOpen?: number,
levels?: number,
modifyBy?: number,
modifyTime?: string,
num?: number,
tips?: string,
url?: string,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/menu',
            query: {
                'PCode': pCode,
                'PCodes': pCodes,
                'code': code,
                'component': component,
                'createBy': createBy,
                'createTime': createTime,
                'hidden': hidden,
                'icon': icon,
                'id': id,
                'isMenu': isMenu,
                'isOpen': isOpen,
                'levels': levels,
                'modifyBy': modifyBy,
                'modifyTime': modifyTime,
                'name': name,
                'num': num,
                'tips': tips,
                'url': url,
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
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public removeUsingDelete4(
id: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/menu',
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
     * list
     * @returns any OK
     * @throws ApiError
     */
    public listUsingGet8(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/menu/list',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * listForRouter
     * @returns any OK
     * @throws ApiError
     */
    public listForRouterUsingGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/menu/listForRouter',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * menuTreeListByRoleId
     * @param roleId roleId
     * @returns any OK
     * @throws ApiError
     */
    public menuTreeListByRoleIdUsingGet(
roleId?: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/menu/menuTreeListByRoleId',
            query: {
                'roleId': roleId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * tree
     * @returns any OK
     * @throws ApiError
     */
    public treeUsingGet(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/menu/tree',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
