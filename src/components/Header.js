import React from 'react';

// Material UI imports
import { AppBar, Typography } from '@mui/material';

const Header = () => {
    return (
        <AppBar position='static'>
            <Typography variant='h6' style={{ backgroundColor: '#f57c00', color: 'black', textAlign: 'center'}}>
                Find a Brewery
            </Typography>
            
        </AppBar>
    );
};

export default Header;