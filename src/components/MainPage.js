import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import{ styles} from './MainPageStyle'
import analytics from '../components/image/analytics.png'
import banks from '../components/image/bank.png'
import panel from '../components/image/panel.png'
import user from '../components/image/user.png'
import usageimg from '../components/image/usageimg.png'
import Navbar from './Navbar';
import BanksPage from './BanksPage';
import Analytics from './Analytics';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

// import { makeStyles } from '@mui/styles';
const drawerWidth = 240;
const style = styles();
console.log(style.ledger)

// const useStyles = makeStyles(theme => ({
//   pageContent: {
//       margin: theme.spacing(5),
//       padding: theme.spacing(3)
//   },
//   searchInput: {
//       width: '75%'
//   }
// }))


const overview=[
    {
        text:'Analytics',
        image: analytics,
    },
    {
        text:'Banks',
        image: banks,
    },
    {
        text:'Panel',
        image: panel,
    },
    {
        text:'Roles',
        image: user,
    },
]
const usage=[
    {
        text:'Withdraw',
        image:usageimg,

    },
    {
        text:'Deposit',
        image:usageimg,

    },
    {
        text:'Credit/Loans',
        image:usageimg,

    },
    {
        text:'Expense',
        image:usageimg,

    },
    {
        text:'Bank Transfer',
        image:usageimg,

    },
    {
        text:'Settle',
        image:usageimg,

    },
]

const MainPage = () => {
    // const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
 
    const drawer = (
      <div>
        <Toolbar >
            <Typography sx={style.ledger}>Ledgers</Typography>
        </Toolbar>
       
        <List sx={{display:'flex', flexDirection:'column',}}>
        <Typography sx={style.overview}>OVERVIEW</Typography>
          {overview.map((data, index) => (
            <ListItem key={data.text} disablePadding sx={{border:'2px solid green'}}>
              <ListItemButton  to={`/${data.text.toLowerCase()}`}>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  <img src={data.image}/>
                </ListItemIcon>
                <ListItemText primary={data.text} sx={style.listItemText} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Typography sx={style.usage}>USAGE</Typography>
        <List>
          {usage.map((data, index) => (
            <ListItem key={data.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  <img src={data.image}/>
                </ListItemIcon>
                <ListItemText primary={data.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    );
    
  return (
    <Router>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Navbar and sidebar starts */}
      <Navbar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}/>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* Navbar and sidebar end */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p:3, width: { sm: `calc(100% - ${drawerWidth}px)`}, border:'2px solid orange',mt:'68px' }}
      >
        {/* <Toolbar/> */}
        <Routes>
          <Route path='/banks' element={<BanksPage/>} />
          <Route path='/analytics' element={<Analytics/>} />
        </Routes>
      </Box>
    </Box>
    </Router>
  )
}

export default MainPage