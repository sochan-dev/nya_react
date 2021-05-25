import React, { VFC, useState, ChangeEvent } from 'react';
import Styles from '../../../../styles/sass/ColorTextBox.module.scss';

type props = {
  value: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ColorTextBox: VFC<props> = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleOnFocus = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={Styles.root}>
      <label
        htmlFor={props.label}
        className={!isActive ? Styles.root__label : Styles.root__label_active}
      >
        {props.label}
      </label>
      <input
        type="text"
        id={props.label}
        value={props.value}
        onChange={(e) => props.onChange(e)}
        onFocus={() => handleOnFocus()}
        onBlur={() => handleOnFocus()}
      />
    </div>
  );
};

export default ColorTextBox;
