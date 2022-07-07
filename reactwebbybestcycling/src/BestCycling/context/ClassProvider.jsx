import React, { useState } from 'react'
import { ClassContext } from './ClassContext';

export const ClassProvider = ({ children }) => {
    const [ viewedClasses, setViewedClasses ] = useState([]);
    const [ checkedClasses, setcheckedClasses ] = useState([]);

    console.log(viewedClasses);

    return (
        <ClassContext.Provider value={{ viewedClasses, setViewedClasses, checkedClasses, setcheckedClasses}} >
            {children}
        </ClassContext.Provider>
    );
}