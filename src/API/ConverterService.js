import axios from "axios";

export default class ConverterService {
    
    static async getOptions() {
        const response = axios.get('https://free.currconv.com/api/v7/currencies?apiKey=1cbfdc87552cefe37fb5');
        return response;
    }

    static async getConvert(from, to, dates) {
        const response = axios.get(`https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&date=${dates}&apiKey=1cbfdc87552cefe37fb5`);
        return response;
    }
}