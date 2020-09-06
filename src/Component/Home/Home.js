import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Home.css'
import { Container } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Home = () => {
    const classes = useStyles();

    // Data Collect using useEffect and useState
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [])
    console.log(post);

    return (
        <div className="body-content ">
            <Container>
                <Grid container spacing={4}  > 
                {post.map((p) => (<Grid item xs={3} >
                        <Card className={classes.root}>

                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://ichef.bbci.co.uk/news/660/cpsprodpb/B08B/production/_114259154_c51ca830-e816-4d8f-84fd-ec9374a22943.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {p.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {p.body}
                                     </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link to={`/blog-details/${p.id} `} > <Button size="small" color="primary">see More</Button> </Link>
                            </CardActions>
                        </Card>
                    </Grid>))  }
                    
                </Grid>
            </Container>
        </div>
    );
};

export default Home; 