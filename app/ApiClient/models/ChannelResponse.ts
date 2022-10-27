/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChannelResponse = {
    id?: number;
    createTime?: string;
    modifyTime?: string;
    name?: string;
    type?: ChannelResponse.type;
    amount?: number;
};

export namespace ChannelResponse {

    export enum type {
        ARTICLE = 'ARTICLE',
        PORTFOLIO = 'PORTFOLIO',
    }


}
