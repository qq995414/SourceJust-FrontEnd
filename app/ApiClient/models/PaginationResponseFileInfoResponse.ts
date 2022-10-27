/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileInfoResponse } from './FileInfoResponse';
import type { PaginationMata } from './PaginationMata';

export type PaginationResponseFileInfoResponse = {
    records?: Array<FileInfoResponse>;
    page?: PaginationMata;
};
