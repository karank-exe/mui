import React,{useState} from 'react'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import InputAdornment from '@mui/material/InputAdornment';
import Modal from '@mui/material/Modal'
import Paper from '@mui/material/Paper'
import {createTheme,ThemeProvider,useTheme} from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import upCircle from '../image/upcircle.png'
import downCircle from '../image/downCircle.png'
import filterIcon from '../image/filterButtonIcon.png'
import { styles } from './CreditLoanPageStyles';
import { Laptopstyles } from './CreditLoanLaptopPageStyle';
import { TableRow, TableBody, TableCell } from '@mui/material'
import useTable from '../control/CreditLoanTable'
import FilterDrawer from '../FilterDrawer/FilterDrawer'
// import AddDeposit from '../AddDeposit/AddDeposit'
import AddCreditLoan from '../AddCreditLoan/AddCreditLoan'

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

function createData(transactionAmount, creditloan, date, utrNumber,bankAccount) {
    return {transactionAmount, creditloan, date, utrNumber,bankAccount };
}

const headCells=[
    {id:'transactionAmount', label:'Transcation Amount'},
    {id:'creditloan', label:'Credit/Loan'},
    {id:'date', label:'Date'},
    {id:'utrNumber', label:'UTR Number'},
    {id:'bankAccount', label:'Bank Account'},
]
const recordsData=[
    createData('-40,000','Credit Given',mergedTime(),5412,'Shivam-IDFC'),
    createData('+30,000','Loan Borrowed',mergedTime(),9412,'Shivam-Paytm'),
    createData('-25,000','Credit Given',mergedTime(),7452,'Shivam-IDFC'),
    createData('+20,000','Loan Borrowed',mergedTime(),9574,'Shivam-Paytm'),
    createData('-10,000','Credit Given',mergedTime(),6214,'Shivam-IDFC'),
    createData('+40,000','Loan Borrowed',mergedTime(),5412,'Shivam-IDFC'),
    createData('-30,000','Credit Given',mergedTime(),9412,'Shivam-Paytm'),
    createData('+25,000','Loan Borrowed',mergedTime(),7452,'Shivam-IDFC'),
    createData('-20,000','Credit Given',mergedTime(),9574,'Shivam-Paytm'),
    createData('+10,000','Loan Borrowed',mergedTime(),6214,'Shivam-IDFC'),
]
console.log("recordData",recordsData)

const CreditLoan = () => {
    const isLaptopScreen = useMediaQuery('(max-width: 1250px)')
    const style = isLaptopScreen? Laptopstyles(): styles()
    const[records,setRecords]=useState(recordsData)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [filterOpen, setFilterOpen]= useState(false)
    const [addCreditLoanOpen, setAddCreditLoanOpen]= useState(false);
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
    const handleAddCreditLoanOpen=()=>{
        setAddCreditLoanOpen(true)
    }
    const handleAddCreditLoanClose=()=>{
        setAddCreditLoanOpen(false)
    }

  return (
    <>
    <Box sx={style.cardContainer}>
        <Box sx={style.card}>
            <Box sx={style.titleBox}>
                <Typography sx={style.text}>Withdrawal</Typography>
                <Box sx={{display:'flex',alignItems:'center',marginLeft:'20px'}}>
                <Typography sx={style.todayText}>Today</Typography>
                <KeyboardArrowDownIcon style={{color:'#00B8D9',height:'20px',width:'20px'}}/>
                </Box>
            </Box>
            <Box sx={style.rateBox}>
                <Typography sx={style.rateText}>₹ 35,000</Typography>
            </Box>
            <Box sx={style.descriptionBox}>
                <img src={upCircle} style={{height:'20px',width:'20px'}}/>
                <Typography sx={style.percentageText}>+39.4%</Typography>
                <Typography sx={style.lastWeekText}>than last week</Typography>
            </Box>
        </Box>

        <Box sx={style.card}>
            <Box sx={style.titleBox}>
                <Typography sx={style.text}>Deposits</Typography>
                <Box sx={{display:'flex',alignItems:'center',marginLeft:'20px'}}>
                <Typography sx={style.todayText}>Today</Typography>
                <KeyboardArrowDownIcon style={{color:'#00B8D9',height:'20px',width:'20px'}}/>
                </Box>
            </Box>
            <Box sx={style.rateBox}>
                <Typography sx={style.rateGreenTextGradient}>₹ 40,651</Typography>
            </Box>
            <Box sx={style.descriptionBox}>
                <img src={upCircle} style={{height:'20px',width:'20px'}}/>
                <Typography sx={style.percentageText}>+2.4%</Typography>
                <Typography sx={style.lastWeekText}>than last week</Typography>
            </Box>
        </Box>

        <Box sx={style.card}>
            <Box sx={style.loanOrCreditTitleBox}>
                <Typography sx={style.text}>Loans Borrowed</Typography>
                <Box sx={{display:'flex',alignItems:'center',marginLeft:'9px'}}>
                <Typography sx={style.todayText}>Today</Typography>
                <KeyboardArrowDownIcon style={{color:'#00B8D9',height:'20px',width:'20px'}}/>
                </Box>
            </Box>
            <Box sx={style.rateBox}>
                <Typography sx={style.rateGreenTextGradient}>₹ 28,971</Typography>
            </Box>
            <Box sx={style.descriptionBox}>
                <img src={downCircle} style={{height:'20px',width:'20px'}}/>
                <Typography sx={style.percentageText}>-9.4%</Typography>
                <Typography sx={style.lastWeekText}>than last week</Typography>
            </Box>
        </Box>

        <Box sx={style.card}>
            <Box sx={style.loanOrCreditTitleBox}>
                <Typography sx={style.text}>Credits Given</Typography>
                <Box sx={{display:'flex',alignItems:'center',marginLeft:'20px'}}>
                <Typography sx={style.todayText}>Today</Typography>
                <KeyboardArrowDownIcon style={{color:'#00B8D9',height:'20px',width:'20px'}}/>
                </Box>
            </Box>
            <Box sx={style.rateBox}>
                <Typography sx={style.rateRedTextGradient}>₹ 28,971</Typography>
            </Box>
            <Box sx={style.descriptionBox}>
                <img src={downCircle} style={{height:'20px',width:'20px'}}/>
                <Typography sx={style.percentageText}>-9.4%</Typography>
                <Typography sx={style.lastWeekText}>than last week</Typography>
            </Box>
        </Box>

        <Box sx={style.card}>
            <Box sx={style.titleBox}>
                <Typography sx={style.text}>Expenses</Typography>
                <Box sx={{display:'flex',alignItems:'center',marginLeft:'20px'}}>
                <Typography sx={style.todayText}>Today</Typography>
                <KeyboardArrowDownIcon style={{color:'#00B8D9',height:'20px',width:'20px'}}/>
                </Box>
            </Box>
            <Box sx={style.rateBox}>
                <Typography sx={style.rateText}>₹ 545</Typography>
            </Box>
            <Box sx={style.descriptionBox}>
                <img src={downCircle} style={{height:'20px',width:'20px'}}/>
                <Typography sx={style.percentageText}>-9.4%</Typography>
                <Typography sx={style.lastWeekText}>than last week</Typography>
            </Box>
        </Box>

    </Box>
    <Paper sx={{marginTop:'20px', borderRadius:'16px', paddingTop:3}}>
        <Box sx={{display:'flex', alignItems:'center',padding:'0px 8px 0px 8px',justifyContent:'space-between'}}>
        <Typography sx={style.creditLoanText}>Credit/Loans</Typography>

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
      <Button sx={style.addCreditLoanButton} variant='contained' startIcon={<AddIcon style={{color:'black'}}/>} onClick={handleAddCreditLoanOpen}>
          <Typography sx={style.addCreditLoanButtonText}>Credit/Loans</Typography>
      </Button>
      <Modal
        open={addCreditLoanOpen}
        onClose={handleAddCreditLoanClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box onClose={handleAddCreditLoanClose}>
        <AddCreditLoan handleAddCreditLoanClose={handleAddCreditLoanClose}/>
        </Box>
      </Modal>
    </Box>
        </Box>

     <Box sx={{marginTop:'10px'}}>
    <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map((item,index) =>
                            (<TableRow key={index}>
                                    <TableCell sx={{minWidth:100,width:200,textAlign:'center','&.MuiTableCell-root':{padding:0}}}>
                                    <Typography sx={item.transactionAmount.startsWith('+')?style.transactionAmountGreenText:style.transactionAmountRedText}>
                                    {item.transactionAmount}
                                    </Typography>
                                    </TableCell>
                                    <TableCell sx={{minWidth:100,width:200,textAlign:'center','&.MuiTableCell-root':{padding:0}}}>
                                      <Box sx={item.creditloan==='Credit Given'?style.creditGivenBox:style.loanBorrowedBox}>
                                        <Typography sx={item.creditloan==='Credit Given'?style.creditGivenText:style.loanBorrowedText} >
                                          {item.creditloan}
                                        </Typography>
                                        </Box> 
                                    </TableCell>
                                    <TableCell sx={{minWidth:100,width:200, textAlign:'center','&.MuiTableCell-root':{padding:0}}}>
                                    <Typography sx={style.DateText} >{item.date.split('-')[0]}</Typography>
                                    <Typography sx={style.TimeText} >{item.date.split('-')[1]}</Typography>
                                    </TableCell>
                                    <TableCell sx={{minWidth:100,width:200, textAlign:'center','&.MuiTableCell-root':{padding:0}}}><Typography sx={style.tableDataText} >{item.utrNumber}</Typography></TableCell>
                                    <TableCell sx={{minWidth:100,width:800, textAlign:'center','&.MuiTableCell-root':{padding:'10px 0px 10px 7px'}}}>
                                        <Box sx={style.bankAccountButtonBox}>
                                       <Typography sx={style.tableDataText} >{item.bankAccount}</Typography>
                                        <Button variant='contained' sx={style.bankAccountEditButton}>
                                            <Typography sx={style.bankAccountEditButtonText}>Edit</Typography>
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

export default CreditLoan