import { Grid } from '@mui/material'
import React from 'react'
import { BoxText } from '../components/Subscription/BoxText'
import { BoxTypeSub } from '../components/Subscription/BoxTypeSub'

export const SubscriptionPage = () => {

    return (
        <div className='subscription-header'>
            <div className='t-main' >SUSCRÍBETE</div>
            <BoxText />  

            <Grid container justifyContent='center' spacing={2}>
                <BoxTypeSub text='1 minuto' value={60000}/>
                <BoxTypeSub text='5 minutos' value={300000}/>
                <BoxTypeSub text='10 minutos' value={600000}/>
            </Grid>          
        </div>
    )
}