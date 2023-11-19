
import React from 'react';
import './Card.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const navigate = useNavigate();
    console.log("http://localhost:8000" + blog.image)
    return (
        <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={"http://localhost:8000" + blog.image}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {blog.title}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="span">
                       Created By {blog.createdBy.Username}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {blog.description.substring(0, 50)}...
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"onClick={()=>navigate(`/blogDetails/${blog._id}`)}>Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default BlogCard;
