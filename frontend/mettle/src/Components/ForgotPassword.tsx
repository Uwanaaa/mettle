import {useState} from "react";
import { createTheme, ThemeProvider,Container,CssBaseline,Box,Typography,TextField,Button,Link} from "@mui/material"
import { red } from "@mui/material/colors";




const theme = createTheme({
  palette:{
    primary:{
      main: red[200]
    }
  }
})

export default function ForgotPassword(){
  const [showField,setShowField] = useState(false)

    const submit = (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
        const email = new FormData(e.currentTarget)
        console.log({
            email: email.get('email')
        })
        setShowField(true)
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
         <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container component="main" maxWidth='xs'  sx={{borderSpacing: 0,position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
                <CssBaseline/>
                <Box
             sx = {{
              mt : 8,
              display : 'flex',
              flexDirection : 'column',
              alignItems : 'center'
             }}
             >
               <Typography component='h1' variant='h5'>
                Forgot Password
               </Typography>
               <Box component='form' onSubmit={submit} noValidate sx={{mt: 1}}>
                <TextField margin="normal" required fullWidth id="email" name="email" label='Email' autoComplete="email" autoFocus />
                <Button type="submit" fullWidth variant="contained" sx={{mt:3,mb:2}}>Send Code</Button>
                </Box>
                {showField && (
                  <>
                  <TextField label='Enter Code' required autoFocus name="code" margin="normal" fullWidth/>
                  <Button href='/login' type="submit" fullWidth variant="contained" sx={{mt:3,mb:2}}>Confirm Code</Button>
                  </>
                )}
                </Box>
                <Copyright sx={{mt:8,mb:4}}></Copyright>
            </Container>
         </ThemeProvider>
        </>
      )
}