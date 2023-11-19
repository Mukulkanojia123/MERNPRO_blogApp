import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

const NewBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);



  const handleImageChange = (e) => {
    // Handle image upload logic
    // You can use FileReader to preview the image if needed
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleCreateBlog = async () => {
    console.log(title)
    console.log(content)
    console.log(image)

    const formdata = new FormData();
    formdata.append('title', title);
    formdata.append('description', content);
    formdata.append('image', image);
    formdata.append('createdBy', '6553151e776878be2ac2032e');


    try {
      const response = await axios.post('http://localhost:8000/api/v1/blog/', formdata, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          'Content-Type': 'multipart/form-data', 
        },
      });

      console.log(response.data);
      alert('successfull created')
    } catch (err) {
      console.log("errro", err);
    }
  }

  return (
    <div>
      <Container>
        <Typography variant="h4" gutterBottom>
          Create a New Blog
        </Typography>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Blog Content"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateBlog}
        >
          Create Blog
        </Button>
      </Container>
    </div>
  )
}

export default NewBlog;
