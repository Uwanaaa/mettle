import React,{useState} from 'react'
import { CssBaseline, Box, Container, Typography, Button } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';


export default function MyComponent(){
  const [selectedFile,setSelectedFile] = useState<File | null>(null)


  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLElement>) => {
    setSelectedFile(e.target.files[0])
  }
  return (
    <>
    <Container component="main" maxWidth='xs' sx={{borderSpacing: 0,position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
    <CssBaseline/>
    <input type="file" onChange={handleChange}/>
    <Button type='submit' sx={{width:'90%',height:'70%',bgcolor:'red',color:'black',pl:0,borderRadius:'10px'}}><Typography sx={{mr:'5%'}}>Upload your video</Typography><PublishIcon/></Button>
    </Container>
    </>
  )
}

