/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectDetailResponse } from './ProjectDetailResponse';

export type ResponseListProjectDetailResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: Array<ProjectDetailResponse>;
};
