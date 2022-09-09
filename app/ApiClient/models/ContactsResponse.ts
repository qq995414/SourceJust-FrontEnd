/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ContactsResponse = {
    id?: number;
    createTime?: string;
    modifyTime?: string;
    company?: string;
    name?: string;
    gender?: ContactsResponse.gender;
    service?: ContactsResponse.service;
    mobile?: string;
    email?: string;
    remark?: string;
};

export namespace ContactsResponse {

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


}
