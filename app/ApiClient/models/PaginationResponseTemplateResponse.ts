/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationMata } from './PaginationMata';
import type { TemplateResponse } from './TemplateResponse';

export type PaginationResponseTemplateResponse = {
    records?: Array<TemplateResponse>;
    page?: PaginationMata;
};
