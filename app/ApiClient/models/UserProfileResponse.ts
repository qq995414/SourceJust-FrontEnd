/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserResponse } from './UserResponse';

export type UserProfileResponse = {
    token?: string;
    profile?: UserResponse;
    permissions?: Array<string>;
};
