export const setCurrDates = () => {
    const date = new Date();
    let result = '';
    result = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    return result;
}