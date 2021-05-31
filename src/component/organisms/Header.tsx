import React, { VFC } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Styles from '../../../styles/sass/header.module.scss'

const Header: VFC = () => {
  return <AppBar position={'static'} className={Styles.root}></AppBar>
}
export default Header
