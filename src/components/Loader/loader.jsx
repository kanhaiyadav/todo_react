import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearColor() {
    return (
        <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
            <LinearProgress 
                sx={{
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: '#EE7214', // Change this to your desired color
                    },
                    '&.MuiLinearProgress-colorPrimary': {
                        backgroundColor: '#f8af76', // Custom background color (secondary color)
                    },
                }}
            />
        </Stack>
    );
}

