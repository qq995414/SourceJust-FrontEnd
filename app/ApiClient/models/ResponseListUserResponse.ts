/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserResponse } from './UserResponse';

export type ResponseListUserResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: Array<UserResponse>;
};
