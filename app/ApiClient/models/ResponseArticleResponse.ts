/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleResponse } from './ArticleResponse';

export type ResponseArticleResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: ArticleResponse;
};
