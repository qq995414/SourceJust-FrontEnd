/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelResponse } from './ChannelResponse';
import type { PaginationMata } from './PaginationMata';

export type PaginationResponseChannelResponse = {
    records?: Array<ChannelResponse>;
    page?: PaginationMata;
};
