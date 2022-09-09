/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationMata } from './PaginationMata';
import type { TagInfoResponse } from './TagInfoResponse';

export type PaginationResponseTagInfoResponse = {
    records?: Array<TagInfoResponse>;
    page?: PaginationMata;
};
