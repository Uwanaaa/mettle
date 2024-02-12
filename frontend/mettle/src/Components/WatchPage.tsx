import React,{useState} from "react";
import Grok from '../assets/elon grok.jpg'
//import grok from '../assets/Google's Gemini just made GPT-4 look like a babyâs toy?.mp4'
import GeminiLie from '../assets/The Gemini Lie.mp4'
import Geminilie from '../assets/gemini lie.jpg'
import GeminiBaby from '../assets/gemini baby.jpg'
import Geminibaby from '../assets/gemini baby.jpg'
import { Container,CssBaseline,ThemeProvider,Avatar,Toolbar,AppBar,Grid,Menu,MenuItem,ListItemIcon,IconButton,Tooltip,Paper} from "@mui/material";
import { Logout } from "@mui/icons-material";
//import NavigateNextIcon from '@mui/icons-material/NavigateNext'
//import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import ReactPlayer from "react-player";
import screenfull from "screenfull";



export default function WatchPage(){
    const [anchorElement,setAnchorElement] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorElement)
    const click = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElement(event.currentTarget)
    }
    const close = () => {
        setAnchorElement(null)
    }
    return(
        <>
        <ThemeProvider theme>
            <Container component="main" maxWidth='xs' sx={{borderSpacing: 0}}>
                <CssBaseline/>
                <AppBar sx={{backgroundColor:'black'}}>
                <Toolbar sx={{backgroundColor:'red', opacity:0.7,mb:0}}>
                    <Tooltip title='Settings'>
                        <IconButton onClick={click} >
                        <Avatar sx={{backgroundColor:'orange', direction:'rtl'}}>U</Avatar>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
                <Menu anchorEl={anchorElement} id="accountMenu" open={open} onClick={close} onClose={close}>
                    <Paper elevation={0} sx={{overflow:'visible',
                           filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                           mt: 1.5,
                           '& .MuiAvatar-root': {
                             width: 32,
                             height: 32,
                             ml: -0.5,
                             mr: 1,
                           },
                           '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                          },
                }} 
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={() => {window.location.href='/login'}}>
                        <ListItemIcon>
                            <Logout/>
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                    <MenuItem onClick={() => window.location.href='/upload'}>
                    Upload
                    </MenuItem>
                    </Paper>
                </Menu>
                <Container>
                    <ReactPlayer width='100%' height='100%' url={GeminiLie} playing={true} muted={false} controls={true} stopOnUnmount={false} light={<img src={Geminilie} alt='Thumbnail'/>}/>
                </Container>
                </AppBar>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <ReactPlayer light={<img src={Geminibaby} alt='Thumbnail'/>}>Hello</ReactPlayer>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
        </>
    )
}