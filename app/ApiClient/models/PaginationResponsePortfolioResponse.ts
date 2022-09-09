/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationMata } from './PaginationMata';
import type { PortfolioResponse } from './PortfolioResponse';

export type PaginationResponsePortfolioResponse = {
    records?: Array<PortfolioResponse>;
    page?: PaginationMata;
};
