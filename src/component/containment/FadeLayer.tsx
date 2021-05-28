import React, { VFC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { getAuthStatus } from '../../stores/slices/AuthStatusSlice'
import CircularProgress from '@material-ui/core/CircularProgress'
import Styles from '../../../styles/sass/fadeLayer.module.scss'

interface props {
  children: ReactNode
}

const FadeLayer: VFC<props> = ({ children }) => {
  const { isLoading } = useSelector(getAuthStatus)

  return (
    <div className={!isLoading ? Styles.root : Styles.root_loading}>
      {isLoading && (
        <CircularProgress className={Styles.progress} color="secondary" />
      )}
      {children}
    </div>
  )
}

export default FadeLayer
