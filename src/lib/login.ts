import Router from 'next/router';
export const login = async (id: string, password: string) => {
  await Promise.resolve().then(() => setTimeout(() => console.log('test'), 1000));
  console.log('promise終了');
  Router.push('/');
};
