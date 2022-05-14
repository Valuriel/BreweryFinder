import React from 'react';

// Material UI imports
import { Box } from '@mui/system';
import { Container } from '@mui/material';

const Footer = () => {
    return (
        <footer>
           <Box 
            // Styling better for responsiveness
            px={{ xs: 3, sm: 10}} 
            py={{ xs: 5, sm: 10}} 
            bgcolor='text.secondary' 
            color='black'
            >
                <Container maxWidth='lg'>
                    <Box textAlign='center' pt={{xs: 5, sm: 10}} pb={{ xs: 5, sm: 0}}>
                        Christian Pötter &reg; {new Date().getFullYear()} powered by OpenBreweryDB
                    </Box>
                </Container>
           </Box>
        </footer>
    );
};

export default Footer;