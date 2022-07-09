import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const ButtonSubNav = ({ text }) => {

    const navigate = useNavigate()

    const handleClick = () => navigate('/subscription')

    return (
        <Button
            variant="contained"
            size='large'
            color='warning'
            sx={{
                color: '#fff',
                background: '#ff7900',
                fontWeight: 'bold',
                fontSize: '1em',
                marginRight: '1.5em',
            }}
            onClick={handleClick}
        >
            {text}
        </Button>

    )
}
