import React from 'react';
import cl from './ConverterDates.module.css';

const ConverterDates = ({onChange}) => {
    const href = 'https://github.com/Ckpol';
    return (
        <div className={cl.dates__container}>
            <input 
                className={cl.dates__input}
                type='date'
                onChange={evt => {
                    onChange(evt.target.value)
                }}
                />
             <a 
             href={href}
             className={cl.dates__src}
             >
                gitHub::Ckpol
            </a>
        </div>
    );
}

export default ConverterDates;