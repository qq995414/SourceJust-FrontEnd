/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectUserResponse } from './ProjectUserResponse';

export type ResponseProjectUserResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: ProjectUserResponse;
};
