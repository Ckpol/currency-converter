import { useState } from "react";

export const useFetching = (cb) => {
    const [error, setError] = useState('');

    const fetching = async (...args) => {
        try {
            await cb(...args);
        } catch (e) {
            setError(e.message);
        }
    }

    return [fetching, error];
}