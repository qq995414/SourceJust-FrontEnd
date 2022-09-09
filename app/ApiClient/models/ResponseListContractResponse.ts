/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractResponse } from './ContractResponse';

export type ResponseListContractResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: Array<ContractResponse>;
};
