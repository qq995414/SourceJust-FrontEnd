/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MenuNode } from './MenuNode';

export type ResponseListMenuNode = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: Array<MenuNode>;
};
