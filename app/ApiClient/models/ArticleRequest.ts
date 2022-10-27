/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ArticleRequest = {
    channelId: number;
    coverImg?: string;
    caseImg?: string;
    smallImg?: string;
    title: string;
    content: string;
    subTitle?: string;
    metaDes?: string;
    metaKeyword?: string;
    onlineDate?: string;
    offlineDate?: string;
    isDisable?: boolean;
};
