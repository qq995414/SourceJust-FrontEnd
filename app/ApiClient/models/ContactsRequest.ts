/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ContactsRequest = {
    company?: string;
    email?: string;
    gender?: ContactsRequest.gender;
    mobile?: string;
    name?: string;
    remark?: string;
    service?: ContactsRequest.service;
};

export namespace ContactsRequest {

    export enum gender {
        FEMALE = 'FEMALE',
        MALE = 'MALE',
    }

    export enum service {
        APP_ANDROID = 'APP_ANDROID',
        APP_DUAL = 'APP_DUAL',
        APP_IOS = 'APP_IOS',
        ERP = 'ERP',
        LINE_BOT = 'LINE_BOT',
        SOFTWARE = 'SOFTWARE',
        UIUX = 'UIUX',
        WEB = 'WEB',
    }


}
