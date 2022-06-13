// app/services/auth.server.ts
import { Authenticator, AuthorizationError } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';
import { sessionStorage, User } from '~/services/session.server';
import { ApiClient } from 'app/ApiClient';
import { OpenAPI } from 'app/ApiClient';





const authenticator = new Authenticator<User | Error | null>(sessionStorage, {
  sessionKey: "sessionKey", // keep in sync
  sessionErrorKey: "sessionErrorKey", // keep in sync

});

authenticator.use(


  new FormStrategy(async ({ form, context }) => {
    // 從表單獲取登入資訊


    let oldpwd = form.get('oldpwd') as string;
    let newpwd = form.get('newpwd') as string;
    let repwd = form.get('repwd') as string;

    // 輸入驗證
    if (!oldpwd || oldpwd?.length === 0) throw new AuthorizationError('帳號為必填欄位')
    if (typeof oldpwd !== 'string')
      throw new AuthorizationError('舊密碼必須為字串型別')

    if (!newpwd || newpwd?.length === 0) throw new AuthorizationError('密碼為必填欄位')
    if (typeof newpwd !== 'string')
      throw new AuthorizationError('新密碼必須為字串型別')
    if (!repwd || repwd?.length === 0) throw new AuthorizationError('密碼為必填欄位')
    if (typeof repwd !== 'string')
      throw new AuthorizationError('二次密碼必須為字串型別')
    // 模擬登入
    // if (account === 'test' && password === '123456') {
    //   user = {
    //     name: account,
    //     token: `${password}-${new Date().getTime()}`,
    //   };

    //   // the type of this user must match the type you pass to the Authenticator
    //   // the strategy will automatically inherit the type if you instantiate
    //   // directly inside the `use` method
    //   return await Promise.resolve({ ...user });

    // } else {
    //   // if problem with user throw error AuthorizationError
    //   throw new AuthorizationError("輸入錯誤")
    // }
    OpenAPI.TOKEN = context.data.token;
    let apiClient = new ApiClient(OpenAPI);

    let user = await apiClient.accountController.updatePwdUsingPost(oldpwd, newpwd, repwd)
      .then(res => {
        return res;
      });



    return Promise.resolve(user);
  }),
  "updataPwd"
);
export default authenticator