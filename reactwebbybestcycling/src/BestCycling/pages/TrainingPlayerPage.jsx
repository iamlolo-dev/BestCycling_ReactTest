
import React, { useContext, useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

import { getTrainingById, getNamesCoah } from '../helpers';
import { useCounter, useInterval } from '../hooks';
import { ClassContext } from '../context/ClassContext';
import { AuthContext } from '../../auth/context';

export const TrainingPlayerPage = () => {

    const { id } = useParams();

    const { authState, updateTime } = useContext(AuthContext);
    const { viewedClasses, setViewedClasses, checkedClass, setCheckedClass } = useContext(ClassContext);

    const [dataClasse, setDataClasse] = useState(false)
    const [coachName, setCoachName] = useState([]);

    const navigate = useNavigate();

    //hook counter 
    const { state: counter, reset, decrement } = useCounter();

    //funcion que nos devuelve el nombre del coach en el estado
    getNamesCoah(dataClasse.instructor_id, setCoachName);

    //function to get back to the last page
    const onNavigateBack = () => navigate('/searchtrainingclass');

    //function to save Id in context and return to the last page
    useEffect(() => {

        if (counter === 0 && checkedClass.length === 0) {
            setViewedClasses([...viewedClasses, parseInt(id)]);
            reset();
            navigate('/searchtrainingclass');
        }

        if (counter === 0 && checkedClass.length > 0) {
            const copyCheckedClass = [...checkedClass];
            setCheckedClass(checkedClass.filter(item => item !== parseInt(id)));
            setViewedClasses([...viewedClasses, parseInt(id)]);
            reset();

            navigate(`/trainingclass/${copyCheckedClass[1]}`);
            
            if(copyCheckedClass.length === 1){
                navigate('/searchtrainingclass');
            }
        }

    }, [counter, checkedClass]);

    //Get data from API and set it to state (dataClasse)
    useEffect(() => {
        getTrainingById(id)
            .then(data => {
                setDataClasse(data)
            });
    }, [id]);

    //Use interval to update the counter and controller subscription
    useInterval(() => {
        if (authState.user.subscription === 0 && authState.user.autorenove === true) updateTime(authState.user.typeSubscription);
        if (authState.user.subscription !== null) decrement();
        if (authState.user.subscription === null) navigate('/subscription');


    }, (counter !== 0) ? 1000 : null);

    if (!dataClasse) return <div>Loading...</div>

    return (
        dataClasse &&
        <div style={{ display: 'flex' }}>
            <div className='training-header'>
                <IconButton
                    aria-label="ArrowBackIosOutlinedIcon"
                    style={{ backgroundColor: 'black', color: 'white', width: '45px', height: '45px', marginRight: '15px' }}
                    color='info'
                    size='medium'
                    onClick={onNavigateBack}
                >
                    <ArrowBackIosOutlinedIcon />
                </IconButton>
                <div className='navtype-trainingpage'>
                    <span className='title'>{dataClasse.name}</span>
                    <p className='text-capitalize'>{coachName}</p>
                </div>
            </div>
            <div className='containervideo-trainingpage'>
                <span className='countdown-trainingpage'>{counter}</span>
            </div>

        </div>
    )
}