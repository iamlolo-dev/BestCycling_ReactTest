import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Grid, IconButton } from '@mui/material';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

import { useCyclingData } from '../hooks/useCyclingData';
import { SearchTrainingItem } from '../components/SearchTraining/SearchTrainingItem';

export const SearchTrainingPage = () => {
    const { data, loading } = useCyclingData('training_classes');
    const navigate = useNavigate();

    if (loading) return <div>Loading...</div>

    const onNavigateBack = () => navigate(-1);

    return (
        data && (
            <>
                <div className='searchtraining-header '>
                    <IconButton
                        aria-label="ArrowBackIosOutlinedIcon"
                        style={{ backgroundColor: 'black', color: 'white', width: '45px', height: '45px', marginRight: '15px' }}
                        color='info'
                        size='medium'
                        onClick={onNavigateBack}
                    >
                        <ArrowBackIosOutlinedIcon />
                    </IconButton>
                </div>
                <Grid container sx={{
                    display: 'grid',
                    gridAutoFlow: 'row',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                }}>
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
