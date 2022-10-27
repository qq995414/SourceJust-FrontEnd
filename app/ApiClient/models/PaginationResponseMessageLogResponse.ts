/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessageLogResponse } from './MessageLogResponse';
import type { PaginationMata } from './PaginationMata';

export type PaginationResponseMessageLogResponse = {
    records?: Array<MessageLogResponse>;
    page?: PaginationMata;
};
