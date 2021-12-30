import { useMemo } from "react"

export const useChangedCurrencyList = (currency, currCurrency, setCurrency) => {
    const changedCurrency = useMemo(() => {
        if (currency.includes(currCurrency)) {
            return currency;
        }
        setCurrency([...currency.slice(0, -1), currCurrency]);
        return [...currency.slice(0, -1), currCurrency];
    }, [currCurrency]);

    return changedCurrency;
}