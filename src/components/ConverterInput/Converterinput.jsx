import React from 'react';
import cl from './ConverterInput.module.css';


const ConverterInput = (props) => {
    
    return (
        <div className={cl.calc__box}>
                    <input className={cl.myInput} type="number" value={props.amount} {...props}/>
                    <p>{props.rate}</p>

        </div>
    );
}

export default ConverterInput;