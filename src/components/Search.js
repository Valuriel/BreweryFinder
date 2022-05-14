import React from 'react';

import Grid from '@mui/material/Grid';
import TextField  from '@mui/material/TextField';

const Search = ({ searchHandler, handleClick }) => {

    const handleSearchInputChange = (event) =>{
        event.preventDefault()
        searchHandler(event.target.value);
    }

    return (
        <Grid
            container
            justify='center'
            direction='column'
            alignItems='center'
            style={{ maxWidth: 800 }}
        >
            
        <TextField 
            fullWidth
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