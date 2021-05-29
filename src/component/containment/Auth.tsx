import React, { useEffect, useState, VFC, ReactNode } from 'react'
import Router, { useRouter } from 'next/router'

interface props {
  children: ReactNode
}

const Auth: VFC<props> = ({ children }) => {
  const [isLoad, setIsLoad] = useState(true)

  const router = useRouter()

  useEffect(() => {
    //認証
    console.log('認証')
    if (false) router.push('/login')
    setIsLoad(false)
  }, [router.pathname])

  if (isLoad) {
    return <>認証中</>
  } else {
    return <>{children}</>
  }
}

export default Auth
