/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PayInfoResponse } from './PayInfoResponse';

export type ResponsePayInfoResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: PayInfoResponse;
};
