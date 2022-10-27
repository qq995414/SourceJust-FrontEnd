/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TreeSelectNode } from './TreeSelectNode';

export type ResponseListTreeSelectNode = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: Array<TreeSelectNode>;
};
