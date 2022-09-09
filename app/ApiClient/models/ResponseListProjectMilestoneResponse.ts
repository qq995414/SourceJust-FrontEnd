/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectMilestoneResponse } from './ProjectMilestoneResponse';

export type ResponseListProjectMilestoneResponse = {
    success?: boolean;
    code?: number;
    message?: string;
    data?: Array<ProjectMilestoneResponse>;
};
