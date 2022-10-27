/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChannelRequest = {
    name?: string;
    type: ChannelRequest.type;
};

export namespace ChannelRequest {

    export enum type {
        ARTICLE = 'ARTICLE',
        PORTFOLIO = 'PORTFOLIO',
    }


}
