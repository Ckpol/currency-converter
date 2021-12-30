import React from 'react';
import cl from './MyButton.module.css';

const MyButton = ({children, isActive, ...props}) => {

    return (
        <button 
        className={isActive ? [cl.btn, cl.active].join(' ') : cl.btn}
            {...props}
        >
            {children}
        </button>
    );
}

export default MyButton;