import React , {useState} from 'react';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Register.scss';


const Register = () =>{
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState(''); 
    const navigate =  useNavigate();
    const signUp = async() =>{
        try{
          const response = await axios.post("http://localhost:8000/api/v1/auth/register",{
            
              "username" : name,
              "email" : email,
              "password" : password
          
          })
          console.log(response.data.message);
          alert("register successfully")
           // Clear input fields after successful form submission
           setName('');
           setEmail('');
           setPassword('');
           // nevigate user to login
           navigate('/');
        }catch(err){
            alert("error");
            console.log("error" , err);
        }
     
    }
    const handleSubmit = (e)=>{
            e.preventDefault();
            console.log(name,email ,password);
            signUp()

    }
    return (
        <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh', // Center vertically on the screen
         
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Add shadow
          padding: '20px', // Add padding for space around the form
          }}
        >
          <Typography variant="h5">Register</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={(e)=>setName(e.target.value)}
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={(e)=>setEmail(e.target.value)}
            />
            
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={(e)=>setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </form>
            <Link to={'/'}>go to Login</Link>
        </Box>
      </Container>
    )

}

export default Register;