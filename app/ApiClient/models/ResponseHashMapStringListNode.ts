/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Node } from './Node';

export type ResponseHashMapStringListNode = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: Record<string, Array<Node>>;
};
