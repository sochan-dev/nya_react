import React, { VFC, useState, ChangeEvent } from 'react'
import Styles from '../../../../styles/sass/ColorTextBox.module.scss'
import classNames from 'classnames'

type props = {
  type?: 'text' | 'number' | 'password'
  w?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
  value: string
  label: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const ColorTextBox: VFC<props> = (props) => {
  const [isActive, setIsActive] = useState(false)

  const handleOnFocus = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={classNames(Styles.root, Styles[`w_${props.w}`])}>
      <label
        htmlFor={props.label}
        className={
          !isActive && props.value === ''
            ? Styles.root__label
            : Styles.root__label_active
        }
      >
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.label}
        value={props.value}
        onChange={(e) => props.onChange(e)}
        onFocus={() => handleOnFocus()}
        onBlur={() => handleOnFocus()}
      />
    </div>
  )
}

ColorTextBox.defaultProps = {
  type: 'text',
  w: 100
}
export default ColorTextBox
