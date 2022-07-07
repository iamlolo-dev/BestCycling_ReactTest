import React from 'react'

export const ProfileStats = ({ number, text, color }) => {
    return (
        <div className='profile-position-stats' >
            <span className='profile-stats-valor' style={{ background: color}}> { number } </span>
            <span className='text-capitalize' > { text } </span>
        </div>
    )
}
