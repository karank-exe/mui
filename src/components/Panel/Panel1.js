import React,{useState} from 'react'
import Box from '@mui/material/Box'
import Typography  from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
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
import InputAdornment from "@mui/material/InputAdornment";
import AddIcon from "@mui/icons-material/Add";
import date from '../image/date.png'
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
const Panel1 = () => {
  const [option, setOption]= useState('Withdraw')
  const handleOption=(optionName)=>{
    setOption(optionName)
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
          <Box sx={{border:'2px solid green',display:'flex',flexDirection:'column',justifyContent:'space-between',width:'75%',height:'60%'}}>
            <Typography sx={{fontFamily:'Public Sans',fontSize:'18px',fontWeight:700,color:'#212B36'}}>Total Points</Typography>
            <Typography sx={{fontFamily:'Public Sans',fontSize:'28px',fontWeight:700,color:'#212B36'}}>4,20,00,000</Typography>
          </Box>
          <Box sx={{display:'flex',alignItems:'center',border:'2px solid black',width:'20%',height:'100%'}}>
            <img src={sparkline} style={{width:'100%'}}/>
          </Box>

        </Box>
         <Box sx={style.card}>
         <Box sx={{border:'2px solid green',display:'flex',flexDirection:'column',justifyContent:'space-between',width:'75%',height:'70%'}}>
            <Typography sx={{fontFamily:'Public Sans',fontSize:'14px',fontWeight:700,color:'#212B36'}}>Analytics 2</Typography>
            <Typography sx={{fontFamily:'Public Sans',fontSize:'28px',fontWeight:700,color:'#212B36'}}>48,951</Typography>
            <Box sx={{border:'2px solid black',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <img src={downcircle}/>
              <Typography sx={{fontFamily:'Public Sans',fontSize:'13px',fontWeight:600,color:'#212B36'}}>-2.4%</Typography>
              <Typography sx={{fontFamily:'Public Sans',fontSize:'13px',fontWeight:400,color:'#637381'}}>than last week</Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex',alignItems:'center',border:'2px solid black',width:'20%',height:'100%'}}>
            <img src={bluestroke} style={{width:'100%'}}/>
          </Box>
        </Box>
         <Box sx={style.card}>
         <Box sx={{border:'2px solid green',display:'flex',flexDirection:'column',justifyContent:'space-between',width:'75%',height:'70%'}}>
            <Typography sx={{fontFamily:'Public Sans',fontSize:'14px',fontWeight:700,color:'#212B36'}}>Analytics 2</Typography>
            <Typography sx={{fontFamily:'Public Sans',fontSize:'28px',fontWeight:700,color:'#212B36'}}>28,971</Typography>
            <Box sx={{border:'2px solid black',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <img src={upcircle}/>
              <Typography sx={{fontFamily:'Public Sans',fontSize:'13px',fontWeight:600,color:'#212B36'}}>+9.4%</Typography>
              <Typography sx={{fontFamily:'Public Sans',fontSize:'13px',fontWeight:400,color:'#637381'}}>than last week</Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex',alignItems:'center',border:'2px solid black',width:'20%',height:'100%'}}>
            <img src={yellowstroke} style={{width:'100%'}}/>
          </Box>
        </Box>
      </Box>
      <Paper sx={{borderRadius:'16px',paddingTop:'10px',marginTop:'10px'}}>
      <Stack direction="row"alignItems='center' spacing={2} sx={{height:'30px',marginLeft:'10px'}}>
        <Typography sx={option==='Withdraw'?style.tableHeadActiveText:style.tableHeadText} onClick={()=>handleOption('Withdraw')}>Withdraw</Typography>
        <Typography sx={option==='Deposit'?style.tableHeadActiveText:style.tableHeadText} onClick={()=>handleOption('Deposit')} >Deposit</Typography>
      </Stack>
      <ThemeProvider theme={customTheme1()} >  
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="End Date"   
           slots={{
            openPickerIcon:AddIcon
           }}
           sx={{width:'260px'}}
          />
        </DemoContainer>
      </LocalizationProvider>
      </ThemeProvider>
      </Paper>
    </Box>
   </div>
  )
}

export default Panel1