/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MessageLogResponse = {
    id?: number;
    createTime?: string;
    modifyTime?: string;
    fromId?: number;
    fromName?: string;
    content?: string;
    projectId?: number;
    uiId?: number;
    messageType?: MessageLogResponse.messageType;
};

export namespace MessageLogResponse {

    export enum messageType {
        TEXT = 'TEXT',
        IMAGE = 'IMAGE',
        FILE = 'FILE',
    }


}
