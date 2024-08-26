import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { currency } from '../../App';
import './Item.css';

const Item = (props) => {
  return (
    <Card className='item'>
      <CardActionArea component={Link} to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.name}
          sx={{ objectFit: 'contain' }}
        />
        <CardContent>
        <div className='item-heading'>
          <Typography gutterBottom variant="h6" className='item-name'>
            {props.name.length > 25 ? `${props.name.substring(0, 25)}...` : props.name}
          </Typography>
        </div>

          <div className="item-prices">
            <Typography variant="body2" color="text.primary" className="item-price-new">
              {currency}{props.new_price}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="item-price-old">
              {currency}{props.old_price}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Item;
