/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RouterMenu } from './RouterMenu';

export type ResponseListRouterMenu = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: Array<RouterMenu>;
};
