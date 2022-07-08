import React from 'react'
import { getNewSubscription } from '../api/Api'


import { GridLastClasses, GridProfile, HrStyle } from '../components'

export const CyclingPage = () => {

    let data = {
        name: 'pepe',
        id: '123',
    }   

    // getNewSubscription(data)
    //     .then(res => {
    //         console.log(res)
    //     });

    return (
        <>
            <GridProfile />
            <HrStyle />
            <GridLastClasses />
        </>
    )
}