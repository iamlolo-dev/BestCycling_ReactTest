import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';
import Box from '@mui/material/Box';

import { LogoBestCyling } from '../LogoBestCyling';
import { getNamesCoah } from '../../helpers/getNamesCoah';

export const GridLastClassesItem = ({ training_class }) => {

    const { id, name: NameClass, published, instructor_id} = training_class;
    const [coachName, setCoachName] = useState([]);

    getNamesCoah(instructor_id, setCoachName);
    
    //Con luxon parseamos la fecha
    const myDateTime = DateTime.fromMillis(published);
    const datePublished = myDateTime.toFormat('DD');

    const navigate = useNavigate();
    const handleClick = () => navigate(`/trainingclass/${ id }`);

    return (
        <Box component='div' spacing={1} sx={{ m: 1 }}  className='div-click animate__animated animate__backInLeft' onClick={ handleClick } >
            <div className='container-lastclasses-item' >

                <div className='header-item-classes' >
                    <LogoBestCyling />
                    <p className='text-capitalize' style={{ color: 'grey' }}>{datePublished}</p>
                </div>

                <div className='box-classe' >
                    <div style={{ padding: '0.5em' }}>
                        <span className='title'>{NameClass}</span>
                        <p className='text-capitalize'>{coachName}</p>
                    </div>
                </div>

            </div>
        </Box>
    )
}