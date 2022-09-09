/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelResponse } from './ChannelResponse';

export type ResponseListChannelResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: Array<ChannelResponse>;
};
