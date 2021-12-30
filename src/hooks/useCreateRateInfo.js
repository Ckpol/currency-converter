import { useMemo, useState } from "react"

export const useCreateRateInfo = (fromCurrency, toCurrency, rate) => {
    const [inRateInfo, setInRateInfo] = useState('');
    const [outRateInfo, setOutRateInfo] = useState('');
    const rateInfo = useMemo(() => {
        setInRateInfo(`1 ${fromCurrency.toUpperCase()} = ${Math.floor(rate * 10000) / 10000} ${toCurrency.toUpperCase()}`);
        setOutRateInfo(`1 ${toCurrency.toUpperCase()} = ${Math.floor(1 / rate * 10000) / 10000} ${fromCurrency.toUpperCase()}`)

    }, [fromCurrency, toCurrency, rate]);

    return [inRateInfo, outRateInfo];
}