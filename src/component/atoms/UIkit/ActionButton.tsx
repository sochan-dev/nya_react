import React, { VFC } from 'react';
import Button from '@material-ui/core/Button';

type props = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ActionButton: VFC<props> = (props) => {
  return <Button onClick={props.onClick}>{props.label}</Button>;
};

export default ActionButton;
