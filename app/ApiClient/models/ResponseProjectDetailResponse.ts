/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectDetailResponse } from './ProjectDetailResponse';

export type ResponseProjectDetailResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: ProjectDetailResponse;
};
