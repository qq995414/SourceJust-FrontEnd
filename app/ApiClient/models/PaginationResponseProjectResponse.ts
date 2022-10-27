/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationMata } from './PaginationMata';
import type { ProjectResponse } from './ProjectResponse';

export type PaginationResponseProjectResponse = {
    records?: Array<ProjectResponse>;
    page?: PaginationMata;
};
