import React, { useEffect, useState, VFC } from 'react';
import Router from 'next/router';

interface props {
  children: React.ReactNode;
}

const Auth: VFC<props | any> = ({ children }) => {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    //認証
    console.log('認証');
    if (true) Router.push('/login');
    setIsLoad(false);
  }, []);

  if (isLoad) {
    return <>認証中</>;
  } else {
    return children;
  }
};

export default Auth;
