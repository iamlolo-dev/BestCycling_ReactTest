import React from 'react'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

import { AvatarDefault, ProfileLevel, ProfileStats } from './';
import { HrStyle } from '../HrStyle';
import { useCyclingData } from '../../hooks/useCyclingData';

export const GridProfile = () => {

    const { data, loading } = useCyclingData('profile');
    
    if (loading) return <div>Loading...</div>

    return (

        data && (
            <div className='animate__animated animate__fadeIn'>
                <div className='profile-box'>

                    <AvatarDefault url={data.avatar} />

                    <div className='profile-text'>

                        <h1 className='title'>{data.name}</h1>

                        <div className='profile-ubication'>
                            <FmdGoodOutlinedIcon />
                            <p>Valencia, Spain</p>
                        </div>
                    </div>
                </div>

                <HrStyle />
                <div className='profile-level'>
                    <ProfileLevel number={data.level} text={'Nivel'} />
                    <ProfileLevel number={data.perseverance} text={'Constancia'} />
                    <ProfileLevel number={data.total_points} text={'Puntos'} />
                </div>
                <HrStyle />

                <div className='profile-stats '>
                    <ProfileStats number={data.stamina_points} text={'Resistencia'} color='#fcd900' />
                    <ProfileStats number={data.strength_points} text={'Fuerza'} color='#f13b46' />
                    <ProfileStats number={data.flexiblity_points} text={'Flexibilidad'} color='#69ae00' />
                    <ProfileStats number={data.mind_points} text={'mente'} color='#1d8cb9' />
                </div>
            </div>
        )
    )
}