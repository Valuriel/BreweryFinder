import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const BreweryDetails = () => {
    const { id } = useParams();
    const [breweryDetail, setDetail] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://api.openbrewerydb.org/breweries/${id}`);
                setDetail(data);
            } catch(err) {
                console.log(err);
            }
        };
        fetchData();
    }, [id]);
                    
    return (
        
        <Grid 
            container 
            justify='center'
            direction='column'
            alignItems='center'
            style={{ minHeight: '100vh' }}
            
            >
            <Card elevation={1}>
                <CardHeader color='primary'
                title={breweryDetail.name}
                />
                <CardContent>
                <Typography paragraph>
                    Brewery Type: {breweryDetail.brewery_type}
                </Typography>
                <Typography paragraph>
                    Street: {breweryDetail.street}
                </Typography>
                <Typography paragraph>
                    City: {breweryDetail.city}
                </Typography>
                <Typography paragraph>
                    State: {breweryDetail.state}
                </Typography>
                <Typography paragraph>
                    Postal Code: {breweryDetail.postal_code}
                </Typography>
                <Typography paragraph>
                    Country: {breweryDetail.country}
                </Typography>
                <Typography paragraph>
                    Phone Number: {breweryDetail.phone}
                </Typography>
                <Typography paragraph>
                    Website: {breweryDetail.website_url}
                </Typography>
                </CardContent>
                <CardActions>
                <Link to={`/`}><Button size='small' variant='contained' color='primary'>Go Back</Button></Link>
                </CardActions>
            </Card>
        </Grid>   
    );
}

export default BreweryDetails;