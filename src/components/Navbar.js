import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/MenuOutlined';
import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import appbar from'../components/image/appbar.png'
import Franchise from './Franchise';
import Switchcustom from './Switch';
import { styles } from './NavbarStyle';

const style = styles();
// const drawerWidth = 240;
const Navbar = ({drawerWidth}) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  return (
    <AppBar
    position="fixed"
    sx={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      ml: { sm: `${drawerWidth}px` },
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
          <Switchcustom checked={true} text={true}/>
          <Button variant='contained' sx={style.editAddbutton} >Edit</Button>
          <Button variant='contained' sx={style.editAddbutton}>Add</Button>

        </Box>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar