import MyButton from '../UI/MyButton/MyButton';
import MySelect from '../UI/MySelect/MySelect';
import cl from './ConverterSwitch.module.css';
import {React} from 'react';

const ConverterSwitch = ({currency, currCurrency, setCurrCurrency, options, path}) => {

const selectedCurrency = (elem) => {
    setCurrCurrency(elem.toLowerCase());
};

    return (
        <div className={cl.container}>
            {currency.map((item) => 
                <MyButton 
                    key={item}
                    isActive={currCurrency === item ? true : false}
                    onClick={(evt) => {
                        setCurrCurrency(evt.target.textContent);
                    }}
                >
                    {
                        item
                    }
                </MyButton>
            )}
            <MySelect 
                value=''
                onChange={selectedCurrency}
                defaultValue='<>'
                options={options}
                />
        </div>
    
    );
}

export default ConverterSwitch;