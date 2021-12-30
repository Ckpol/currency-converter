import React from 'react';
import cl from './MySelect.module.css';

const MySelect = ({value, defaultValue, options, onChange}) => {

    return (
        <select
            value={value}
            className={cl.select}
            onChange={evt => onChange(evt.target.value)}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map(option => 
                <option
                    key={option.id}
                    value={option.id}
                >
                    {`${option.id}: ${option.currencyName}`}
                </option>
                )}
        </select>
    );
}

export default MySelect;