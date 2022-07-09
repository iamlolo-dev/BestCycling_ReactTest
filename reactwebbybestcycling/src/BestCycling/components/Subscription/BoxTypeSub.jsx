import React, { useContext } from 'react'
import { Button, Grid } from '@mui/material'

import { AuthContext } from '../../../auth/context';

export const BoxTypeSub = ({ text, value }) => {

    const { updateTime, authState, updateTypeSub } = useContext(AuthContext);

    const handleClick = (val) => {
        updateTime(val);
        updateTypeSub(val);
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Button
                onClick={() => handleClick(value)}
                fullWidth
                sx={{
                    margin: '0 auto',
                    backgroundColor: '#fff',
                    maxWidth: '300px',
                    height: "170px",
                    padding: "24px 20px",
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                }}
                disabled={authState.user.subscription !== null ? true : false}
            >
                <span style={{ fontSize: '2em', fontWeight: 'bold', color: '#ff7900' }}>
                    {text}
                </span>

            </Button>
        </Grid >
    )
}
