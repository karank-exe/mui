import React,{useState} from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper'
import {createTheme,ThemeProvider,useTheme} from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import upCircle from '../image/upcircle.png'
import downCircle from '../image/downCircle.png'
import filterIcon from '../image/filterButtonIcon.png'
import { styles } from './DepositPageStyles';
import { TableRow, TableBody, TableCell } from '@mui/material'
import useTable from '../control/DepositTable'
import FilterDrawer from '../FilterDrawer/FilterDrawer'
import AddDeposit from '../AddDeposit/AddDeposit'
const style = styles();

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

const Deposit = () => {
    const[records,setRecords]=useState(recordsData)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [filterOpen, setFilterOpen]= useState(false)
    const [addDepositOpen, setAddDepositOpen]= useState(false);
    const [value, setValue] = useState([40, 160]);
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

    const handleSliderChange = (event, newValue) => {
      let [newFirstValue, newSecondValue] = newValue;
  
      if (newFirstValue >= 40) {
        newFirstValue = 40;
      }
  
      if (newSecondValue <= 160) {
        newSecondValue = 160  ;
      }
      setValue([newFirstValue, newSecondValue]);
    };
    const handleAddDepositOpen=()=>{
        setAddDepositOpen(true)
    }
    const handleAddDepositClose=()=>{
        setAddDepositOpen(false)
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
                <Typography sx={style.rateText}>₹ 35,000</Typography>
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
                <Typography sx={style.rateGreenTextGradient}>₹ 40,651</Typography>
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
                <Typography sx={style.rateGreenTextGradient}>₹ 28,971</Typography>
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
                <Typography sx={style.rateRedTextGradient}>₹ 28,971</Typography>
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
                <Typography sx={style.rateText}>₹ 545</Typography>
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
        <Typography sx={style.depositText}>Deposit</Typography>

        <Box sx={{border:'2px solid green',display:'flex', alignItems:'center',position:'relative'}}>
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
                    fontSize: '16px',
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
      <Button sx={style.addDepositButton} variant='contained' startIcon={<AddIcon style={{color:'black'}}/>} onClick={handleAddDepositOpen}>
          <Typography sx={style.addDepositButtonText}>Add Deposit</Typography>
      </Button>
      <Box sx={{position:'absolute', top:'53px',right:'0px', zIndex:'2'}}>
         {addDepositOpen&&<AddDeposit handleAddDepositClose={handleAddDepositClose}/>}  
      </Box>
    </Box>
        </Box>

     <Box sx={{marginTop:'10px'}}>
    <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map((item,index) =>
                            (<TableRow key={index}>
                                    <TableCell sx={{width:100,textAlign:'center'}}><Typography sx={style.tableDataText} >{item.transactionAmount}</Typography></TableCell>
                                    <TableCell sx={{width:100, textAlign:'center'}}>
                                    <Typography sx={style.DateText} >{item.date.split('-')[0]}</Typography>
                                    <Typography sx={style.TimeText} >{item.date.split('-')[1]}</Typography>
                                    </TableCell>
                                    <TableCell sx={{width:100, textAlign:'center'}}><Typography sx={style.tableDataText} >{item.utrNumber}</Typography></TableCell>
                                    <TableCell sx={{width:100, textAlign:'center'}}><Typography sx={style.tableDataText} >{item.panel}</Typography></TableCell>
                                    <TableCell sx={{width:100, textAlign:'center'}}><Typography sx={style.tableDataText} >{item.bankAccount}</Typography></TableCell>
                                    <TableCell sx={{width:300, textAlign:'center'}}>
                                        <Box sx={style.userEditButtonBox}>
                                       <Typography sx={style.tableDataText} >{item.user}</Typography>
                                        <Button variant='contained' sx={style.userEditButton}>
                                            <Typography sx={style.userEditButtonText}>Edit</Typography>
                                        </Button>
                                        </Box>
                                    </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination
                />
        </Box>
    </Paper>
    <FilterDrawer filterOpen={filterOpen} handleFilter={handleFilter}/>
    {/* <AddWithdrawal/> */}
    </>
  )
}

export default Deposit