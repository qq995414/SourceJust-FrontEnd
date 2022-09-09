/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleResponse } from './ArticleResponse';
import type { PaginationMata } from './PaginationMata';

export type PaginationResponseArticleResponse = {
    records?: Array<ArticleResponse>;
    page?: PaginationMata;
};
