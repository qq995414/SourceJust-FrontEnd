/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ContractResponse = {
    id?: number;
    createTime?: string;
    modifyTime?: string;
    projectId?: number;
    userId?: number;
    taskId?: number;
    fileId?: number;
    downloadUrl?: string;
    status?: ContractResponse.status;
};

export namespace ContractResponse {

    export enum status {
        DRAFT = 'DRAFT',
        WAITING = 'WAITING',
        COMPLETED = 'COMPLETED',
        DELETED = 'DELETED',
    }


}
