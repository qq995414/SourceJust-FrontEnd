/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ContactsRequest = {
    company?: string;
    name?: string;
    gender?: ContactsRequest.gender;
    service?: ContactsRequest.service;
    mobile?: string;
    email?: string;
    remark?: string;
    status?: ContactsRequest.status;
    isReply?: boolean;
};

export namespace ContactsRequest {

    export enum gender {
        MALE = 'MALE',
        FEMALE = 'FEMALE',
    }

    export enum service {
        APP_IOS = 'APP_IOS',
        APP_ANDROID = 'APP_ANDROID',
        APP_DUAL = 'APP_DUAL',
        WEB = 'WEB',
        UIUX = 'UIUX',
        SOFTWARE = 'SOFTWARE',
        ERP = 'ERP',
        LINE_BOT = 'LINE_BOT',
    }

    export enum status {
        INIT = 'INIT',
        READ = 'READ',
        DONE = 'DONE',
    }


}
