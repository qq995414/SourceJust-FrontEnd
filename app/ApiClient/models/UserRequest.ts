/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserRequest = {
    account: string;
    password: string;
    name: string;
    email?: string;
    phone?: string;
    address?: string;
    identityId: string;
    roleId?: string;
    lineToken?: string;
    isInternal?: boolean;
    company?: string;
    jobCategory?: string;
    language?: string;
};
