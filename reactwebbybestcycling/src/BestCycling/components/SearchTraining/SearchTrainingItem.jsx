import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { DateTime } from 'luxon';

import { CalculateTime } from '../../helpers/getCalculateTime';
import { getNamesCoah } from '../../helpers/getNamesCoah';
import { StatusColorTriangle } from '../StatusColorTriangle';

export const SearchTrainingItem = ({ training_class }) => {
    const {
        id,
        name: nameclass,
        published,
        instructor_id,
        duration,
        image,
        level,
    } = training_class;

    const [coachName, setCoachName] = useState([]);
    const navigate = useNavigate();

    getNamesCoah(instructor_id, setCoachName);

    //Con luxon parseamos la fecha
    const myDateTime = DateTime.fromMillis(published);
    const datePublished = myDateTime.toFormat('dd LLL');

    //Con luxon parseamos la duración de milliseconds a second
    const timeDuration = CalculateTime(duration);

    const handleClick = () => navigate(`/trainingclass/${ id }`);

    return (
        <Card spacing={1} sx={{ m: 1 }}  onClick={handleClick} className='animate__animated animate__zoomIn'>
            <CardActionArea>
                <div style={{ position: 'relative' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt="green iguana"
                    />
                    <span
                        style={{
                            position: 'absolute',
                            color: 'white',
                            top: 10,
                            left: 10,
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
                            left: 10,
                            fontSize: '12px',
                        }}
                    >
                        {coachName}
                    </span>
                </div>
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
        </Card >
    )
}