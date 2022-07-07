import React, { useContext } from 'react'
import { ClassContext } from '../context/ClassContext';

export const getBoolToCheckContext = ( id ) => {
    const { viewedClasses } = useContext(ClassContext);

    return viewedClasses.includes(id);
}
