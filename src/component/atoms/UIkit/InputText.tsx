import React, { VFC, useState, ChangeEvent } from 'react';
import TextField from '@material-ui/core/Textfield';

type props = {
  fullWidth?: boolean;
  label: string;
  multiline?: boolean;
  required?: true;
  rows?: number;
  value: number | string;
  type?: string;
  variant?: 'standard' | 'filled' | 'outlined';
  defaultValue?: number | string;
  autoFocus?: boolean;
  disabled?: boolean;
  shrink?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const InputText: VFC<props> = (props) => {
  return (
    <>
      <TextField
        fullWidth={props.fullWidth}
        label={props.label}
        margin="dense"
        multiline={props.multiline}
        required={props.required}
        rows={props.rows}
        value={props.value}
        type={props.type}
        variant={props.variant}
        defaultValue={props.defaultValue}
        autoFocus={props.autoFocus}
        disabled={props.disabled}
        InputLabelProps={{
          shrink: props.shrink,
        }}
        //inputProps={{ className: props.className }}
        onChange={props.onChange}
        className={props.className}
      />
    </>
  );
};
InputText.defaultProps = {
  fullWidth: true,
  multiline: true,
  required: true,
  rows: 1,
  type: 'text',
  shrink: true,
  autoFocus: true,
  disabled: false,
};
export default InputText;
