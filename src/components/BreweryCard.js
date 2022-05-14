import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const BreweryCard = ({ brewery }) => {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader 
          title={brewery.name}
        />
        <CardContent>
          <Typography paragraph>
            Brewery Type: {brewery.brewery_type}
          </Typography>
          <Typography paragraph>
            City: {brewery.city}
          </Typography>
        </CardContent>
        <CardActions>
        <Link to={`/breweryDetails/${brewery.id}`}><Button size='small' variant='contained' color='primary'>View Details</Button></Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default BreweryCard;