/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContactsResponse } from './ContactsResponse';

export type ResponseContactsResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: ContactsResponse;
};
