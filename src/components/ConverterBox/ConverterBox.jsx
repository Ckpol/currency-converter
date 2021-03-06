import React, { useEffect, useState } from 'react';
import ConverterService from '../../API/ConverterService';
import { useChangedCurrencyList } from '../../hooks/useChangedCurrencyList';
import { useCreateRateInfo } from '../../hooks/useCreateRateInfo';
import { useFetching } from '../../hooks/useFetching';
import { getAmount } from '../../utils/amount';
import { setCurrDates } from '../../utils/setCurrDates';
import Converter from '../Converter/Converter';
import ConverterDates from '../ConverterDates/ConverterDates';
import cl from '../ConverterBox/ConverterBox.module.css';
import { useNavigate } from 'react-router-dom';


const ConverterBox = () => {
    const [currency, setCurrency] = useState(['rub', 'eur', 'usd', 'gbp']);
    const [fromCurrency, setFromCurrency] = useState('rub');
    const [toCurrency, setToCurrency] = useState('usd');
    const [selectOptions, setSelectOptions] = useState([]);
    const [amount, setAmount] = useState(1);
    const [rate, setRate] = useState(2);
    const [typeOfInOutConverter, setTypeOfInOutConverter] = useState(true);
    const changedFromCurrency = useChangedCurrencyList(currency, fromCurrency, setCurrency);
    const changedToCurrency = useChangedCurrencyList(currency, toCurrency, setCurrency);
    const [inRateInfo, outRateInfo] = useCreateRateInfo(fromCurrency, toCurrency, rate);
    const [fromAmount, toAmount] = getAmount(typeOfInOutConverter, amount, rate);
    const [dates, setDates] = useState(setCurrDates());
    const path = `${fromCurrency.toUpperCase()}_${toCurrency.toUpperCase()}`;
    let navigate = useNavigate();
    

    const onChangeFromAmountHandler = (elem) => {
        setTypeOfInOutConverter(true);
        setAmount(elem);
    }

    const onChangeToAmountHandler = (elem) => {
        setTypeOfInOutConverter(false);
        setAmount(elem);
    }

    const onChangeDatesForConvert = (elem) => {
        setDates(elem);
    }

    const [fetchCurrencyList, errorCurrencyList] = useFetching(async () => {
        const response = await ConverterService.getOptions();
        const totalOptions = response.data.results;
        setSelectOptions(Object.values(totalOptions));
    });

    const [feetchExchangeRate, errorExchangeRate] = useFetching(async (dates) => {
        const result = await ConverterService.getConvert(fromCurrency, toCurrency, dates);
        const datesInfo = Object.values(result.data);
        setRate(Object.values(datesInfo[0])[0]);
    })

   useEffect(() => {
   fetchCurrencyList(); 
   feetchExchangeRate(dates);     
   }, []);

   useEffect(() => {
   feetchExchangeRate(dates);
   navigate(`/${path}`);
   },[dates, fromCurrency, toCurrency]);

    return (
        <div className='calc__box'>
            <Converter 
                type={typeOfInOutConverter} 
                currency={changedFromCurrency} 
                currCurrency={fromCurrency} 
                setCurrCurrency={setFromCurrency}
                options={selectOptions}
                amount={fromAmount}
                setAmount={onChangeFromAmountHandler}
                rate={inRateInfo}
                path={path}
            >
                <ConverterDates onChange={onChangeDatesForConvert}/>
            </Converter>
            <Converter 
                type={!typeOfInOutConverter} 
                currency={changedToCurrency} 
                currCurrency={toCurrency} 
                setCurrCurrency={setToCurrency}
                options={selectOptions}
                amount={toAmount}
                setAmount={onChangeToAmountHandler}
                rate={outRateInfo}
                path={path}
            />
            {
            (errorCurrencyList || errorExchangeRate) &&
            <h1 className={cl.error}>
                    ?????????????????? ????????????
            </h1> 
            }
        </div>
    );
}

export default ConverterBox;