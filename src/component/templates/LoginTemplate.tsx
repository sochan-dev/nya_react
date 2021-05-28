import React, { VFC, useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { InputText, ActionButton, ColorTextBox } from '../atoms/UIkit'
import Styles from '../../../styles/sass/login.module.scss'
import Blanks from '../../../styles/sass/blanks.module.scss'
import Paper from '@material-ui/core/Paper'
import { login } from '../../stores/slices/AuthStatusSlice'

const LoginTemplate: VFC = () => {
  const dispatch = useDispatch()

  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const inputId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }
  const inputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleOnClick = () => {
    console.log('発火')
    dispatch(login({ user_id: id, password: password }))
  }

  return (
    <main>
      <Paper elevation={7} className={Styles.formContent}>
        <h1>管理者ログイン </h1>
        <ColorTextBox
          type={'text'}
          w={80}
          value={id}
          label={'ID'}
          onChange={inputId}
        />
        <br />
        <br />
        <ColorTextBox
          type={'password'}
          w={80}
          value={password}
          label={'パスワード'}
          onChange={inputPassword}
        />
        <div className={Blanks.blank_32} />
        <ActionButton label={'送信'} onClick={handleOnClick} w={50} />
      </Paper>
      <Link href="/">TOPへ</Link>
    </main>
  )
}

export default LoginTemplate
