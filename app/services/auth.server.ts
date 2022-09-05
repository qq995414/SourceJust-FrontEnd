// app/services/auth.server.ts
import { Authenticator, AuthorizationError } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';
import { sessionStorage, User } from '~/services/session.server';
import { ApiClient } from 'app/ApiClient';
import { LoginRequest } from 'app/ApiClient/models/LoginRequest';

// TODO 從設定檔讀取

const authenticator = new Authenticator<User | Error | null>(sessionStorage, {
  sessionKey: "sessionKey", // keep in sync
  sessionErrorKey: "sessionErrorKey", // keep in sync
});

authenticator.use(
  new FormStrategy(async ({ form }) => {

    // 從表單獲取登入資訊
    let account = form.get('account') as string;
    let password = form.get('password') as string;
    console.log("Account123: " + account);

    // 輸入驗證
    if (!account || account?.length === 0) throw new AuthorizationError('帳號為必填欄位')
    if (typeof account !== 'string')
      throw new AuthorizationError('帳號必須為字串型別')

    if (!password || password?.length === 0) throw new AuthorizationError('密碼為必填欄位')
    if (typeof password !== 'string')
      throw new AuthorizationError('密碼必須為字串型別')

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
    let apiClient = new ApiClient();
    let loginRequest: LoginRequest = {
      password: password,
      username: account,
      roleId: '4'
    };

    let user = await apiClient.accountController.loginUsingPost(loginRequest)
      .then(res => {
        return res;
      });

    if (user === undefined)
      throw new AuthorizationError("登入異常");
    if (user.success === false)
      throw new AuthorizationError(user.message);

    return Promise.resolve(user);
  }),
  "user-login"
);

export default authenticator