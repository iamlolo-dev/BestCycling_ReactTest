/*
    Hook para utilizar un intervalo de tiempo
*/

import { useEffect, useRef } from 'react';

export const useInterval = (callback, delay) => {
    const savedCallback = useRef(callback);

    // Remember the latest callback if it changes.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        // Don't schedule if no delay is specified.
        if (delay === null) {
            return
        }

        const id = setInterval(() => savedCallback.current(), delay);

        return () => clearInterval(id);
    }, [delay]);
}

/*
    Ejemplo:
    useInterval(() => {
        // Your custom logic here
        setCount(count + 1)
    }, isPlaying ? delay : null) // Delay in milliseconds or null to stop it
*/