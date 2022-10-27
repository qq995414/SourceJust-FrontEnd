/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type FileInfoResponse = {
    id?: number;
    createTime?: string;
    createBy?: number;
    originalFileName?: string;
    realFileName?: string;
    url?: string;
    fileType?: FileInfoResponse.fileType;
};

export namespace FileInfoResponse {

    export enum fileType {
        UI = 'UI',
        DATA = 'DATA',
        CONTRACT = 'CONTRACT',
        DEV_TEST = 'DEV_TEST',
        PROD_TEST = 'PROD_TEST',
        BLOG = 'BLOG',
        PORTFOLIO = 'PORTFOLIO',
    }


}
