/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TemplateResponse } from './TemplateResponse';

export type ResponseTemplateResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: TemplateResponse;
};
