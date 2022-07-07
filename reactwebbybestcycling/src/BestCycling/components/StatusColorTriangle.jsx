import React from 'react'

export const StatusColorTriangle = ({status}) => {

    let iconColor = 'none';

    if (status === 1) {
        iconColor = '#69ae00'
    }

    if (status === 2) {
        iconColor = '#f13b46'
    }

    if (status === 3) {
        iconColor = '#ff7900'
    }

    return (
        <div
            className='trianglecategory'
            style={{backgroundColor: iconColor}}
        />
    )
}
