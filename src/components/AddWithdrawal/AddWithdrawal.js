import React,{useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import close from '../image/close.png'
import {createTheme,ThemeProvider,useTheme} from '@mui/material/styles'
import { styles } from './AddWithdrawalStyles'
import AddBankWithdrawalPage from './AddBankWithdrawalPage'
import AddPanelWithdrawalPage from './AddPanelWithdrawalPage'
const style= styles()
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

const AddWithdrawal = ({handleAddWithdrawClose}) => {
    const [transactionAmount, setTransactionAmount]=useState()
    const [utr, setUtr]=useState()
    const [username, setUserName]=useState()
    const [dateTime, setDateTime]=useState()
    const [bankSelectedValue, setBankSelectedValue] = useState('');
    const [panelSelectedValue, setPanelSelectedValue] = useState('');
    // console.log(franchise,password)
    const outerTheme = useTheme()
  return (
    <div>
    <Box sx={{border:'2px solid black', background:'white',width:'670px',height:'350px',borderRadius:'16px',boxShadow:3,padding:'5px 5px 0 5px'}}>
        <Box sx={{border:'2px solid red',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Typography sx={style.title}>Add Withdraw</Typography>
            <img src={close} style={{cursor:'pointer'}} onClick={handleAddWithdrawClose}/>
        </Box>
        <Box sx={{border:'2px solid orange',mt:'10px',height:'85%',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap: theme => theme.spacing(1) }}>
        <ThemeProvider theme={customTheme(outerTheme)} >
        <TextField variant='outlined' value={transactionAmount} InputLabelProps={{ style:style.textFieldLabel}} label='Transaction Amount' sx={{width:'48%', mt:'10px'}} onChange={(e)=>setTransactionAmount(e.target.value)}/>
        <TextField variant='outlined' value={utr}  InputLabelProps={{ style:style.textFieldLabel}} label='UTR No.' sx={{width:'48%', mt:'10px'}} onChange={(e)=>setUtr(e.target.value)}/>
        <TextField variant='outlined' value={username}  InputLabelProps={{ style:style.textFieldLabel}} label='Username' sx={{width:'48%', mt:'10px'}} onChange={(e)=>setUserName(e.target.value)}/>
        <TextField variant='outlined' value={dateTime} InputLabelProps={{ style:style.textFieldLabel}} label='Date and Time' sx={{width:'48%', mt:'10px'}} onChange={(e)=>setDateTime(e.target.value)}/>
        </ThemeProvider>
        <AddBankWithdrawalPage bankSelectedValue={bankSelectedValue} setBankSelectedValue={setBankSelectedValue} />  
        <AddPanelWithdrawalPage panelSelectedValue={panelSelectedValue} setPanelSelectedValue={setPanelSelectedValue} />
        <Divider style={{width:'100%'}}/>
        <Button variant='contained' disabled={!(transactionAmount&&utr&&username&&dateTime&&bankSelectedValue&&panelSelectedValue)} sx={style.addTransactionButton}>Add Transaction</Button>
        </Box>

    </Box>
    </div>
  )
}

export default AddWithdrawal