import { createCookieSessionStorage } from 'remix';

export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '__login_session', // use any name you want here
    sameSite: 'lax', // this helps with CSRF
    path: '/', // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: ['s3cr3t'], // replace this with an actual secret
    secure: process.env.NODE_ENV === 'production', // enable this in prod only
  },
});

export let { getSession, commitSession, destroySession } = sessionStorage;

// 定義使用者資訊
export type User = {
  name: string; // 姓名
  token: string; // 權杖
};