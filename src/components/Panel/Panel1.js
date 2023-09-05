import React,{useState} from 'react'
import Box from '@mui/material/Box'
import Typography  from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import { styles } from './PanelPageStyles'
import sparkline from '../image/Sparkline.png'
import bluestroke from '../image/bluestroke.png'
import yellowstroke from '../image/yellowstroke.png'
import downcircle from '../image/downCircle.png'
import upcircle from '../image/upcircle.png'
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {createTheme,ThemeProvider,useTheme} from '@mui/material/styles'
import { TableRow, TableBody, TableCell } from '@mui/material'
import useTable from '../control/PanelTable'
import date from '../image/date.png'
import filterIcon from '../image/filterButtonIcon.png'
import './Panel.css'
const style =styles()

const customTheme1=()=>
createTheme({
    // palette: {
    //     mode: outerTheme.palette.mode,
    //   },
      components:{
        MuiTextField: {
            styleOverrides: {
              root: {
                '--TextField-brandBorderColor': '#919EAB33',
                '--TextField-brandBorderHoverColor': '#919EAB33',
                '--TextField-brandBorderFocusedColor': '#919EAB33',
                '& label.Mui-focused': {
                  color: '#919EAB' , //'var(--TextField-brandBorderFocusedColor)'
                },
                '& label.MuiFormLabel-root':{
                  color:'#919EAB',
                  fontFamily:'Public Sans',
                  fontSize:'14px',
                  fontWeight:400
                }
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
            '& .MuiOutlinedInput-input':{
              fontFamily:'Public Sans',
              fontWeight:400,
              fontSize:'14px',
              color:'#212B36'
            }
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

function createData(transactionAmount, date, utrNumber,user) {
  return {transactionAmount, date, utrNumber,user };
}

const headCells=[
  {id:'transactionAmount', label:'Transcation Amount'},
  {id:'date', label:'Date'},
  {id:'utrNumber', label:'UTR Number'},
  {id:'user', label:'User'},
]
const recordsData=[
  createData('40,000',mergedTime(),5412,'suraj2241'),
  createData('30,000',mergedTime(),9412,'rakesh678'),
  createData('25,000',mergedTime(),7452,'kalpu765'),
  createData('20,000',mergedTime(),9574,'kevin246'),
  createData('10,000',mergedTime(),6214,'harsh567'),
  createData('40,000',mergedTime(),5412,'suraj2241'),
  createData('30,000',mergedTime(),9412,'rakesh678'),
  createData('25,000',mergedTime(),7452,'kalpu765'),
  createData('20,000',mergedTime(),9574,'kevin246'),
  createData('10,000',mergedTime(),6214,'harsh567'),
]

const Panel1 = () => {
  const[records,setRecords]=useState(recordsData)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [option, setOption]= useState('Withdraw')
  const [startDate,setStartDate]=useState(null)
  const [endDate,setEndDate]=useState(null)
  console.log("start date and end date",startDate, endDate)
  const handleOption=(optionName)=>{
    setOption(optionName)
  }

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
const handleStartDate=(date)=>{
setStartDate(date)
}
const handleEndDate=(date)=>{
  setEndDate(date)
}
  return (
   <div>
    <Box>
      <Box sx={style.panelBox}>
        <Typography sx={{fontFamily:'Public Sans',fontSize:'24px',fontWeight:700,color:'#212B36'}}>Panel 1</Typography>
        <Button variant='contained' sx={style.settleButton}><Typography sx={style.settleButtonText}>Settle Points</Typography></Button>
      </Box>
      <Box sx={style.cardContainer}>
        <Box sx={style.card}>
          <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'75%',height:'50%'}}>
            <Typography sx={{fontFamily:'Public Sans',fontSize:'15px',fontWeight:700,color:'#212B36'}}>Total Points</Typography>
            <Typography sx={{fontFamily:'Public Sans',fontSize:'25px',fontWeight:700,color:'#212B36'}}>4,20,00,000</Typography>
          </Box>
          <Box sx={{display:'flex',alignItems:'center',width:'20%',height:'100%'}}>
            <img src={sparkline} style={{width:'100%'}}/>
          </Box>

        </Box>
         <Box sx={style.card}>
         <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',width:'75%',height:'65%'}}>
            <Typography sx={{fontFamily:'Public Sans',fontSize:'12px',fontWeight:600,color:'#212B36'}}>Analytics 2</Typography>
            <Typography sx={{fontFamily:'Public Sans',fontSize:'25px',fontWeight:700,color:'#212B36'}}>48,951</Typography>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <img src={downcircle}/>
              <Typography sx={{fontFamily:'Public Sans',fontSize:'12px',fontWeight:600,color:'#212B36'}}>-2.4%</Typography>
              <Typography sx={{fontFamily:'Public Sans',fontSize:'12px',fontWeight:400,color:'#637381'}}>than last week</Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex',alignItems:'center',width:'20%',height:'100%'}}>
            <img src={bluestroke} style={{width:'100%'}}/>
          </Box>
        </Box>
         <Box sx={style.card}>
         <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',width:'75%',height:'65%'}}>
            <Typography sx={{fontFamily:'Public Sans',fontSize:'12px',fontWeight:600,color:'#212B36'}}>Analytics 3</Typography>
            <Typography sx={{fontFamily:'Public Sans',fontSize:'25px',fontWeight:700,color:'#212B36'}}>28,971</Typography>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <img src={upcircle}/>
              <Typography sx={{fontFamily:'Public Sans',fontSize:'12px',fontWeight:600,color:'#212B36'}}>+9.4%</Typography>
              <Typography sx={{fontFamily:'Public Sans',fontSize:'12px',fontWeight:400,color:'#637381'}}>than last week</Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex',alignItems:'center',width:'20%',height:'100%'}}>
            <img src={yellowstroke} style={{width:'100%'}}/>
          </Box>
        </Box>
      </Box>
      <Paper sx={{borderRadius:'16px',marginTop:'10px'}}>
      <Stack direction="row"alignItems='center' spacing={2} sx={{height:'30px',paddingTop:'8px',marginLeft:'15px'}}>
        <Typography sx={option==='Withdraw'?style.tableHeadActiveText:style.tableHeadText} onClick={()=>handleOption('Withdraw')}>Withdraw</Typography>
        <Typography sx={option==='Deposit'?style.tableHeadActiveText:style.tableHeadText} onClick={()=>handleOption('Deposit')} >Deposit</Typography>
      </Stack>
      <Divider sx={{marginBottom:'10px'}}/>
      <Toolbar sx={{
                    '& .MuiStack-root':{
                      marginRight:'10px'
                     }
          }}>
      <ThemeProvider theme={customTheme1()} >  
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="Start Date"   
           value={startDate}
           sx={{width:'260px'}}
           onChange={handleStartDate}
          />
        </DemoContainer>
      </LocalizationProvider>
      </ThemeProvider>
      <ThemeProvider theme={customTheme1()} >  
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="End Date"   
          value={endDate}
           sx={{width:'260px'}}
           onChange={handleEndDate}
          />
        </DemoContainer>
      </LocalizationProvider>
      </ThemeProvider>
      <Button sx={style.filterButton} variant='contained' endIcon={<img src={filterIcon}/>}>
        <Typography sx={style.filterButtonText}>Filters</Typography>
      </Button>
      </Toolbar>
      <TblContainer>
      <TblHead />
      <TableBody>
          {
              recordsAfterPagingAndSorting().map((item,index) =>
              (<TableRow key={index}>
                      <TableCell sx={{minWidth:50,width:500,textAlign:'center'}}><Typography sx={style.tableDataText} >{item.transactionAmount}</Typography></TableCell>
                      <TableCell sx={{minWidth:50,width:400, textAlign:'center'}}>
                      <Typography sx={style.DateText} >{item.date.split('-')[0]}</Typography>
                      <Typography sx={style.TimeText} >{item.date.split('-')[1]}</Typography>
                      </TableCell>
                      <TableCell sx={{minWidth:50,width:400, textAlign:'center'}}><Typography sx={style.tableDataText} >{item.utrNumber}</Typography></TableCell>
                      <TableCell sx={{minWidth:100,width:1000, textAlign:'center'}}>
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
      </Paper>
    </Box>
   </div>
  )
}

export default Panel1