/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProjectRequest = {
    title?: string;
    price?: number;
    finishTime?: string;
    treeImageUrl?: string;
    status: ProjectRequest.status;
    designerStatus?: ProjectRequest.designerStatus;
    engineerStatus?: ProjectRequest.engineerStatus;
    remark?: string;
    customerId: number;
    contractInfo?: string;
    needSign?: boolean;
    buildDoc?: boolean;
};

export namespace ProjectRequest {

    export enum status {
        PROPOSAL = 'PROPOSAL',
        UI_FINISH = 'UI_FINISH',
        RUNNING = 'RUNNING',
        FINISH = 'FINISH',
        REVIEW = 'REVIEW',
        PAYING = 'PAYING',
        DONE = 'DONE',
        CLOSE = 'CLOSE',
    }

    export enum designerStatus {
        PROPOSAL = 'PROPOSAL',
        CONTRACT = 'CONTRACT',
        MILESTONE = 'MILESTONE',
        DOWNLOAD = 'DOWNLOAD',
        UPLOAD_UI = 'UPLOAD_UI',
        UPLOAD_DATA = 'UPLOAD_DATA',
    }

    export enum engineerStatus {
        UI = 'UI',
        MILESTONE = 'MILESTONE',
        CONTRACT = 'CONTRACT',
        UPLOAD_DEV_SERVER = 'UPLOAD_DEV_SERVER',
        DOWNLOAD = 'DOWNLOAD',
        SETTING = 'SETTING',
        DEV_SERVER_TEST = 'DEV_SERVER_TEST',
        UPLOAD_PROD_SERVER = 'UPLOAD_PROD_SERVER',
        PROD_SERVER_TEST = 'PROD_SERVER_TEST',
        REVIEW = 'REVIEW',
        ONLINE = 'ONLINE',
    }


}
