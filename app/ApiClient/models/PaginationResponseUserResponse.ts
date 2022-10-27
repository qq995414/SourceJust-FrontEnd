/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationMata } from './PaginationMata';
import type { UserResponse } from './UserResponse';

export type PaginationResponseUserResponse = {
    records?: Array<UserResponse>;
    page?: PaginationMata;
};
