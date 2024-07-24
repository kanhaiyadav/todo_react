import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { useTheme } from 'styled-components';

export default function LinearColor() {
    const theme = useTheme();
    return (
        <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
            <LinearProgress 
                sx={{
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: `${theme.colors.primary}`, // Change this to your desired color
                    },
                    '&.MuiLinearProgress-colorPrimary': {
                        backgroundColor: `${theme.colors.secondary}`, // Custom background color (secondary color)
                    },
                }}
            />
        </Stack>
    );
}

