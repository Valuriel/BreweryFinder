import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

// Material UI imports
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

    // fetch the specific brewery clicked by the user
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
            style={{ minHeight: '100vh', justifyContent: 'center' }}
            
            >
            <Card elevation={1} style={{ minWidth: '250px', height: '500px'}}>
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
                <Link to={`/`} style={{textDecoration: 'none'}}><Button size='small' variant='contained' color='warning' >Go Back</Button></Link>
                </CardActions>
            </Card>
        </Grid>   
    );
}

export default BreweryDetails;