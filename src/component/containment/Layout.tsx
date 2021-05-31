import React, { VFC, ReactNode } from 'react'
import Styles from '../../../styles/sass/layout.module.scss'

type props = {
  children: ReactNode
}

const Layout: VFC<props> = ({ children }) => {
  return <div className={Styles.root}>{children}</div>
}
export default Layout
