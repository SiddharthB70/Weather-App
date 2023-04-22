import { useState, useEffect } from "react";

export const useDebounce = (searchQuery, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(searchQuery);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(searchQuery);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery, delay]);

    return debouncedValue;
};
