import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

import { ClassContext } from '../../context/ClassContext';

export const ButtonGoBack = () => {

    const navigate = useNavigate();
    const { setCheckedClass } = useContext(ClassContext);

    const onNavigateBack = () => {
        setCheckedClass([]);
        navigate('/home')
    }

    return (
        <IconButton
            aria-label="ArrowBackIosOutlinedIcon"
            style={{ backgroundColor: 'black', color: 'white', width: '45px', height: '45px', marginRight: '15px' }}
            color='info'
            size='medium'
            onClick={ () => {onNavigateBack()} }
        >
            <ArrowBackIosOutlinedIcon />
        </IconButton>
    )
}