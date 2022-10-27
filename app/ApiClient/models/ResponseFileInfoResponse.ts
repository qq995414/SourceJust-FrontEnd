/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileInfoResponse } from './FileInfoResponse';

export type ResponseFileInfoResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: FileInfoResponse;
};
