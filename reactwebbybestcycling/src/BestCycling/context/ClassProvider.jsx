import React, { useState } from 'react'
import { ClassContext } from './ClassContext';

export const ClassProvider = ({ children }) => {
    const [ viewedClasses, setViewedClasses ] = useState([]);
    const [ checkedClass, setCheckedClass ] = useState([]);

    return (
        <ClassContext.Provider value={{ viewedClasses, setViewedClasses, checkedClass, setCheckedClass}} >
            {children}
        </ClassContext.Provider>
    );
}