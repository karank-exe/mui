import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/MenuOutlined';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import{ styles} from './NewBankPageStyle'
import analytics from '../components/image/analytics.png'
import banks from '../components/image/bank.png'
import panel from '../components/image/panel.png'
import user from '../components/image/user.png'
import usageimg from '../components/image/usageimg.png'
import appbar from'../components/image/appbar.png'
import AddIcon from '@mui/icons-material/Add';
import Search from '@mui/icons-material/Search';
import Navbar from './Navbar';
import { create } from '@mui/material/styles/createTransitions';
import useTable from './control/UseTable';
import Controls from './control/Controls';
import Switchcustom from './Switch';
// import { Paper, makeStyles, TableBody, TableRow, TableCell, InputAdornment } from '@material-ui/core';
import { Paper,TableBody,TableRow,TableCell,InputAdornment } from '@mui/material';
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

const headCells = [
    { id: 'accountholdername', label: 'Account Holder Name' },
    { id: 'bankname', label: 'Bank Name' },
    { id: 'accounttype', label: 'Account Type' },
    { id: 'currentbalance', label: 'Current Balance' },
    { id: 'status', label: 'Status',checked:'false', disableSorting: true},
    { id: 'usedfor', label: 'Used For'},

]
function createData(AccountHolderName, BankName, AccountType, CurrentBalance, Status,UsedFor) {
  return {AccountHolderName, BankName, AccountType, CurrentBalance, Status,UsedFor };
}
const recordsdata=[
createData('Rakesh Tamboli','IDFC','Savings',25000,true,'Withdrawal'),
createData('Rakesh Tamboli','Paytm','Savings',25000,true,'Deposit'),
createData('Rakesh Tamboli','IDFC','Savings',25000,true,'Withdrawal'),
createData('Shivam Sharma','Paytm','Savings',25000,true,'Withdrawal'),
createData('Shivam Sharma','Paytm','Savings',25000,true,'Deposit'),
createData('Shivam Sharma','Paytm','Savings',25000,true,'withdrawal'),
createData('Rakesh Tamboli','IDFC','Savings',25000,true,'Withdrawal'),
createData('Shivam Sharma','Paytm','Savings',25000,true,'Withdrawal'),
createData('Rakesh Tamboli','IDFC','Savings',25000,true,'Withdrawal'),
createData('Shivam Sharma','Paytm','Savings',25000,true,'Withdrawal'),
createData('Rakesh Tamboli','IDFC','Savings',25000,true,'Withdrawal'),
createData('Shivam Sharma','Paytm','Savings',25000,true,'Withdrawal'),
]

const NewBankPage = () => {
    // const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [records, setRecords] = React.useState(recordsdata)
    const [filterFn, setFilterFn] = React.useState({ fn: items => { return items; } })
    const {
      TblContainer,
      TblHead,
      TblPagination,
      recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFn);
  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
        fn: items => {
            if (target.value == "")
                return items;
            else
                return items.filter(x => x.AccountHolderName.toLowerCase().includes(target.value))
        }
    })
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
            <ListItem key={data.text} disablePadding sx={{border:'2px solid green'}}>
              <ListItemButton>
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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar drawerWidth={drawerWidth}/>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Paper >
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                    <Typography sx={style.BankTitle}>
                      Banks
                    </Typography>
                    <Box sx={{display:'flex',height:'40px'}}>
                    <Controls.Input
                        label="Search Employees"
                        // className={classes.searchInput}
                        InputProps={{
                          startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                        size='small'
                        />
                    <Button variant='contained' sx={style.AddBankButton}
                    startIcon={<AddIcon/>}
                    ><Typography sx={style.AddBankButtonText}>Add New Bank</Typography></Button>
                    </Box>
                </Toolbar>
        <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map((item,index) =>
                                (<TableRow key={index}>
                                    <TableCell sx={{width:200}}>{item.AccountHolderName}</TableCell>
                                    <TableCell sx={{width:200}}>{item.BankName}</TableCell>
                                    <TableCell sx={{width:200}}>{item.AccountType}</TableCell>
                                    <TableCell sx={{width:200}}>{item.CurrentBalance}</TableCell>
                                    <TableCell sx={{width:100, textAlign:'right', border:'2px solid red',p:0}}><Switchcustom checked={true}/></TableCell>
                                    <TableCell sx={{width:'400px'}}>{item.UsedFor}</TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination
                />
        </Paper>
      </Box>
    </Box>
  )
}

export default NewBankPage