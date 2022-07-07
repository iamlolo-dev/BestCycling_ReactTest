import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'

import { GridLastClassesItem } from './';
import { useCyclingData } from '../../hooks/useCyclingData';

export const GridLastClasses = () => {

    const navigate = useNavigate();
    const { data, loading } = useCyclingData('training_classes');

    if (loading) return <div>Loading...</div>

    const handleClick = () => navigate(`/searchtrainingclass`);

    return (
        data && (
            <>
                <div className='header-lastClasses'>
                    <span className='title-lastClasses title'>ÚLTIMAS CLASES</span>

                    <Button
                        color={'warning'}
                        variant="contained"
                        onClick={handleClick}
                    >
                        VER TODAS
                    </Button>

                </div>
                <div className='containeritems-lastclasses'>
                    {
                        data.slice(0, 9).map(classes => (
                            <GridLastClassesItem
                                key={classes.id}
                                training_class={classes}
                            />
                        ))
                    }
                </div>
            </>
        )
    )
}