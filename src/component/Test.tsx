import React, { VFC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  switchLoading,
  testCreateAsyncThunk,
  getLoadingStatus
} from '../stores/slices/loadingStatusSlice'

import Styles from '../../styles/sass/test.module.scss' //ソウタツ用(ソウマはここを非表示にしてソウマ用を表示する)
//import Styles from 'styles/css/test.module.css';//サトウ用(ソウタツはここを非表示にしてソウタツ用を表示する)

const Test: VFC = () => {
  const dispatch = useDispatch()
  const testLoadingStatus = useSelector(getLoadingStatus)

  const doAction = () => dispatch(switchLoading('21-5-18'))
  const doAsyncThunkAction = () => dispatch(testCreateAsyncThunk('非同期'))

  console.log('testLog')
  return (
    <div className={Styles.test}>
      <p>{testLoadingStatus.testMessage}</p>
      最新6時49分
      <button onClick={doAction}>doAction</button>
      <button onClick={doAsyncThunkAction}>doAsyncThunk</button>
    </div>
  )
}
export default Test
