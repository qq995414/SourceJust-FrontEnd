/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactsRequest } from '../models/ContactsRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OfficialContactControllerService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * 新增聯絡我們
     * @param requestBody 
     * @returns any OK
     * @throws ApiError
     */
    public saveUsingPost6(
requestBody?: ContactsRequest,
): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/official/contact',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
