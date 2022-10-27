/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelResponse } from './ChannelResponse';

export type ResponseChannelResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: ChannelResponse;
};
