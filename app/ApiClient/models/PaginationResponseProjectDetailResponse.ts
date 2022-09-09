/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationMata } from './PaginationMata';
import type { ProjectDetailResponse } from './ProjectDetailResponse';

export type PaginationResponseProjectDetailResponse = {
    records?: Array<ProjectDetailResponse>;
    page?: PaginationMata;
};
