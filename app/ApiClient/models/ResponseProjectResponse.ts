/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectResponse } from './ProjectResponse';

export type ResponseProjectResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: ProjectResponse;
};
