/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserProfileResponse } from './UserProfileResponse';

export type ResponseUserProfileResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: UserProfileResponse;
};
