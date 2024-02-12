import React, { useState,useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createTheme, ThemeProvider,Container,CssBaseline,Box,Typography,TextField,Button,Grid,Link,Checkbox,FormControlLabel } from "@mui/material"
import { green, red } from "@mui/material/colors"
import axios from "axios"
import { AxiosResponse } from "axios"
import { set } from "firebase/database"


const theme = createTheme({
  palette:{
    primary:{
      main: red[200]
    },
    success : {
      main:'#66bb6a'
    },
    error: {
      main:'#f44336'
    }
  }
})

export default function Login(){
  const [loginData,setLoginData] = useState({
    input: '',
    password: ''
  })
  const[messageBox,setMessageBox] = useState(false)
  const [response,setResponse] = useState('')
  const [colour,setColour] = useState('')
  const [redirect,setRedirect] = useState('')
  const history = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const {name,value} = e.target
      setLoginData(prevState => (
        {
          ...prevState,
          [name]: value
        }
      ))
    }
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      axios.post('http://localhost:3000/user/login',loginData,{
        headers: {
          "Content-Type":"application/x-www-form-urlencoded"
        }
      }).then((response : AxiosResponse) => { 
        setRedirect(response.data.url)
        useEffect(() =>{
          if(redirect){history('/watch',{replace:true})}
        })
        setResponse(response.data.loginStatus)
        console.log(response.data.loginStatus)
        if(response.data.pass){
          setColour('success')
        }else{
          setColour('error')
        }
        setMessageBox(true)})
      .catch((err) => {console.log(err)})

      const formData = new FormData(e.currentTarget)
      //let input = formData.get('input')
      //let password = formData.get('password')
      console.log('Login Data: ',formData)
    }
  
  function Copyright(props:any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        Copyright © 
        <Link color="inherit" href="#">
          Unwana Udofia
        </Link>{' '}
        {new Date().getFullYear()}
        .
      </Typography>
    );
  }
    return(
        <>
        <ThemeProvider theme={theme}>
          <Container component='main' maxWidth='xs'  sx={{borderSpacing: 0,position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}} >
            <CssBaseline />
            <Box margin='auto'
            sx = {{
              mt : 8,
              display : 'flex',
              flexDirection : 'column',
              alignItems : 'center',
            }}
            >{messageBox && (
              <Box  sx={{backgroundColor:`${colour}.main`,color:'black',mb:'20px',textAlign:'center',borderRadius:'30px'}} height={100} width={500}>
                <Typography>{response}</Typography>
              </Box>
            )}
              <Typography component='h1' variant='h5'>
                Login
              </Typography>
              <Box component='form' onSubmit={submit} noValidate sx={{mt: 1}}>
                <TextField margin="normal" required fullWidth id="email" name="input" onChange={handleChange} value={loginData.input} label='Email/Username' autoComplete="email" autoFocus />
                <TextField margin="normal" required fullWidth type="password" name="password" onChange={handleChange} value={loginData.password} id="password" label='Password' autoComplete="userpassword" autoFocus/>
                <FormControlLabel control={<Checkbox value='remember' color="primary"/>} label='Remember me'/>
                <Button type="submit" fullWidth variant="contained" sx={{mt:3,mb:2}}>Login</Button>
                <Grid container margin='normal'>
                  <Grid item> 
                  <Link href='/forgot-password' variant="body2">Forgot Password ?</Link>
                  </Grid>
                  <Grid item>
                    <Link href='/signup' variant="body2">
                      Signup
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{mt:8,mb:4}}></Copyright>
          </Container>
        </ThemeProvider>
        </>
    )
}