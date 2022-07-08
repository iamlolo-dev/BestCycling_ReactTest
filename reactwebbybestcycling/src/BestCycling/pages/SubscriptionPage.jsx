import React from 'react'
import { BoxText } from '../components/Subscription/BoxText'
import { BoxTypeSub } from '../components/Subscription/BoxTypeSub'

export const SubscriptionPage = () => {
    return (
        <div className='subscription-header'>
            <span className='t-main' >SUSCRÍBETE</span>
            <BoxText />  
            <div className='b-row'>
                <BoxTypeSub text='1 minuto'/>
                <BoxTypeSub text='5 minuto'/>
                <BoxTypeSub text='10 minuto'/>
            </div>          
        </div>
    )
}
