/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Project = {
    contractInfo?: string;
    customerId?: number;
    designerStatus?: Project.designerStatus;
    engineerStatus?: Project.engineerStatus;
    finishTime?: string;
    price?: number;
    remark?: string;
    status?: Project.status;
    title?: string;
    treeImageUrl?: string;
};

export namespace Project {

    export enum designerStatus {
        CONTRACT = 'CONTRACT',
        DOWNLOAD = 'DOWNLOAD',
        MILESTONE = 'MILESTONE',
        PROPOSAL = 'PROPOSAL',
        UPLOAD_DATA = 'UPLOAD_DATA',
        UPLOAD_UI = 'UPLOAD_UI',
    }

    export enum engineerStatus {
        CONTRACT = 'CONTRACT',
        DEV_SERVER_TEST = 'DEV_SERVER_TEST',
        DOWNLOAD = 'DOWNLOAD',
        MILESTONE = 'MILESTONE',
        ONLINE = 'ONLINE',
        PROD_SERVER_TEST = 'PROD_SERVER_TEST',
        REVIEW = 'REVIEW',
        SETTING = 'SETTING',
        UI = 'UI',
        UPLOAD_DEV_SERVER = 'UPLOAD_DEV_SERVER',
        UPLOAD_PROD_SERVER = 'UPLOAD_PROD_SERVER',
    }

    export enum status {
        CLOSE = 'CLOSE',
        DONE = 'DONE',
        FINISH = 'FINISH',
        PAYING = 'PAYING',
        PROPOSAL = 'PROPOSAL',
        REVIEW = 'REVIEW',
        RUNNING = 'RUNNING',
        UI_FINISH = 'UI_FINISH',
    }


}
