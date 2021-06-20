import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./Card.css"
import { useSelector, useDispatch } from "react-redux";
import { cardImage } from "../../../Store/Actions/CardAction";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // const products = useSelector((state) => state)
  const products = useSelector((state) => state.cardReducer.products)
  console.log(products);
  const dispatch = useDispatch();
  // const { image, id, title, price, category } = product;
  // const list = products.map((product) => {
    return(
     products.map((prod) => {
       return (
        <div >
        <Card className={classes.root} >
          {<button onClick={ ()=> dispatch(cardImage())} className="btn">+</button>}
          <CardMedia
          
            className={classes.media}
            image= {prod.image}
          />
          <CardContent>
            <h5 className="priceTag">{}</h5>
                <p className="title">{}</p>
              </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
          </Collapse>
        </Card>
        
      </div>
       )
     })
    )
  // })
  
  // return [list,  useEffect(
  //   dispatch(cardImage())
  // )]
   

}
