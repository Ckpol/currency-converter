import React from 'react';
import cl from './Converter.module.css';
import ConverterSwitch from '../ConverterSwitch/ConverterSwitch.jsx';
import ConverterInput from '../ConverterInput/Converterinput';

const Converter = ({type, currency, currCurrency, setCurrCurrency, options, amount, setAmount, rate, children, path}) => {
    return (
        <div className={cl.side}>
                <h4 className={cl.title}>
                    {type 
                        ? 'I have'
                        : 'I want'
                    }
                </h4>
                <ConverterSwitch 
                    currency={currency} 
                    currCurrency={currCurrency} 
                    setCurrCurrency={setCurrCurrency} 
                    options={options}
                    path={path}
                />
                <ConverterInput
                    placeholder='0.0000'
                    value={amount}
                    onChange={(evt) => setAmount(evt.target.value)}
                    rate={rate}

                />
                {children}
                

            </div>
    );
}

export default Converter;