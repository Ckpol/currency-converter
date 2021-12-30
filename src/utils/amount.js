export const getAmount = (type, amount, rate) => {
    let fromAmount;
    let toAmount;
        if (type) {
            fromAmount = amount;
            toAmount = Math.floor(amount * rate * 10000) / 10000;
        } else {
            toAmount = amount;
            fromAmount = Math.floor(amount / rate * 10000) / 10000; 
        }
    return [fromAmount, toAmount];
};