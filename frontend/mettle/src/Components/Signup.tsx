import React,{useState} from "react"
import { createTheme, ThemeProvider,Container,CssBaseline,Box,Typography,TextField,Button,Grid,Link,Checkbox,FormControlLabel } from "@mui/material"
import red  from "@mui/material/colors/red"
import axios, { AxiosResponse } from "axios"


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

export default function Signup(){
  const [formData,setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const[response,setResponse] = useState('')
  const[colour,setColour] = useState('')
  const [messageBox,setMessageBox] = useState(false)
  const[redirect,setRedirect] = useState(false)

  //To updata the text
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name,value} = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  //Handles submit event
  const submit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const signupData = new FormData(e.currentTarget)
  
    axios.post('http://localhost:3000/user/signup/',formData,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then((response : AxiosResponse) => {
      setResponse(response.data.userStatus)
      console.log(response.data.loginStatus)
        if(response.data.pass){
          setColour('success')
          setRedirect(true)
        }else{
          setColour('error')
        }
        setMessageBox(true)
      }
    )
    .catch((err) => {console.log(err)})

    console.log(formData)
    console.log({
      username : signupData.get('username'),
      email : signupData.get('email'),
      password : signupData.get('password'),
    })
  }

  function Copyright(props: any) {
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
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
        <ThemeProvider theme={theme}>
          <Container component='main' maxWidth='xs'  sx={{borderSpacing: 0,position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
            <CssBaseline />
            <Box
            sx = {{
              mt : 8,
              display : 'flex',
              flexDirection : 'column',
              alignItems : 'center'
            }}
            >{messageBox && (
              <Box sx={{backgroundColor:`${colour}.main`,color:'black',mb:'20px',textAlign:'center',borderRadius:'30px'}} height={100} width={500}>
                <Typography>{response}</Typography>
              </Box>
            )}
              <Typography component='h1' variant='h5'>
                Signup
              </Typography>
              <Box component='form' action="http://127.0.0.1:3000/user/signup" onSubmit={submit} noValidate sx={{mt: 1}}>
                <TextField required autoComplete="name" id="username" name="username" value={formData.username} onChange={handleChange} label="Username" fullWidth margin="normal" autoFocus/>
                <TextField margin="normal" required fullWidth id="email" name="email" value={formData.email} onChange={handleChange} label='Email' autoComplete="email" autoFocus />
                <TextField margin="normal" required fullWidth name="password" value={formData.password} onChange={handleChange} id="password" label='Password' autoComplete="userpassword" autoFocus/>
                <FormControlLabel control={<Checkbox value='remember' color="primary"/>} label='Remember me'/>
                <Button href={redirect ? '/watch':''} type="submit" fullWidth variant="contained" sx={{mt:3,mb:2}}>Signup</Button>
                <Grid container>
                  <Grid item>
                    <Link href='/login' variant="body2">
                      Do you have an account?,Login
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