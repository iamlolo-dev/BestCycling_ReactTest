
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

import { getTrainingById } from '../helpers/getTrainingById';
import { getNamesCoah } from '../helpers/getNamesCoah';

export const TrainingPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [dataClasse, setDataClasse] = useState(false)
    const [coachName, setCoachName] = useState([]);

    getNamesCoah(dataClasse.instructor_id, setCoachName);

    useEffect(() => {
        getTrainingById(id)
            .then(data => {
                setDataClasse(data)
            });
    }, [id])

    const onNavigateBack = () => navigate(-1);

    if (!dataClasse) return <div>Loading...</div>

    return (
        dataClasse &&
        <>
            <div className='training-header '>
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
                <span className='countdown-trainingpage'>5</span>

            </div>
        </>
    )
}