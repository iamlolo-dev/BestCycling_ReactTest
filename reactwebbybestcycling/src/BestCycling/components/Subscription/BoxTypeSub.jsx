import { Box, Grid } from '@mui/material'
import React from 'react'

export const BoxTypeSub = ({ text }) => {


    return (
        <Grid container sx={{ mt: 4, display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
            <Box
                spacing={1}
                component='div'
                sx={{
                    m: 1,
                    backgroundColor: '#fff',
                    width: "300px",
                    height: "170px",
                    padding: "24px 20px", // theme padding
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <span style={{ fontSize: '2em', fontWeight: 'bold', color: '#ff7900' }}>{text}</span>
            </Box>
        </Grid >
    )
}
