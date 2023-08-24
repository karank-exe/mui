import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/MenuOutlined';
import React,{useState} from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import appbar from '../image/appbar.png'                                                      
import Franchise from '../Franchise/Franchise';
import Switchcustom from '../Switch/Switch';
import { styles } from './NavbarStyle';
import divider from  '../image/divider.png'
import icbell from  '../image/ic-bell.png'
import avatar from  '../image/Avatar.png'
import avatarArrow from '../image/avatarArrow.png'
import status from '../image/Status.png'
import EditFranchise from '../Franchise/EditFranchise';
import ProfilePopUp from '../ProfilePopUp/ProfilePopUp';

const style = styles();
// const drawerWidth = 240;
const Navbar = ({drawerWidth,handleDrawerToggle}) => {
    const[logoutOpen,setLogoutOpen]=useState(false);
    const [editOpen, setEditOpen]= useState(false);
    const handleClickOpen=()=>{
      setEditOpen(true);
    }
    const handleClose=()=>{
      setEditOpen(false);
    }
    const handleLogout=()=>{
      console.log("handlelogout clicked")
      setLogoutOpen(!logoutOpen)
    }
  return (
    <AppBar
    position="fixed"
    sx={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      ml: { sm: `${drawerWidth}px` }
    }}
  >
    <Toolbar sx={{backgroundColor:'white',border:'2px solid black' ,display:'flex',justifyContent:'space-between'}}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon sx={{color:'black'}} />
      </IconButton>
      <Box>
        <Box sx={{display:'flex',border:'2px solid red',m:'0px'}}>
        <img src={appbar}/>
        <Typography sx={{color:'black'}}>Banks</Typography>
        </Box>
      </Box>
      <Box sx={{border:'2px solid red',display:'flex', alignItems:'center'}}>
          <Franchise/>
          <Switchcustom checked={true} text='Active'/>
          <Box sx={{border:'2px solid green', position:'relative'}}>
          <Button variant='contained' sx={style.editAddbutton} onClick={handleClickOpen} >Edit</Button>
          <Box sx={{position:'absolute', top:'30px', zIndex:'2'}} onClose={handleClose}>
                {editOpen&&<EditFranchise handleClose={handleClose}/>}
          </Box>
          </Box>
         
          <Button variant='contained' sx={style.editAddbutton}>Add</Button>
          <img src={divider} style={{marginLeft:'20px', marginRight:'0px'}}/>
          <Box sx={style.bellBox}>
            <img src={icbell}/>
            <Box sx={style.bellBoxBadge}>1</Box>
          </Box>
          <Box sx={{border:'2px solid green',ml:'7px'}}>
            <Box onClick={handleLogout} sx={{display:'flex',border:'2px solid black',position:'relative', alignItems:'center'}}>
            <img src={avatar} style={style.avatarImg}/>
            <img src={status} style={style.statusImg}/>
            <Box>
            <img src={avatarArrow} style={{marginLeft:'10px'}} />
            <Box sx={{position:'absolute', zIndex:'2',left:'-5px', bottom:'-30px'}}>
               {logoutOpen&& <ProfilePopUp/>}
            </Box>
            </Box>
            </Box>
          </Box>

        </Box>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar