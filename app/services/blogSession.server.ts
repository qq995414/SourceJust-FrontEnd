import { createCookieSessionStorage } from 'remix';

export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__blog_session', // use any name you want here
    sameSite: 'lax', // this helps with CSRF
    path: '/', // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: ['s3cr3t'], // replace this with an actual secret
    secure: process.env.NODE_ENV === 'production', // enable this in prod only
  },
});

export let { getSession, commitSession, destroySession } = sessionStorage;

// 定義使用者資訊

export type Records = {
  account: string;
  id: number,
  createTime: string,
  modifyTime: string,
  channelId: number,
  title: string,
  category: string,
  subTitle: string,
  metaDes: string,
  metaKeyword: string,
  content: string,
  onlineDate: string,
  offlineDate: string,
  channel: string
}
export type Page = {
  perPageSize: number;
  currentPage: number,
  totalCount: number,
  totalPage: number,
  offset: number
}

export type Data = {
  records: Records;
  page: Page;
}

export type Blogselect = {
  success: boolean;
  code: number;
  message: string;
  data: Data;
}

// 模擬登入
// export type User = {
//   name: string; // 姓名
//   token: string; // 權杖
// };