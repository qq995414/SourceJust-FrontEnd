/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContactsResponse } from './ContactsResponse';
import type { PaginationMata } from './PaginationMata';

export type PaginationResponseContactsResponse = {
    records?: Array<ContactsResponse>;
    page?: PaginationMata;
};
