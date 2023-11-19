import React , {useState} from 'react';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import axios from 'axios'
import { Link , useNavigate} from 'react-router-dom';
import './Login.scss';


const Login = () =>{
    const [name , setName] = useState('');
    const [password , setPassword] = useState(''); 
    const navigate = useNavigate();
    const loginUser = async() =>{
      try{
        const response = await axios.post("http://localhost:8000/api/v1/auth/login",{

            "username" : name,
            "password" : password
        
        })
        console.log(response.data);
        alert("register successfully")
        localStorage.setItem('jwt' , response.data.token)
        
         // nevigate user to login
          navigate('/home');
      }catch(err){
          alert("error");
          console.log("error" , err);
      }
   
  }
    const handleSubmit = (e)=>{
            e.preventDefault();
            console.log(name ,password)
            loginUser()

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
          <Typography variant="h5">Login</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              type="text"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={(e)=>setName(e.target.value)}
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
            <Button type="submit" variant="contained" color="success" fullWidth>
              Login
            </Button>
          </form>
            <Link to={'/register'}>Create a new account</Link>
        </Box>
      </Container>
    )

}

export default Login;