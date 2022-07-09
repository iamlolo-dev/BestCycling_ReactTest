import React, { useContext, useState, useEffect } from 'react'

import { Button } from '@mui/material'
import PlayArrowOutlined from '@mui/icons-material/PlayArrowOutlined';
import { useNavigate } from 'react-router-dom';

import { ClassContext } from '../../context/ClassContext';

const initColors = {
    colorIcon: '#ff7900',
    colorText: '#7b7b7b',
    colorBox: '#222222'
}

export const ButtonPlay = () => {

    const { checkedClass } = useContext(ClassContext);
    const navigate = useNavigate();

    const [colorsOff, setColorsOff] = useState(initColors)
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (checkedClass.length > 0) {
            setColorsOff({
                colorIcon: '#f27302',
                colorText: '#bdbdbd',
                colorBox: '#2f2f2f'
            })
            setDisabled(false);
        }

        if (checkedClass.length === 0) {
            setColorsOff(initColors)
            setDisabled(true);
        }

    }, [checkedClass]);

    const handleClick = () => {
        navigate(`/trainingclass/${checkedClass[0]}`);
    }

    return (
        <Button
            disabled={disabled}
            variant="contained"
            size='large'
            startIcon={<PlayArrowOutlined sx={{ color: colorsOff.colorIcon }} />}
            style={{ backgroundColor: colorsOff.colorBox, color: colorsOff.colorText, fontWeight: 'bold' }}
            onClick={handleClick}
        >
            REPRODUCIR AUTOMÁTICAMENTE
        </Button>
    )
}