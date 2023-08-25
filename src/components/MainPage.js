import * as React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
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
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'
import{ styles} from './MainPageStyle'
import analytics from '../components/image/analytics.png'
import banks from '../components/image/bank.png'
import panel from '../components/image/panel.png'
import user from '../components/image/user.png'
import usageimg from '../components/image/usageimg.png'
import Navbar from './Navbar/Navbar';
import BanksPage from './BankPage/BanksPage';
import Analytics from './Analytics/Analytics';
import Panel from './Panel/Panel';
import WithdrawPage from './WithdrawPage/WithdrawPage';
import Deposit from './Deposit/Deposit';
import CreditLoan from './CreditLoan/CreditLoan';
import Expense from './Expense/Expense';
import BankTransfer from './BankTransfer/BankTransfer';
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
        subOptions:[
          {text:'Panel1'},
          {text:'Panel2'},
          {text:'Panel3'},
          {text:'Panel4'}
        ]
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
        text:'BankTransfer',
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
    const [open, setOpen] = React.useState(false)

    function handleClick(e) {
      e.preventDefault()
      setOpen(!open)
      console.log('handle click',open)
    }


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
            data.text!=='Panel'?
            (<ListItem key={data.text} disablePadding sx={{border:'2px solid green'}}>
            <ListItemButton  to={`/${data.text.toLowerCase()}`}>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <img src={data.image}/>
              </ListItemIcon>
              <ListItemText primary={data.text} sx={style.listItemText} />
            </ListItemButton>
          </ListItem>):(
            <div key={data.text}>
            <ListItem key={`${data.text}-${index}`} disablePadding sx={{border:'2px solid green'}}>
            <ListItemButton onClick={handleClick} to={`/${data.text.toLowerCase()}`}>
            <ListItemIcon>
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              <img src={data.image}/>
            </ListItemIcon>
            <ListItemText primary={data.text} sx={style.listItemText} />
          </ListItemButton>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
          <Divider/>
          <List>
          {data.subOptions.map((subOption,subIndex)=>(
            <ListItem key={`${subOption.text}-${subIndex}`}>
              <ListItemButton component={Link} to={`/panel/${subOption.text.toLowerCase()}`}>
              <ListItemText inset primary={subOption.text} />
              </ListItemButton>
            </ListItem>
          ))}
          </List>
          </Collapse>
          </div>
          ) 
          ))}
        </List>
        <Typography sx={style.usage}>USAGE</Typography>
        <List>
          {usage.map((data, index) => (
            <ListItem key={data.text} disablePadding>
              <ListItemButton  to={`/${data.text.toLowerCase()}`}>
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
          <Route path='/panel/:panelId' element={<Panel/>}/>
          <Route path='/withdraw' element={<WithdrawPage/>} />
          <Route path='/deposit' element={<Deposit/>} />
          <Route path='/credit/loans' element={<CreditLoan/>} />
          <Route path='/expense' element={<Expense/>} />
          <Route path='/banktransfer' element={<BankTransfer/>} />

        </Routes>
      </Box>
    </Box>
    </Router>
  )
}

export default MainPage