/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { AccountControllerService } from './services/AccountControllerService';
import { AdminArticleControllerService } from './services/AdminArticleControllerService';
import { AdminChannelControllerService } from './services/AdminChannelControllerService';
import { AdminContactControllerService } from './services/AdminContactControllerService';
import { AdminContractControllerService } from './services/AdminContractControllerService';
import { AdminPayInfoControllerService } from './services/AdminPayInfoControllerService';
import { AdminProjectControllerService } from './services/AdminProjectControllerService';
import { AdminProjectDetailControllerService } from './services/AdminProjectDetailControllerService';
import { CacheControllerService } from './services/CacheControllerService';
import { CfgControllerService } from './services/CfgControllerService';
import { ContractControllerService } from './services/ContractControllerService';
import { FileControllerService } from './services/FileControllerService';
import { MenuControllerService } from './services/MenuControllerService';
import { MessageLogControllerService } from './services/MessageLogControllerService';
import { OfficialArticleControllerService } from './services/OfficialArticleControllerService';
import { OfficialContactControllerService } from './services/OfficialContactControllerService';
import { PayInfoControllerService } from './services/PayInfoControllerService';
import { ProjectControllerService } from './services/ProjectControllerService';
import { ProjectDetailControllerService } from './services/ProjectDetailControllerService';
import { ProjectMilestoneControllerService } from './services/ProjectMilestoneControllerService';
import { ProjectRuleControllerService } from './services/ProjectRuleControllerService';
import { RoleControllerService } from './services/RoleControllerService';
import { UserControllerService } from './services/UserControllerService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ApiClient {

    public readonly accountController: AccountControllerService;
    public readonly adminArticleController: AdminArticleControllerService;
    public readonly adminChannelController: AdminChannelControllerService;
    public readonly adminContactController: AdminContactControllerService;
    public readonly adminContractController: AdminContractControllerService;
    public readonly adminPayInfoController: AdminPayInfoControllerService;
    public readonly adminProjectController: AdminProjectControllerService;
    public readonly adminProjectDetailController: AdminProjectDetailControllerService;
    public readonly cacheController: CacheControllerService;
    public readonly cfgController: CfgControllerService;
    public readonly contractController: ContractControllerService;
    public readonly fileController: FileControllerService;
    public readonly menuController: MenuControllerService;
    public readonly messageLogController: MessageLogControllerService;
    public readonly officialArticleController: OfficialArticleControllerService;
    public readonly officialContactController: OfficialContactControllerService;
    public readonly payInfoController: PayInfoControllerService;
    public readonly projectController: ProjectControllerService;
    public readonly projectDetailController: ProjectDetailControllerService;
    public readonly projectMilestoneController: ProjectMilestoneControllerService;
    public readonly projectRuleController: ProjectRuleControllerService;
    public readonly roleController: RoleControllerService;
    public readonly userController: UserControllerService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://bo.sourcejust.com:443',
            VERSION: config?.VERSION ?? '1.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.accountController = new AccountControllerService(this.request);
        this.adminArticleController = new AdminArticleControllerService(this.request);
        this.adminChannelController = new AdminChannelControllerService(this.request);
        this.adminContactController = new AdminContactControllerService(this.request);
        this.adminContractController = new AdminContractControllerService(this.request);
        this.adminPayInfoController = new AdminPayInfoControllerService(this.request);
        this.adminProjectController = new AdminProjectControllerService(this.request);
        this.adminProjectDetailController = new AdminProjectDetailControllerService(this.request);
        this.cacheController = new CacheControllerService(this.request);
        this.cfgController = new CfgControllerService(this.request);
        this.contractController = new ContractControllerService(this.request);
        this.fileController = new FileControllerService(this.request);
        this.menuController = new MenuControllerService(this.request);
        this.messageLogController = new MessageLogControllerService(this.request);
        this.officialArticleController = new OfficialArticleControllerService(this.request);
        this.officialContactController = new OfficialContactControllerService(this.request);
        this.payInfoController = new PayInfoControllerService(this.request);
        this.projectController = new ProjectControllerService(this.request);
        this.projectDetailController = new ProjectDetailControllerService(this.request);
        this.projectMilestoneController = new ProjectMilestoneControllerService(this.request);
        this.projectRuleController = new ProjectRuleControllerService(this.request);
        this.roleController = new RoleControllerService(this.request);
        this.userController = new UserControllerService(this.request);
    }
}
