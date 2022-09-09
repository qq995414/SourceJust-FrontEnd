/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PayInfoResponse } from './PayInfoResponse';

export type ResponseListPayInfoResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: Array<PayInfoResponse>;
};
