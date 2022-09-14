/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ChannelResponse } from './ChannelResponse';

export type ArticleResponse = {
    id?: number;
    createTime?: string;
    modifyTime?: string;
    channelId?: number;
    smallImg?: string;
    title?: string;
    subTitle?: string;
    metaDes?: string;
    metaKeyword?: string;
    content?: string;
    onlineDate?: string;
    offlineDate?: string;
    isDisable?: boolean;
    channel?: ChannelResponse;
};
