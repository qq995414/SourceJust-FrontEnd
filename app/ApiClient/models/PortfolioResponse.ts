/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelResponse } from './ChannelResponse';

export type PortfolioResponse = {
    id?: number;
    createTime?: string;
    modifyTime?: string;
    titleImg?: string;
    title?: string;
    tag?: string;
    client?: string;
    finishDate?: string;
    mainImg?: string;
    url?: string;
    service?: string;
    tech?: string;
    content?: string;
    channelId?: number;
    channel?: ChannelResponse;
};
