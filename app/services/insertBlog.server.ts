// app/services/auth.server.ts
import { Authenticator, AuthorizationError } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';
import { sessionStorage, User } from '~/services/session.server';
import { ApiClient } from 'app/ApiClient';
import { OpenAPI } from 'app/ApiClient';
import { ArticleRequest } from 'app/ApiClient/models/ArticleRequest';

const Blog = new Authenticator<User | Error | null>(sessionStorage, {
  sessionKey: "sessionKey", // keep in sync
  sessionErrorKey: "sessionErrorKey", // keep in sync

});
Blog.use(
  new FormStrategy(async ({ form, context }) => {
    let classId = form.get('classId') as string;
    let title = form.get('title') as string;
    let key = form.get('key') as string;
    let state = form.get('state') as string;
    let apiClient = new ApiClient(OpenAPI);
    let articleRequest: ArticleRequest = {
      channelId: '1',//只能打1 其他數字都進不去
      title: 'title',
      content: "requesttest1",
      category: "requesttest1",
      subTitle: '1',
      metaDes: 'requesttest1',
      metaKeyword: 'requesttest1',
      onlineDate: '2022-09-11', //上架日期(前台無)
      offlineDate: '2022-09-11'//下架日期(前台無)
    };
    let user = await apiClient.api.createArticle(articleRequest)
      .then(res => {
        return res;
      });
    return Promise.resolve(user);
  }),
  "insert-Blog"
);
export default Blog