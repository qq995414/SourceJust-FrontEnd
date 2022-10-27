/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PortfolioResponse } from './PortfolioResponse';

export type ResponsePortfolioResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: PortfolioResponse;
};
