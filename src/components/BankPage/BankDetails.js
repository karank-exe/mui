import React,{useState} from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import Paper from '@mui/material/Paper'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack'
import Switchcustom from '../Switch/Switch'
import useTable from '../control/BankDetailsTable'
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import stack from '../image/stack.png'
import filterIcon from '../image/filterButtonIcon.png'
import {styles} from './BankDetailsStyles'
import { Laptopstyles } from './BankDetailsLaptopStyles';
import { TableRow, TableBody, TableCell } from '@mui/material'
import {createTheme,ThemeProvider,useTheme} from '@mui/material/styles'
const style = styles()
console.log(style)

const overview=[
    {
        text:'Analytics',
    },
    {
        text:'Banks',
    },
    {
        text:'Panel',
    },
    {
        text:'Roles',
    },
]
const usage=[
    {
        text:'Withdraw',
    },
    {
        text:'Deposit',
    },
    {
        text:'Credit/Loans',
    },
    {
        text:'Expense',
    },
    {
        text:'Bank Transfer',
    },
    {
        text:'Settle',
    },
]
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
  
              <ListItemText primary={data.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
//----------------custom Theme for search field-------------------//
const customTheme=(outerTheme)=>
createTheme({
    palette: {
        mode: outerTheme.palette.mode,
      },
      components:{
        MuiTextField: {
            styleOverrides: {
              root: {
                '--TextField-brandBorderColor': '#919EAB33',
                '--TextField-brandBorderHoverColor': '#919EAB33',
                '--TextField-brandBorderFocusedColor': '#919EAB33',
                '& label.Mui-focused': {
                  color: '#637381' , //'var(--TextField-brandBorderFocusedColor)'
                },
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              notchedOutline: {
                borderColor: 'var(--TextField-brandBorderColor)',
              },
              root: {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
            },
          },
      },
});

//-------------Time------------------------------//
  const formatTime = () => {
    const date = new Date();
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };
//---------------Time----------------------------//
//---------------Date---------------------------//
const getFormattedDate = () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
  
    return `${day} ${month} ${year}`;
  };
//--------------Date----------------------//
  
const mergedTime=()=>{
    const date= getFormattedDate()
    const time= formatTime()
    const mergedDateAndTime=`${date}-${time}`
    return mergedDateAndTime;
}

function createData(transactionAmount, date, utrNumber, panel, User) {
    return {transactionAmount, date, utrNumber, panel, User };
}
const headCells=[
    {id:'transactionAmount', label:'Transaction Amount'},
    {id:'date', label:'Date'},
    {id:'utrNumber', label:'UTR Number'},
    {id:'panel', label:'Panel'},
    {id:'User', label:'User'},
]

const recordsData=[
createData('40000',mergedTime(),5412, 'panel 1', 'suraj2241'),
createData('30000',mergedTime(),9412, 'panel 2', 'rakesh678'),
createData('25000',mergedTime(),7452, 'panel 1', 'kalpu765'),
createData('20000',mergedTime(),9574, 'panel 2', 'kevin246'),
createData('10000',mergedTime(),6214, 'panel 4', 'harsh567'),
createData('40000',mergedTime(),5412, 'panel 1', 'suraj2241'),
createData('30000',mergedTime(),9412, 'panel 2', 'rakesh678'),
createData('25000',mergedTime(),7452, 'panel 1', 'kalpu765'),
createData('20000',mergedTime(),9574, 'panel 2', 'kevin246'),
createData('10000',mergedTime(),6214, 'panel 4', 'harsh567'),
]

const BankDetails = ({selectedUser}) => {
    const isLaptopScreen = useMediaQuery('(max-width: 1250px)')
    const style = isLaptopScreen? Laptopstyles(): styles()
    console.log("bankdetail",style)
    const [records, setRecords] = useState(recordsData)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [option, setOption]= useState('Withdraw')
    const [filterOpen, setFilterOpen]= useState(false)
    
    const outerTheme = useTheme()
    const {
      TblContainer,
      TblHead,
      TblPagination,
      recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFn);
  const handleOption=(optionName)=>{
    setOption(optionName)
  }
  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
        fn: items => {
            if (target.value === "")
                return items;
            else
                return items.filter(x => x.transactionAmount.includes(target.value))
        }
    })
}
const handleFilter =()=>{
    setFilterOpen(!filterOpen)
}
  return (
   <Box>
    <Grid sx={{background:'white',}}container spacing={1}>
        <Grid item md={7}>  
            <Box sx={{borderRadius:4,boxShadow:3,justifyContent:'space-between',p:2}}>
            <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center',padding:'5px',border:'2px solid purple'}}>
                <Typography sx={{//styleName: Desktop/H6;
                    fontFamily: 'Public Sans',
                    fontSize: '20px',
                    fontWeight: '700',
                    lineHeight: '28px',
                    letterSpacing: '0px',
                    textAlign: 'left',
}}>Basic Info</Typography>
                <Box sx={{display:'flex',alignItems:'center'}}>
                    <Button variant='contained'sx={style.editDetailsButton}>Edit Details</Button>
                    <Switchcustom checked={true} text='Status'/>
                </Box>
            </Box>
            <Box sx={{display:'flex', justifyContent:'space-between',mt:'10px'}}>
               <Box sx={{width:'50%',display:'flex',justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', flexDirection:'column',width:'40%',}}>
                        <Typography sx={style.infoText}>Acc Holder Name:</Typography>
                        <Typography sx={style.infoText}>IFSC Code:</Typography>
                        <Typography sx={style.infoText}>Account Type:</Typography>
                        <Typography sx={style.infoText}>Aadhar Card:</Typography>
                        <Typography sx={style.infoText}>Atm Front:</Typography>
                        <Typography sx={style.infoText}>Cheque:</Typography>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'column',width:'40%'}}>
                        <Typography sx={style.infoText}>{selectedUser.accountholdername}</Typography>
                        <Typography sx={style.infoText}>HDFC0000550</Typography>
                        <Typography sx={style.infoText}>{selectedUser.accounttype}</Typography>
                        <Typography sx={style.infoText}>aadharcard.jpg</Typography>
                        <Typography sx={style.infoText}>atmfront.jpg</Typography>
                        <Typography sx={style.infoText}>cheque.jpg</Typography>
                    </Box>
                </Box>
         
                <Box sx={{width:'40%',display:'flex',justifyContent:'space-between'}}>
                <Box sx={{display:'flex', flexDirection:'column',width:'40%'}}>
                        <Typography sx={style.infoText}>Contact No.:</Typography>
                        <Typography sx={style.infoText}>Bank Name:</Typography>
                        <Typography sx={style.infoText}>Account No.:</Typography>
                        <Typography sx={style.infoText}>Pan Card:</Typography>
                        <Typography sx={style.infoText}>Atm Back:</Typography>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'column',width:'40%'}}>
                        <Typography sx={style.infoText}>9888888888</Typography>
                        <Typography sx={style.infoText}>{selectedUser.bankname}</Typography>
                        <Typography sx={style.infoText}>7456987455</Typography>
                        <Typography sx={style.infoText}>pancard.jpg</Typography>
                        <Typography sx={style.infoText}>atmback.jpg</Typography>
                    </Box>

                </Box>
                </Box>
            </Box>
        </Grid>
        <Grid item md={5}>
            <Box sx={style.gridboxtwo}>
                <Button variant='contained' sx={style.withdrawalButton}>Withdrawal</Button>
                <Box sx={{display:'flex',justifyContent:'space-between', border:'2px solid red', transform:'translateY(50%)'}}>
                    <Box>
                        <Typography sx={style.gridboxtwoRupeesText}>Rs 60,000</Typography>
                        <Typography sx={style.gridboxtwoCurrentBalanceText}>Current Balance</Typography>
                    </Box>
                    <img src={stack}/>
                </Box>

            </Box>
        </Grid>
    </Grid>
    <Paper sx={{borderRadius:'16px',paddingTop:'10px',marginTop:'10px'}}>
      <Stack direction="row"alignItems='center' spacing={2} sx={{height:'30px',marginLeft:'10px'}}>
        <Typography sx={option==='Withdraw'?style.tableHeadActiveText:style.tableHeadText} onClick={()=>handleOption('Withdraw')}>Withdraw</Typography>
        <Typography sx={option==='Deposit'?style.tableHeadActiveText:style.tableHeadText} onClick={()=>handleOption('Deposit')} >Deposit</Typography>
        <Typography sx={option==='Credit/Loan'?style.tableHeadActiveText:style.tableHeadText} onClick={()=>handleOption('Credit/Loan')}>Credit/Loan</Typography>
        <Typography sx={option==='Expense'?style.tableHeadActiveText:style.tableHeadText} onClick={()=>handleOption('Expense')}>Expense</Typography>  
        <Typography sx={option==='Bank Transfer'?style.tableHeadActiveText:style.tableHeadText} onClick={()=>handleOption('Bank Transfer')}>Bank Transfer</Typography>
      </Stack>
      <Toolbar>
      <ThemeProvider theme={customTheme(outerTheme)} >
        {/* custom styling for search field */}
      <TextField variant='outlined' placeholder='Search...' sx={{width:'400px',height:'45px', mt:'10px'}} size='small' onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon fontSize='large' />
              </InputAdornment>
            ),
            inputProps: {
              style: {
                fontFamily: 'Public Sans',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '22px',
                letterSpacing: '0px',
                textAlign: 'left',
                color: 'black', // Color of the input text
              },
            },
          }}
          InputLabelProps={{
            shrink: true,
            children: (
              <FormLabel
                component='label'
                sx={{
                  color: '#919EAB', // Color of the placeholder text
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '22px',
                  letterSpacing: '0px',
                  textAlign: 'left',
                }}
              >
                Search...
              </FormLabel>
            ),
          }}
      />
      </ThemeProvider>
      <Button sx={style.filterButton} variant='contained' endIcon={<img src={filterIcon}/>} onClick={handleFilter}>
        <Typography sx={style.filterButtonText}>Filters</Typography>
      </Button>
      </Toolbar>
    <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map((item,index) =>
                                (<TableRow key={index}>
                                    <TableCell sx={{width:50,textAlign:'center','&.MuiTableCell-root':{padding:'10px 0px 10px 5px'}}}><Typography sx={style.tableDataText}>{item.transactionAmount}</Typography></TableCell>
                                    <TableCell sx={{width:100,'&.MuiTableCell-root':{padding:'10px 0px 10px 5px'}}}>
                                    <Typography sx={style.DateText} >{item.date.split('-')[0]}</Typography>
                                    <Typography sx={style.TimeText} >{item.date.split('-')[1]}</Typography>
                                    </TableCell>
                                    <TableCell sx={{width:100,textAlign:'center','&.MuiTableCell-root':{padding:'10px 0px 10px 5px'}}}><Typography sx={style.tableDataText}>{item.utrNumber}</Typography></TableCell>
                                    <TableCell sx={{width:100,textAlign:'center','&.MuiTableCell-root':{padding:'10px 0px 10px 5px'}}}><Typography sx={style.tableDataText}>{item.panel}</Typography></TableCell>
                                    <TableCell sx={{width:500,textAlign:'left','&.MuiTableCell-root':{padding:'10px 0px 10px 5px'}}}><Typography sx={style.tableUserDataText}>{item.User}</Typography></TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination
                />
    </Paper>
    <Drawer
          variant="temporary"
          anchor='right'
          open={filterOpen}
          onClose={handleFilter}
        //   onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            // display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '240px' },
          }}
        >
          {drawer}
        </Drawer>

   </Box>
  )
}

export default BankDetails 