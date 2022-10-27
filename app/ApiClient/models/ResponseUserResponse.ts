/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserResponse } from './UserResponse';

export type ResponseUserResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: UserResponse;
};
