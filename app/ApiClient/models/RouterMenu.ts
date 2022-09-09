/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MenuMeta } from './MenuMeta';

export type RouterMenu = {
    id?: number;
    parentId?: number;
    path?: string;
    component?: string;
    name?: string;
    num?: number;
    hidden?: boolean;
    meta?: MenuMeta;
};
