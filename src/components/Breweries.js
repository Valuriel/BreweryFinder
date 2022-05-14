import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BreweryCard from './BreweryCard';
import Search from './Search';

// Material UI imports
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Breweries = () => {
    const [searchBrewery, setSearchBrewery] = useState('');
    const [breweries, setBreweries] = useState([]);

// fetch all breweries from the OpenBreweryDB Api
useEffect(() => {
    fetchBreweries();
}, []);

const fetchBreweries = () => {
    axios
        .get('https://api.openbrewerydb.org/breweries')
        .then((res) => {
            console.log(res);
            setBreweries(res.data);
        })
        .catch((err) => {
            console.log(err)
        });
};

const searchHandler = (value) => {
    setSearchBrewery(value);
}

// filter logic to only show breweries that includes the city or name of the brewery based on userinput
const filteredBreweries = searchBrewery.length === 0 ? breweries :
        breweries.filter(brewery => brewery.id
        .toLowerCase().includes(searchBrewery.toLocaleLowerCase()) || 
        brewery.city.toLowerCase().includes(searchBrewery.toLocaleLowerCase())
        )

    return (
        <Container>
            <Search searchHandler={searchHandler} />
            
            <Grid container spacing={3}>
                {filteredBreweries.map((brewery) =>(
                <Grid item key={brewery.id} xs={12} sm={6} md={3}>
                       <BreweryCard brewery={brewery} />
                       
                </Grid>
                ))}
            </Grid>    
        </Container>
    );
};

export default Breweries;