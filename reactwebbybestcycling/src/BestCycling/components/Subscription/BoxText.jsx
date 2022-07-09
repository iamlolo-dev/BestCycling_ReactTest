import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { AuthContext } from '../../../auth/context';

export const BoxText = () => {

    const { toggleAutorenove, authState } = useContext(AuthContext);

    return (
        <Box style={{ display: 'flex', justifyContent: 'center', marginBottom: '1em' }}>
            <FormGroup sx={{ mt: 5 }}>

                <FormControlLabel
                    sx={{ color: '#a8a8a8', fontSize: '14px', fontWeight: 'bold' }}
                    control={
                        <Checkbox checked={authState.user.autorenove} color='warning' onChange={ toggleAutorenove } sx={{ color: '#fff', '& .MuiSvgIcon-root': { fontSize: 28 } }} />
                        }
                        label="Autorenovar automáticamente" />
            </FormGroup>
        </Box >
    )
}