//core
import React from 'react';
//other
import style from './Button.module.css';

interface IProps {
  text: string;
  onClick?: () => void;
}

class Button extends React.Component<IProps> {
  render(): React.ReactNode {
    const { text, onClick } = this.props;
    return (
      <button onClick={onClick} className={style.button}>
        {text}
      </button>
    );
  }
}

export default Button;
