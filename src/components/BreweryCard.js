import React from 'react';
import { Link } from 'react-router-dom';

// Material UI imports
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const BreweryCard = ({ brewery }) => {
  return (
    <div>
      <Card 
          variant='outlined' 
          style={{ 
            minWidth: '250px', 
            height: '300px', 
            marginBottom: '25px', 
            backgroundColor: '#f9f9f9', 
            display: 'flex', 
            justifyContent: 'space-between', 
            flexDirection: 'column' }}
        >
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
        <Link to={`/breweryDetails/${brewery.id}`} style={{textDecoration: 'none'}}><Button size='small' variant='contained' color='warning'>View Details</Button></Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default BreweryCard;