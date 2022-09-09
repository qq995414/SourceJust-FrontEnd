/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Node = {
    id?: number;
    pid?: number;
    name?: string;
    checked?: boolean;
    children?: Array<Node>;
};
