import React, { VFC, useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { InputText, ActionButton, ColorTextBox } from '../atoms/UIkit';
import { login } from '../../lib/login';
import Styles from '../../../styles/sass/login.module.scss';
import Paper from '@material-ui/core/Paper';

const LoginTemplate: VFC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const inputId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const inputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleOnClick = async () => {
    await login(id, password);
  };

  return (
    <main>
      <Paper elevation={7} className={Styles.formContent}>
        <h1>管理者ログイン </h1>
        <InputText
          label={'ID'}
          variant={'outlined'}
          value={id}
          onChange={(e) => inputId(e)}
          className={Styles.formContent__inputText}
        />
        <InputText
          label={'password'}
          variant={'filled'}
          value={password}
          type={'password'}
          onChange={(e) => inputPassword(e)}
          className={Styles.formContent__inputText}
        />
        <br />
        <br />
        <br />
        <br />
        <ColorTextBox value={id} label={'テスト'} onChange={inputId} />
      </Paper>
      <ActionButton label={'hello'} onClick={handleOnClick} />
      <Link href="/">TOPへ</Link>
    </main>
  );
};

export default LoginTemplate;
