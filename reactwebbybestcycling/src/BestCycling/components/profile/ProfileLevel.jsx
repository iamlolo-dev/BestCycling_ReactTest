import React from 'react'

export const ProfileLevel = ({ number, text }) => {
    return (
        <div className='profile-position-level'>
            <span className='profile-level-valor'> { number } </span>
            <span className='text-uppercase' > { text } </span>
        </div>
    )
}
