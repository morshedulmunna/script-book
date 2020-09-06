import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function BlogDetails() {
  const classes = useStyles();
const {id}= useParams()
 


const [details, setDetails]= useState([])
const [comment, setComment]= useState([])


useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setDetails(data))

            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => res.json())
            .then(data => setComment(data))
},)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {details.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {details.body}
          </Typography>
        </CardContent>
      </CardActionArea>
        <h1>Comment</h1>
          {comment.map((c)=>
            <div>
            <img width="50" src="https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859" alt=""/>
            <h5> {c.title} </h5>
            <p> {c.body} </p>
            <hr/>
            </div>
          )}
    </Card>
  );
}
