import React from 'react'

import { Grid } from '@mui/material';

import { useCyclingData } from '../hooks/useCyclingData';
import { SearchTrainingItem, ButtonGoBack, ButtonPlay } from '../components/SearchTraining';

export const SearchTrainingPage = () => {
    const { data, loading } = useCyclingData('training_classes');

    if (loading) return <div>Loading...</div>

    return (
        data && (
            <>
                <div className='searchtraining-header'>
                    <ButtonGoBack />
                    
                    <ButtonPlay />
                </div>
                <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                    {
                        data.map(classes => (
                            <SearchTrainingItem
                                key={classes.id}
                                training_class={classes}
                            />
                        ))
                    }
                </Grid>
            </>
        )
    )
}