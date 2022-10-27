/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationMata } from './PaginationMata';
import type { ProjectUserResponse } from './ProjectUserResponse';

export type PaginationResponseProjectUserResponse = {
    records?: Array<ProjectUserResponse>;
    page?: PaginationMata;
};
