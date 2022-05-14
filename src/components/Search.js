import React from 'react';

// Material UI imports
import Grid from '@mui/material/Grid';
import TextField  from '@mui/material/TextField';

const Search = ({ searchHandler }) => {

    const handleSearchInputChange = (event) =>{
        event.preventDefault()
        searchHandler(event.target.value);
    }

    return (
            <Grid
                item xs={12} sm={6} md={3}
                container
                justify='center'
                direction='column'
                alignItems='center'
                style={{ maxWidth: 800 }}
                marginTop= '25px'
                marginBottom= '50px'
            >
                
            <TextField 
                fullWidth
                sx={{background: 'white'}}
                id='search-bar'
                className='text'
                onChange={handleSearchInputChange}
            
                label='Enter a city or Brewery name'
                variant='outlined'
                placeholder='Search...'
                size='small'
            />
        
            </Grid>
    );
};

export default Search;