import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';

export const BoxText = () => {

    const [checked, setChecked] = useState(false);

    const handleChange = () => setChecked(!checked);


    return (
        <Box sx={{ display: 'flex' }}>
            <FormGroup sx={{mt:5 }}>

                    <FormControlLabel
                        sx={{ color: '#a8a8a8', fontSize: '14px', fontWeight: 'bold' }}
                        control={
                            <Checkbox checked={checked} color='warning' onChange={handleChange} sx={{ color: '#fff', '& .MuiSvgIcon-root': { fontSize: 28 }  }} />
                        }
                        label="Autorenovar automáticamente" />
                </FormGroup>
        </Box >
    )
}
