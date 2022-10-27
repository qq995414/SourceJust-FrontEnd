/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContractResponse } from './ContractResponse';

export type ResponseContractResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: ContractResponse;
};
