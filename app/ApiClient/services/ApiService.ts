/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminResetPwdRequest } from '../models/AdminResetPwdRequest';
import type { ArticleRequest } from '../models/ArticleRequest';
import type { Cfg } from '../models/Cfg';
import type { ChannelRequest } from '../models/ChannelRequest';
import type { ContactsRequest } from '../models/ContactsRequest';
import type { LoginRequest } from '../models/LoginRequest';
import type { Menu } from '../models/Menu';
import type { PayInfoRequest } from '../models/PayInfoRequest';
import type { PortfolioRequest } from '../models/PortfolioRequest';
import type { ProjectDetailRequest } from '../models/ProjectDetailRequest';
import type { ProjectMilestoneRequest } from '../models/ProjectMilestoneRequest';
import type { ProjectRequest } from '../models/ProjectRequest';
import type { ResetPwdRequest } from '../models/ResetPwdRequest';
import type { ResponseArticleResponse } from '../models/ResponseArticleResponse';
import type { ResponseBoolean } from '../models/ResponseBoolean';
import type { ResponseCfgResponse } from '../models/ResponseCfgResponse';
import type { ResponseChannelResponse } from '../models/ResponseChannelResponse';
import type { ResponseContactsResponse } from '../models/ResponseContactsResponse';
import type { ResponseContractResponse } from '../models/ResponseContractResponse';
import type { ResponseDeleteFileResponse } from '../models/ResponseDeleteFileResponse';
import type { ResponseFileInfoResponse } from '../models/ResponseFileInfoResponse';
import type { ResponseHashMapStringListNode } from '../models/ResponseHashMapStringListNode';
import type { ResponseListContractResponse } from '../models/ResponseListContractResponse';
import type { ResponseListMenuNode } from '../models/ResponseListMenuNode';
import type { ResponseListPayInfoResponse } from '../models/ResponseListPayInfoResponse';
import type { ResponseListProjectDetailResponse } from '../models/ResponseListProjectDetailResponse';
import type { ResponseListProjectMilestoneResponse } from '../models/ResponseListProjectMilestoneResponse';
import type { ResponseListRouterMenu } from '../models/ResponseListRouterMenu';
import type { ResponseListTreeSelectNode } from '../models/ResponseListTreeSelectNode';
import type { ResponseListUserResponse } from '../models/ResponseListUserResponse';
import type { ResponseObject } from '../models/ResponseObject';
import type { ResponsePaginationResponseArticleResponse } from '../models/ResponsePaginationResponseArticleResponse';
import type { ResponsePaginationResponseChannelResponse } from '../models/ResponsePaginationResponseChannelResponse';
import type { ResponsePaginationResponseContactsResponse } from '../models/ResponsePaginationResponseContactsResponse';
import type { ResponsePaginationResponseFileInfoResponse } from '../models/ResponsePaginationResponseFileInfoResponse';
import type { ResponsePaginationResponseMessageLogResponse } from '../models/ResponsePaginationResponseMessageLogResponse';
import type { ResponsePaginationResponsePortfolioResponse } from '../models/ResponsePaginationResponsePortfolioResponse';
import type { ResponsePaginationResponseProjectDetailResponse } from '../models/ResponsePaginationResponseProjectDetailResponse';
import type { ResponsePaginationResponseProjectResponse } from '../models/ResponsePaginationResponseProjectResponse';
import type { ResponsePaginationResponseProjectUserResponse } from '../models/ResponsePaginationResponseProjectUserResponse';
import type { ResponsePaginationResponseRoleResponse } from '../models/ResponsePaginationResponseRoleResponse';
import type { ResponsePaginationResponseTagInfoResponse } from '../models/ResponsePaginationResponseTagInfoResponse';
import type { ResponsePaginationResponseTemplateResponse } from '../models/ResponsePaginationResponseTemplateResponse';
import type { ResponsePaginationResponseUserResponse } from '../models/ResponsePaginationResponseUserResponse';
import type { ResponsePayInfoResponse } from '../models/ResponsePayInfoResponse';
import type { ResponsePortfolioResponse } from '../models/ResponsePortfolioResponse';
import type { ResponseProjectDetailResponse } from '../models/ResponseProjectDetailResponse';
import type { ResponseProjectMilestoneResponse } from '../models/ResponseProjectMilestoneResponse';
import type { ResponseProjectResponse } from '../models/ResponseProjectResponse';
import type { ResponseProjectUserResponse } from '../models/ResponseProjectUserResponse';
import type { ResponseRoleResponse } from '../models/ResponseRoleResponse';
import type { ResponseTagInfoResponse } from '../models/ResponseTagInfoResponse';
import type { ResponseTemplateResponse } from '../models/ResponseTemplateResponse';
import type { ResponseUserProfileResponse } from '../models/ResponseUserProfileResponse';
import type { ResponseUserResponse } from '../models/ResponseUserResponse';
import type { ResponseVoid } from '../models/ResponseVoid';
import type { RoleRequest } from '../models/RoleRequest';
import type { TemplateRequest } from '../models/TemplateRequest';
import type { UserRequest } from '../models/UserRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ApiService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 更新會員
     * @param id 
     * @param requestBody 
     * @returns ResponseUserResponse OK
     * @throws ApiError
     */
    public update(
id: number,
requestBody: UserRequest,
): CancelablePromise<ResponseUserResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/user/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 修改角色
     * @param id 
     * @param requestBody 
     * @returns ResponseRoleResponse OK
     * @throws ApiError
     */
    public updateRole(
id: number,
requestBody: RoleRequest,
): CancelablePromise<ResponseRoleResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/role/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 更新狀態
     * @param projectId 
     * @param status 
     * @returns ResponseProjectResponse OK
     * @throws ApiError
     */
    public updateProjectStatus(
projectId: number,
status: 'PROPOSAL' | 'UI_FINISH' | 'RUNNING' | 'FINISH' | 'REVIEW' | 'PAYING' | 'DONE' | 'CLOSE',
): CancelablePromise<ResponseProjectResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/project/{projectId}/status/{status}',
            path: {
                'projectId': projectId,
                'status': status,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 更新角色狀態
     * @param projectId 
     * @param roleCode 
     * @param status 
     * @returns ResponseProjectResponse OK
     * @throws ApiError
     */
    public updateProjectRoleStatus(
projectId: number,
roleCode: string,
status: string,
): CancelablePromise<ResponseProjectResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/project/{projectId}/status/{roleCode}/{status}',
            path: {
                'projectId': projectId,
                'roleCode': roleCode,
                'status': status,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 修改milestone
     * @param id 
     * @param requestBody 
     * @returns ResponseProjectMilestoneResponse OK
     * @throws ApiError
     */
    public updateMilestone(
id: number,
requestBody: ProjectMilestoneRequest,
): CancelablePromise<ResponseProjectMilestoneResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/project/milestone/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 用category取得cfg
     * @param projectId 
     * @param category 
     * @returns ResponseCfgResponse OK
     * @throws ApiError
     */
    public findCfgByCategory(
projectId: number,
category: string,
): CancelablePromise<ResponseCfgResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cfg/{projectId}/{category}',
            path: {
                'projectId': projectId,
                'category': category,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 修改cfg
     * @param projectId 
     * @param category 
     * @param requestBody 
     * @returns ResponseCfgResponse OK
     * @throws ApiError
     */
    public updateCfg(
projectId: number,
category: string,
requestBody: Cfg,
): CancelablePromise<ResponseCfgResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/cfg/{projectId}/{category}',
            path: {
                'projectId': projectId,
                'category': category,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 用id查詢模板
     * @param id 
     * @returns ResponseTemplateResponse OK
     * @throws ApiError
     */
    public findTemplateById(
id: number,
): CancelablePromise<ResponseTemplateResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/template/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 更新模板
     * @param id 
     * @param requestBody 
     * @returns ResponseTemplateResponse OK
     * @throws ApiError
     */
    public updateTemplate(
id: number,
requestBody: TemplateRequest,
): CancelablePromise<ResponseTemplateResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/admin/template/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 用id查詢標籤
     * @param id 
     * @returns ResponseTagInfoResponse OK
     * @throws ApiError
     */
    public findTagInfoById(
id: number,
): CancelablePromise<ResponseTagInfoResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/tagInfo/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 更新標籤
     * @param id 
     * @param tagName 
     * @returns ResponseTagInfoResponse OK
     * @throws ApiError
     */
    public updateTagInfo(
id: number,
tagName: string,
): CancelablePromise<ResponseTagInfoResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/admin/tagInfo/{id}',
            path: {
                'id': id,
            },
            query: {
                'tagName': tagName,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 用id查詢
     * @param id 
     * @returns ResponseProjectResponse OK
     * @throws ApiError
     */
    public findProjectById(
id: number,
): CancelablePromise<ResponseProjectResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/project/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 更新project
     * @param id 
     * @param requestBody 
     * @returns ResponseProjectResponse OK
     * @throws ApiError
     */
    public updateProject(
id: number,
requestBody: ProjectRequest,
): CancelablePromise<ResponseProjectResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/admin/project/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 用id查詢
     * @param id 
     * @returns ResponseProjectDetailResponse OK
     * @throws ApiError
     */
    public findProjectDetailById(
id: number,
): CancelablePromise<ResponseProjectDetailResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/project/detail/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 更新projectDetail
     * @param id 
     * @param requestBody 
     * @returns ResponseProjectDetailResponse OK
     * @throws ApiError
     */
    public updateProjectDetail(
id: number,
requestBody: ProjectDetailRequest,
): CancelablePromise<ResponseProjectDetailResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/admin/project/detail/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 用id查詢作品集
     * @param id 
     * @returns ResponsePortfolioResponse OK
     * @throws ApiError
     */
    public findPortfolioById(
id: number,
): CancelablePromise<ResponsePortfolioResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/portfolio/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 更新作品集
     * @param id 
     * @param requestBody 
     * @returns ResponsePortfolioResponse OK
     * @throws ApiError
     */
    public updatePortfolio(
id: number,
requestBody: PortfolioRequest,
): CancelablePromise<ResponsePortfolioResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/admin/portfolio/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 更新報價
     * @param id 
     * @param requestBody 
     * @returns ResponsePayInfoResponse OK
     * @throws ApiError
     */
    public updatePayInfo(
id: number,
requestBody: PayInfoRequest,
): CancelablePromise<ResponsePayInfoResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/admin/payInfo/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 刪除報價
     * @param id 
     * @returns ResponseVoid OK
     * @throws ApiError
     */
    public deletePayInfo(
id: number,
): CancelablePromise<ResponseVoid> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/payInfo/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 用Id查詢單筆聯絡我們
     * @param id 
     * @returns ResponseContactsResponse OK
     * @throws ApiError
     */
    public findOneContact(
id: number,
): CancelablePromise<ResponseContactsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/contact/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 更新聯絡我們
     * @param id 
     * @param requestBody 
     * @returns ResponseContactsResponse OK
     * @throws ApiError
     */
    public updateContact(
id: number,
requestBody: ContactsRequest,
): CancelablePromise<ResponseContactsResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/admin/contact/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 更新欄目
     * @param id 
     * @param requestBody 
     * @returns ResponseChannelResponse OK
     * @throws ApiError
     */
    public updateChannel(
id: number,
requestBody: ChannelRequest,
): CancelablePromise<ResponseChannelResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/admin/channel/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 用id查詢文章
     * @param id 
     * @returns ResponseArticleResponse OK
     * @throws ApiError
     */
    public findById(
id: number,
): CancelablePromise<ResponseArticleResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/article/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 更新文章
     * @param id 
     * @param requestBody 
     * @returns ResponseArticleResponse OK
     * @throws ApiError
     */
    public updateArticle(
id: number,
requestBody: ArticleRequest,
): CancelablePromise<ResponseArticleResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/admin/article/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 用戶更新
     * @param id 
     * @param requestBody 
     * @returns ResponseUserResponse OK
     * @throws ApiError
     */
    public updateUser(
id: number,
requestBody: UserRequest,
): CancelablePromise<ResponseUserResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/account/update/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增會員
     * @param requestBody 
     * @returns ResponseUserResponse OK
     * @throws ApiError
     */
    public save(
requestBody: UserRequest,
): CancelablePromise<ResponseUserResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 刪除會員
     * @param userId 
     * @returns ResponseVoid OK
     * @throws ApiError
     */
    public remove(
userId: number,
): CancelablePromise<ResponseVoid> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/user',
            query: {
                'userId': userId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 設定角色
     * @param userId 
     * @param roleIds 
     * @returns ResponseUserResponse OK
     * @throws ApiError
     */
    public setRole(
userId: number,
roleIds: string,
): CancelablePromise<ResponseUserResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/setRole',
            query: {
                'userId': userId,
                'roleIds': roleIds,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 重設密碼
     * @param requestBody 
     * @returns ResponseVoid OK
     * @throws ApiError
     */
    public resetPwd(
requestBody: AdminResetPwdRequest,
): CancelablePromise<ResponseVoid> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/user/resetPwd',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增角色
     * @param requestBody 
     * @returns ResponseRoleResponse OK
     * @throws ApiError
     */
    public createRole(
requestBody: RoleRequest,
): CancelablePromise<ResponseRoleResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/role',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 刪除角色
     * @param roleId 
     * @returns ResponseVoid OK
     * @throws ApiError
     */
    public deleteRole(
roleId: number,
): CancelablePromise<ResponseVoid> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/role',
            query: {
                'roleId': roleId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 設定權限
     * @param roleId 
     * @param permissions 
     * @returns ResponseVoid OK
     * @throws ApiError
     */
    public settingRolePermission(
roleId: number,
permissions: string,
): CancelablePromise<ResponseVoid> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/role/savePermission',
            query: {
                'roleId': roleId,
                'permissions': permissions,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增milestone
     * @param requestBody 
     * @returns ResponseProjectMilestoneResponse OK
     * @throws ApiError
     */
    public createMilestone(
requestBody: ProjectMilestoneRequest,
): CancelablePromise<ResponseProjectMilestoneResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/project/milestone',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 刪除milestone
     * @param id 
     * @returns ResponseVoid OK
     * @throws ApiError
     */
    public deleteMilestone(
id: number,
): CancelablePromise<ResponseVoid> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/project/milestone',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增菜單
     * @param requestBody 
     * @returns ResponseObject OK
     * @throws ApiError
     */
    public createMenu(
requestBody: Menu,
): CancelablePromise<ResponseObject> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/menu',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 刪除菜單
     * @param id 
     * @returns ResponseVoid OK
     * @throws ApiError
     */
    public deleteMenu(
id: number,
): CancelablePromise<ResponseVoid> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/menu',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 上傳檔案
     * @param fileType 
     * @param formData 
     * @returns ResponseFileInfoResponse OK
     * @throws ApiError
     */
    public uploadFile(
fileType: 'UI' | 'DATA' | 'CONTRACT' | 'DEV_TEST' | 'PROD_TEST' | 'BLOG' | 'PORTFOLIO',
formData?: {
file: Blob;
},
): CancelablePromise<ResponseFileInfoResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/file/upload',
            query: {
                'fileType': fileType,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增cfg
     * @param requestBody 
     * @returns ResponseCfgResponse OK
     * @throws ApiError
     */
    public crateCfg(
requestBody: Cfg,
): CancelablePromise<ResponseCfgResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cfg',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增模板
     * @param requestBody 
     * @returns ResponseTemplateResponse OK
     * @throws ApiError
     */
    public crateTemplate(
requestBody: TemplateRequest,
): CancelablePromise<ResponseTemplateResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/template',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 刪除模板
     * @param id 
     * @returns ResponseVoid OK
     * @throws ApiError
     */
    public deleteTemplate(
id: number,
): CancelablePromise<ResponseVoid> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/template',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增標籤
     * @param tagName 
     * @returns ResponseTagInfoResponse OK
     * @throws ApiError
     */
    public createTagInfo(
tagName: string,
): CancelablePromise<ResponseTagInfoResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/tagInfo',
            query: {
                'tagName': tagName,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 刪除標籤
     * @param id 
     * @returns ResponseVoid OK
     * @throws ApiError
     */
    public deleteTagInfo(
id: number,
): CancelablePromise<ResponseVoid> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/tagInfo',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增project
     * @param requestBody 
     * @returns ResponseProjectResponse OK
     * @throws ApiError
     */
    public createProject(
requestBody: ProjectRequest,
): CancelablePromise<ResponseProjectResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/project',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 設定專案對應的使用者
     * @param projectId 
     * @param userId 
     * @returns ResponseProjectUserResponse OK
     * @throws ApiError
     */
    public setProjectSUser(
projectId: number,
userId: number,
): CancelablePromise<ResponseProjectUserResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/project/setUser',
            query: {
                'projectId': projectId,
                'userId': userId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增projectDetail
     * @param requestBody 
     * @returns ResponseProjectDetailResponse OK
     * @throws ApiError
     */
    public createProjectDetail(
requestBody: ProjectDetailRequest,
): CancelablePromise<ResponseProjectDetailResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/project/detail',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增作品集
     * @param requestBody 
     * @returns ResponsePortfolioResponse OK
     * @throws ApiError
     */
    public createPortfolio(
requestBody: PortfolioRequest,
): CancelablePromise<ResponsePortfolioResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/portfolio',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 刪除作品集
     * @param id 
     * @returns ResponseVoid OK
     * @throws ApiError
     */
    public deletePortfolio(
id: number,
): CancelablePromise<ResponseVoid> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/portfolio',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增報價
     * @param requestBody 
     * @returns ResponsePayInfoResponse OK
     * @throws ApiError
     */
    public createPayInfo(
requestBody: PayInfoRequest,
): CancelablePromise<ResponsePayInfoResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/payInfo',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增合約內容
     * @param userId 
     * @param projectId 
     * @param requestBody 
     * @returns ResponseContractResponse OK
     * @throws ApiError
     */
    public createContact(
userId: number,
projectId: number,
requestBody?: {
file: Blob;
},
): CancelablePromise<ResponseContractResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/contract/{userId}/{projectId}',
            path: {
                'userId': userId,
                'projectId': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增欄目
     * @param requestBody 
     * @returns ResponseChannelResponse OK
     * @throws ApiError
     */
    public createChannel(
requestBody: ChannelRequest,
): CancelablePromise<ResponseChannelResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/channel',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 用id刪除欄目
     * @param id 
     * @returns ResponseVoid OK
     * @throws ApiError
     */
    public deleteById(
id: number,
): CancelablePromise<ResponseVoid> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/channel',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 新增文章
     * @param requestBody 
     * @returns ResponseArticleResponse OK
     * @throws ApiError
     */
    public createArticle(
requestBody: ArticleRequest,
): CancelablePromise<ResponseArticleResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/article',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 刪除文章
     * @param id 
     * @returns ResponseVoid OK
     * @throws ApiError
     */
    public deleteArticle(
id: number,
): CancelablePromise<ResponseVoid> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/article',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 更新密碼
     * @param requestBody 
     * @returns ResponseUserResponse OK
     * @throws ApiError
     */
    public updatePassword(
requestBody: ResetPwdRequest,
): CancelablePromise<ResponseUserResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/account/updatePwd',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 用戶登入
     * @param requestBody 
     * @returns ResponseUserProfileResponse OK
     * @throws ApiError
     */
    public userLogin(
requestBody: LoginRequest,
): CancelablePromise<ResponseUserProfileResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/account/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取得會員列表
     * @param account 
     * @param name 
     * @param page 
     * @param limit 
     * @param order 
     * @returns ResponsePaginationResponseUserResponse OK
     * @throws ApiError
     */
    public list(
account?: string,
name?: string,
page?: number,
limit?: number,
order?: string,
): CancelablePromise<ResponsePaginationResponseUserResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user/list',
            query: {
                'account': account,
                'name': name,
                'page': page,
                'limit': limit,
                'order': order,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取角色樹
     * @param userId 
     * @returns ResponseHashMapStringListNode OK
     * @throws ApiError
     */
    public getRoleTreeByUserId(
userId: number,
): CancelablePromise<ResponseHashMapStringListNode> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/role/roleTreeListByIdUser',
            query: {
                'userId': userId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取得角色列表
     * @param name 
     * @param tips 
     * @param page 
     * @param limit 
     * @param order 
     * @returns ResponsePaginationResponseRoleResponse OK
     * @throws ApiError
     */
    public listRole(
name?: string,
tips?: string,
page?: number,
limit?: number,
order?: string,
): CancelablePromise<ResponsePaginationResponseRoleResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/role/list',
            query: {
                'name': name,
                'tips': tips,
                'page': page,
                'limit': limit,
                'order': order,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 用projectId查詢
     * @param projectId 
     * @returns ResponseProjectResponse OK
     * @throws ApiError
     */
    public findProjectByProjectId(
projectId: number,
): CancelablePromise<ResponseProjectResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/project/{projectId}',
            path: {
                'projectId': projectId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 下載製作規範
     * @returns any OK
     * @throws ApiError
     */
    public downloadProjectRule(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/project/rule/download',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取得milestone列表
     * @param projectId 
     * @returns ResponseListProjectMilestoneResponse OK
     * @throws ApiError
     */
    public listMilestoneByProjectId(
projectId: number,
): CancelablePromise<ResponseListProjectMilestoneResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/project/milestone/{projectId}',
            path: {
                'projectId': projectId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取得專案列表
     * @param projectName 
     * @param page 
     * @param limit 
     * @param order 
     * @returns ResponsePaginationResponseProjectUserResponse OK
     * @throws ApiError
     */
    public listProject(
projectName?: string,
page?: number,
limit?: number,
order?: string,
): CancelablePromise<ResponsePaginationResponseProjectUserResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/project/list',
            query: {
                'projectName': projectName,
                'page': page,
                'limit': limit,
                'order': order,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取得project detail 列表
     * @param projectId 
     * @returns ResponseListProjectDetailResponse OK
     * @throws ApiError
     */
    public listProjectDetailByProjectId(
projectId: number,
): CancelablePromise<ResponseListProjectDetailResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/project/detail/{projectId}',
            path: {
                'projectId': projectId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取得使用者報價清單
     * @param projectId 
     * @returns ResponseListPayInfoResponse OK
     * @throws ApiError
     */
    public listPayInfo(
projectId: number,
): CancelablePromise<ResponseListPayInfoResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/payInfo/{projectId}',
            path: {
                'projectId': projectId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取得訊息列表
     * @param projectId 
     * @param uiId 
     * @param page 
     * @param limit 
     * @param offset 
     * @param order 
     * @param sort 
     * @returns ResponsePaginationResponseMessageLogResponse OK
     * @throws ApiError
     */
    public listMessage(
projectId?: number,
uiId?: number,
page?: number,
limit?: number,
offset?: number,
order?: string,
sort?: string,
): CancelablePromise<ResponsePaginationResponseMessageLogResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/messageLog/list',
            query: {
                'projectId': projectId,
                'uiId': uiId,
                'page': page,
                'limit': limit,
                'offset': offset,
                'order': order,
                'sort': sort,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 菜單樹狀結構
     * @returns ResponseListTreeSelectNode OK
     * @throws ApiError
     */
    public listMenuTree(): CancelablePromise<ResponseListTreeSelectNode> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/menu/tree',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 獲取菜單數
     * @param roleId 
     * @returns ResponseHashMapStringListNode OK
     * @throws ApiError
     */
    public listMenuTreeByRoleId(
roleId: number,
): CancelablePromise<ResponseHashMapStringListNode> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/menu/menuTreeListByRoleId',
            query: {
                'roleId': roleId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 菜單列表
     * @returns ResponseListMenuNode OK
     * @throws ApiError
     */
    public listMenu(): CancelablePromise<ResponseListMenuNode> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/menu/list',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 菜單列表路由器
     * @returns ResponseListRouterMenu OK
     * @throws ApiError
     */
    public listMenuRouter(): CancelablePromise<ResponseListRouterMenu> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/menu/listForRouter',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取得檔案列表
     * @param fileType 
     * @returns ResponsePaginationResponseFileInfoResponse OK
     * @throws ApiError
     */
    public listFileInfo(
fileType?: 'UI' | 'DATA' | 'CONTRACT' | 'DEV_TEST' | 'PROD_TEST' | 'BLOG' | 'PORTFOLIO',
): CancelablePromise<ResponsePaginationResponseFileInfoResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/file/list',
            query: {
                'fileType': fileType,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取得上傳檔案圖
     * @param fileId 
     * @returns any OK
     * @throws ApiError
     */
    public getFileImg(
fileId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/file/imgStream/{fileId}',
            path: {
                'fileId': fileId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 確認上傳檔案是否存在
     * @param fileId 
     * @returns ResponseBoolean OK
     * @throws ApiError
     */
    public isFileExist(
fileId: number,
): CancelablePromise<ResponseBoolean> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/file/exist/{fileId}',
            path: {
                'fileId': fileId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 下載檔案
     * @param fileId 
     * @returns binary OK
     * @throws ApiError
     */
    public downloadFile(
fileId: number,
): CancelablePromise<Blob> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/file/download/{fileId}',
            path: {
                'fileId': fileId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 用projectId取得單一合約資訊
     * @param projectId 
     * @returns any OK
     * @throws ApiError
     */
    public findContactByProjectId(
projectId: number,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contract/{projectId}',
            path: {
                'projectId': projectId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取得單一cfg
     * @param id 
     * @returns ResponseCfgResponse OK
     * @throws ApiError
     */
    public findOneCfg(
id: number,
): CancelablePromise<ResponseCfgResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cfg/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 刪除cfg
     * @param id 
     * @returns ResponseVoid OK
     * @throws ApiError
     */
    public deleteCfg(
id: number,
): CancelablePromise<ResponseVoid> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/cfg/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 快取列表
     * @returns any OK
     * @throws ApiError
     */
    public listCache(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/cache/list',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取得模板列表
     * @param name 
     * @param category 
     * @param startDate 
     * @param endDate 
     * @param page 
     * @param limit 
     * @param order 
     * @returns ResponsePaginationResponseTemplateResponse OK
     * @throws ApiError
     */
    public listTemplate(
name?: string,
category?: string,
startDate?: string,
endDate?: string,
page?: number,
limit?: number,
order?: string,
): CancelablePromise<ResponsePaginationResponseTemplateResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/template/list',
            query: {
                'name': name,
                'category': category,
                'startDate': startDate,
                'endDate': endDate,
                'page': page,
                'limit': limit,
                'order': order,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取得標籤列表
     * @param tagName 
     * @param page 
     * @param limit 
     * @param offset 
     * @param order 
     * @param sort 
     * @returns ResponsePaginationResponseTagInfoResponse OK
     * @throws ApiError
     */
    public listTagInfo(
tagName?: string,
page?: number,
limit?: number,
offset?: number,
order?: string,
sort?: string,
): CancelablePromise<ResponsePaginationResponseTagInfoResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/tagInfo/list',
            query: {
                'tagName': tagName,
                'page': page,
                'limit': limit,
                'offset': offset,
                'order': order,
                'sort': sort,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取得專案列表
     * @param page 
     * @param limit 
     * @param order 
     * @returns ResponsePaginationResponseProjectResponse OK
     * @throws ApiError
     */
    public listProject1(
page?: number,
limit?: number,
order?: string,
): CancelablePromise<ResponsePaginationResponseProjectResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/project/list',
            query: {
                'page': page,
                'limit': limit,
                'order': order,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取得專案對應的使用者
     * @param projectId 
     * @returns ResponseListUserResponse OK
     * @throws ApiError
     */
    public getProjectSUser(
projectId: number,
): CancelablePromise<ResponseListUserResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/project/getUser',
            query: {
                'projectId': projectId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取得專案細節列表
     * @param page 
     * @param limit 
     * @param order 
     * @returns ResponsePaginationResponseProjectDetailResponse OK
     * @throws ApiError
     */
    public listProjectDetail(
page?: number,
limit?: number,
order?: string,
): CancelablePromise<ResponsePaginationResponseProjectDetailResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/project/detail/list',
            query: {
                'page': page,
                'limit': limit,
                'order': order,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取得作品集列表
     * @param channelId 
     * @param title 
     * @param startDate 
     * @param endDate 
     * @param page 
     * @param limit 
     * @param order 
     * @returns ResponsePaginationResponsePortfolioResponse OK
     * @throws ApiError
     */
    public listPortfolio(
channelId?: number,
title?: string,
startDate?: string,
endDate?: string,
page?: number,
limit?: number,
order?: string,
): CancelablePromise<ResponsePaginationResponsePortfolioResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/portfolio/list',
            query: {
                'channelId': channelId,
                'title': title,
                'startDate': startDate,
                'endDate': endDate,
                'page': page,
                'limit': limit,
                'order': order,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取得使用者報價清單
     * @param projectId 
     * @param userId 
     * @returns ResponseListPayInfoResponse OK
     * @throws ApiError
     */
    public listUserPayInfo(
projectId: number,
userId: number,
): CancelablePromise<ResponseListPayInfoResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/payInfo/list',
            query: {
                'projectId': projectId,
                'userId': userId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 用Id取得單一合約資訊
     * @param id 
     * @returns ResponseContractResponse OK
     * @throws ApiError
     */
    public findContactById(
id: number,
): CancelablePromise<ResponseContractResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/contract/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 刪除合約內容
     * @param id 
     * @returns ResponseVoid OK
     * @throws ApiError
     */
    public deleteContact(
id: number,
): CancelablePromise<ResponseVoid> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/contract/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 用projectId取得列表
     * @param projectId 
     * @returns ResponseListContractResponse OK
     * @throws ApiError
     */
    public listByProjectIdInContact(
projectId: number,
): CancelablePromise<ResponseListContractResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/contract/list/{projectId}',
            path: {
                'projectId': projectId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 聯絡我們列表
     * @param searchKeyword 
     * @param status 
     * @param isReply 
     * @param startDate 
     * @param endDate 
     * @param page 
     * @param limit 
     * @param order 
     * @returns ResponsePaginationResponseContactsResponse OK
     * @throws ApiError
     */
    public listContact(
searchKeyword?: string,
status?: 'INIT' | 'READ' | 'DONE',
isReply?: boolean,
startDate?: string,
endDate?: string,
page?: number,
limit?: number,
order?: string,
): CancelablePromise<ResponsePaginationResponseContactsResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/contact/list',
            query: {
                'searchKeyword': searchKeyword,
                'status': status,
                'isReply': isReply,
                'startDate': startDate,
                'endDate': endDate,
                'page': page,
                'limit': limit,
                'order': order,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 全部欄目
     * @param type 
     * @param page 
     * @param limit 
     * @param order 
     * @returns ResponsePaginationResponseChannelResponse OK
     * @throws ApiError
     */
    public listChannel(
type?: 'ARTICLE' | 'PORTFOLIO',
page?: number,
limit?: number,
order?: string,
): CancelablePromise<ResponsePaginationResponseChannelResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/channel/list',
            query: {
                'type': type,
                'page': page,
                'limit': limit,
                'order': order,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 取得文章列表
     * @param channelId 
     * @param title 
     * @param startDate 
     * @param endDate 
     * @param page 
     * @param limit 
     * @param order 
     * @returns ResponsePaginationResponseArticleResponse OK
     * @throws ApiError
     */
    public listArticle(
channelId?: number,
title?: string,
startDate?: string,
endDate?: string,
page?: number,
limit?: number,
order?: string,
): CancelablePromise<ResponsePaginationResponseArticleResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/admin/article/list',
            query: {
                'channelId': channelId,
                'title': title,
                'startDate': startDate,
                'endDate': endDate,
                'page': page,
                'limit': limit,
                'order': order,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 登出
     * @returns any OK
     * @throws ApiError
     */
    public userLogout(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/account/logout',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 會員資訊
     * @returns ResponseUserProfileResponse OK
     * @throws ApiError
     */
    public userInfo(): CancelablePromise<ResponseUserProfileResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/account/info',
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 刪除檔案
     * @param fileId 
     * @returns ResponseDeleteFileResponse OK
     * @throws ApiError
     */
    public deleteFileImg(
fileId: number,
): CancelablePromise<ResponseDeleteFileResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/file/{fileId}',
            path: {
                'fileId': fileId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 刪除對應的使用者
     * @param projectId 
     * @param userId 
     * @returns ResponseVoid OK
     * @throws ApiError
     */
    public deleteMappingUser(
projectId: number,
userId: number,
): CancelablePromise<ResponseVoid> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/project/deleteUser',
            query: {
                'projectId': projectId,
                'userId': userId,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * 刪除聯絡我們
     * @param id 
     * @returns ResponseVoid OK
     * @throws ApiError
     */
    public deleteContact1(
id: number,
): CancelablePromise<ResponseVoid> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/admin/contact',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

}
