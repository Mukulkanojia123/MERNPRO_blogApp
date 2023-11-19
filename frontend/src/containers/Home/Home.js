import React ,{useEffect, useState}from 'react'
import axios from 'axios';
import './Home.scss'
import BlogCard from '../../components/Card/BlogCard';

 const Home = () => {
  const [blogs , setBlogs] = useState([]);

  const fetchBlogs =async()=>{
    try{
      const response = await axios.get("http://localhost:8000/api/v1/blog/",{
        headers : {
          'Authorization' : `Bearer ${localStorage.getItem('jwt')}` ,
          'Content-Type': 'multipart/form-data', 
        }
      })
      console.log(response.data);
      
     setBlogs(response.data.results)
      
       // nevigate user to login
        // navigate('/home');
    }catch(err){
        alert("error");
        console.log("error" , err);
    }
  }

  useEffect(()=>{
      fetchBlogs()
  },[])
  return (
    <div className='homeCard-container'>
      {
        blogs && blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog}/>
          ))
      }
       
     
    </div>
  )
}

export default Home;
