import React,{useState} from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import upCircle from '../components/image/upcircle.png'
import downCircle from '../components/image/downCircle.png'
import filterIcon from '../components/image/filterButtonIcon.png'
import { styles } from './WithdrawPageStyles';
import { TableRow, TableBody, TableCell } from '@mui/material'
import {createTheme,ThemeProvider,useTheme} from '@mui/material/styles'
import useTable from '../components/control/WithdrawTable'
const style = styles();
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
//----------------Drawer------------------------------------------//
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

function createData(transactionAmount, date, utrNumber, panel,bankAccount,user) {
    return {transactionAmount, date, utrNumber, panel,bankAccount,user };
}

const headCells=[
    {id:'transactionAmount', label:'Transcation Amount'},
    {id:'date', label:'Date'},
    {id:'utrNumber', label:'UTR Number'},
    {id:'bankAccount', label:'Bank Account'},
    {id:'panel', label:'Panel'},
    {id:'user', label:'User'},
]
const recordsData=[
    createData('40,000',mergedTime(),5412,'Shivam-IDFC','Panel 1','suraj2241'),
    createData('30,000',mergedTime(),9412,'Shivam-Paytm','Panel 2','rakesh678'),
    createData('25,000',mergedTime(),7452,'Shivam-IDFC','Panel 1','kalpu765'),
    createData('20,000',mergedTime(),9574,'Shivam-Paytm','Panel 2','kevin246'),
    createData('10,000',mergedTime(),6214,'Shivam-IDFC','Panel 4','harsh567'),
    createData('40,000',mergedTime(),5412,'Shivam-IDFC','Panel 1','suraj2241'),
    createData('30,000',mergedTime(),9412,'Shivam-Paytm','Panel 2','rakesh678'),
    createData('25,000',mergedTime(),7452,'Shivam-IDFC','Panel 1','kalpu765'),
    createData('20,000',mergedTime(),9574,'Shivam-Paytm','Panel 2','kevin246'),
    createData('10,000',mergedTime(),6214,'Shivam-IDFC','Panel 4','harsh567'),
]
console.log("recordData",recordsData)
const WithdrawPage = () => {
    const[records,setRecords]=useState(recordsData)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [filterOpen, setFilterOpen]= useState(false)
    const outerTheme = useTheme()

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
                    return items.filter(x => x.transactionAmount.includes(target.value))
            }
        })
    }
    const handleFilter =()=>{
        setFilterOpen(!filterOpen)
    }

  return (
    <>
    <Box sx={style.cardContainer}>
        <Box sx={style.card}>
            <Box sx={style.titleBox}>
                <Typography sx={style.text}>Withdrawal</Typography>
                <Box sx={{display:'flex',alignItems:'center'}}>
                <Typography sx={style.todayText}>Today</Typography>
                <KeyboardArrowDownIcon style={{color:'#00B8D9'}}/>
                </Box>
            </Box>
            <Box sx={style.rateBox}>
                <CurrencyRupeeIcon />
                <Typography sx={style.rateText}>35,000</Typography>
            </Box>
            <Box sx={style.descriptionBox}>
                <img src={upCircle}/>
                <Typography sx={style.percentageText}>+39.4%</Typography>
                <Typography sx={style.lastWeekText}>than last week</Typography>
            </Box>
        </Box>

        <Box sx={style.card}>
            <Box sx={style.titleBox}>
                <Typography sx={style.text}>Deposits</Typography>
                <Box sx={{display:'flex',alignItems:'center'}}>
                <Typography sx={style.todayText}>Today</Typography>
                <KeyboardArrowDownIcon style={{color:'#00B8D9'}}/>
                </Box>
            </Box>
            <Box sx={style.rateBox}>
                <CurrencyRupeeIcon />
                <Typography sx={style.rateGreenTextGradient}>40,651</Typography>
            </Box>
            <Box sx={style.descriptionBox}>
                <img src={upCircle}/>
                <Typography sx={style.percentageText}>+2.4%</Typography>
                <Typography sx={style.lastWeekText}>than last week</Typography>
            </Box>
        </Box>

        <Box sx={style.card}>
            <Box sx={style.loanOrCreditTitleBox}>
                <Typography sx={style.text}>Loans Borrowed</Typography>
                <Box sx={{display:'flex',alignItems:'center'}}>
                <Typography sx={style.todayText}>Today</Typography>
                <KeyboardArrowDownIcon style={{color:'#00B8D9'}}/>
                </Box>
            </Box>
            <Box sx={style.rateBox}>
                <CurrencyRupeeIcon />
                <Typography sx={style.rateGreenTextGradient}>28,971</Typography>
            </Box>
            <Box sx={style.descriptionBox}>
                <img src={downCircle}/>
                <Typography sx={style.percentageText}>-9.4%</Typography>
                <Typography sx={style.lastWeekText}>than last week</Typography>
            </Box>
        </Box>

        <Box sx={style.card}>
            <Box sx={style.loanOrCreditTitleBox}>
                <Typography sx={style.text}>Credits Given</Typography>
                <Box sx={{display:'flex',alignItems:'center'}}>
                <Typography sx={style.todayText}>Today</Typography>
                <KeyboardArrowDownIcon style={{color:'#00B8D9'}}/>
                </Box>
            </Box>
            <Box sx={style.rateBox}>
                <CurrencyRupeeIcon />
                <Typography sx={style.rateRedTextGradient}>28,971</Typography>
            </Box>
            <Box sx={style.descriptionBox}>
                <img src={downCircle}/>
                <Typography sx={style.percentageText}>-9.4%</Typography>
                <Typography sx={style.lastWeekText}>than last week</Typography>
            </Box>
        </Box>

        <Box sx={style.card}>
            <Box sx={style.titleBox}>
                <Typography sx={style.text}>Expenses</Typography>
                <Box sx={{display:'flex',alignItems:'center'}}>
                <Typography sx={style.todayText}>Today</Typography>
                <KeyboardArrowDownIcon style={{color:'#00B8D9'}}/>
                </Box>
            </Box>
            <Box sx={style.rateBox}>
                <CurrencyRupeeIcon />
                <Typography sx={style.rateText}>545</Typography>
            </Box>
            <Box sx={style.descriptionBox}>
                <img src={downCircle}/>
                <Typography sx={style.percentageText}>-9.4%</Typography>
                <Typography sx={style.lastWeekText}>than last week</Typography>
            </Box>
        </Box>

    </Box>
    <Paper sx={{marginTop:'20px', borderRadius:'16px', paddingTop:3}}>
        <Box sx={{display:'flex', alignItems:'center',padding:'0px 8px 0px 8px',justifyContent:'space-between'}}>
        <Typography sx={style.withdrawText}>Withdraw</Typography>

        <Box sx={{border:'2px solid green',display:'flex', alignItems:'center'}}>
        <ThemeProvider theme={customTheme(outerTheme)} >
        {/* custom styling for search field */}
      <TextField variant='outlined' placeholder='Search...' sx={{width:'250px',height:'45px', mt:'10px'}} size='small' onChange={handleSearch}
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
      <Button sx={style.addWithdrawButton} variant='contained' startIcon={<AddIcon style={{color:'black'}}/>}>
      <Typography sx={style.addWithdrawButtonText}>Add Withdrawal</Typography>
      </Button>
    </Box>
        </Box>

     <Box sx={{marginTop:'10px'}}>
    <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map((item,index) =>
                            (<TableRow key={index}>
                                    <TableCell sx={{width:100}}><Typography >{item.transactionAmount}</Typography></TableCell>
                                    <TableCell sx={{width:100}}><Typography >{item.date}</Typography></TableCell>
                                    <TableCell sx={{width:100}}><Typography >{item.utrNumber}</Typography></TableCell>
                                    <TableCell sx={{width:100}}><Typography >{item.panel}</Typography></TableCell>
                                    <TableCell sx={{width:100}}><Typography >{item.bankAccount}</Typography></TableCell>
                                    <TableCell sx={{width:100}}><Typography >{item.user}</Typography></TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination
                />
        </Box>
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
    </>
  )
}

export default WithdrawPage