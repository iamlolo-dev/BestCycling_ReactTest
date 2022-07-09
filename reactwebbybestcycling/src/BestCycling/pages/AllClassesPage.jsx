import { Grid } from '@mui/material';

import { useCyclingData } from '../hooks/useCyclingData';
import { AllClassesItem, ButtonGoBack, ButtonPlay } from '../components';

export const AllClassesPage = () => {
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
                            <AllClassesItem
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