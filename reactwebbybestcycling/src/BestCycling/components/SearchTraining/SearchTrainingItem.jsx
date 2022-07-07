import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardActionArea, CardContent, CardMedia, Checkbox, Typography } from '@mui/material';
import { DateTime } from 'luxon';

import { CalculateTime } from '../../helpers/getCalculateTime';
import { getNamesCoah } from '../../helpers/getNamesCoah';
import { StatusColorTriangle } from '../StatusColorTriangle';
import { getBoolToCheckContext } from '../../helpers/getBoolToCheckContext';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ClassContext } from '../../context/ClassContext';

export const SearchTrainingItem = ({ training_class }) => {

    const { id, name: nameclass, published, instructor_id, duration, image, level } = training_class;

    const { checkedClasses, setcheckedClasses } = useContext(ClassContext);
    const [coachName, setCoachName] = useState([]);
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    //funcion que nos devuelve si el video a sido visto
    const isView = getBoolToCheckContext(id);

    //funcion que nos devuelve el nombre del coach en el estado coachName
    getNamesCoah(instructor_id, setCoachName);

    //Con luxon parseamos la fecha
    const myDateTime = DateTime.fromMillis(published);
    const datePublished = myDateTime.toFormat('dd LLL');

    //Con luxon parseamos la duración de milliseconds a second
    const timeDuration = CalculateTime(duration);

    const handleClick = () => navigate(`/trainingclass/${id}`);

    const handleChange = ({ target }) => setChecked(target.checked)

    useEffect(() => {
        if (checked) {
            if (!checkedClasses.includes(id)) {
                setcheckedClasses([...checkedClasses, id]);
            }
        }

        if (!checked) {
            if (checkedClasses.includes(id)) {
                setcheckedClasses(checkedClasses.filter(item => item !== id));
            }
        }
    }, [checked])

    return (
        <Box component='div' spacing={1} sx={{ m: 1 }} className='animate__animated animate__zoomIn'>
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component="img"
                    height="150"
                    image={image}
                    alt={nameclass}
                />
            </CardActionArea>

            <Checkbox
                checked={checked}
                onChange={handleChange}
                sx={{
                    position: 'absolute',
                    color: '#F3F3F3',
                    top: 0,
                    '&.Mui-checked': {
                        color: '#ff7900',
                    },
                }}
            />
            <span
                style={{
                    position: 'absolute',
                    color: 'white',
                    top: 10,
                    left: 40,
                    fontWeight: 'bold',
                }}
            >
                {nameclass}
            </span>
            <span
                style={{
                    position: 'absolute',
                    color: 'white',
                    top: 30,
                    left: 40,
                    fontSize: '12px',
                    height: '20px',
                }}
            >
                {coachName}
            </span>
            {isView && (
                <span
                    style={{
                        position: 'absolute',
                        color: '#F3F3F3',
                        top: 0,
                        marginTop: '120px',
                        left: 10,
                        fontSize: '12px',
                        backgroundColor: '#ff7900',
                        borderRadius: 999,
                        padding: '2px 5px',
                        fontWeight: 'bold',
                    }}
                >
                    Completada
                </span>
            )}
            <CardActionArea onClick={handleClick}>

                <CardContent
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor: '#333333',
                        color: '#C3C3C3',
                        paddingTop: '0',
                        height: '50px',
                    }}
                >
                    <Typography
                        gutterBottom
                        variant="h8"
                        component="div"
                        style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}
                    >
                        Nivel
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </Typography>

                    <Typography variant="body2" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                        {datePublished}
                    </Typography>

                    <Typography variant="body2" style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                        Duración: {timeDuration}'
                    </Typography>
                    <StatusColorTriangle status={level} />
                </CardContent>
            </CardActionArea>
        </Box >
    )
}