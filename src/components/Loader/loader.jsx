import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearColor() {
    return (
        <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
            <LinearProgress 
                sx={{
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: 'red', // Change this to your desired color
                    },
                    '&.MuiLinearProgress-colorPrimary': {
                        backgroundColor: '#ff8f8f', // Custom background color (secondary color)
                    },
                }}
            />
        </Stack>
    );
}
