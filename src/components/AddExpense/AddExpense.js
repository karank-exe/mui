import React,{useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import close from '../image/close.png'
import {createTheme,ThemeProvider,useTheme} from '@mui/material/styles'
import { styles } from './AddExpenseStyles'
import AddBankExpensePage from './AddBankExpensePage'
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

const AddExpense = ({handleAddExpenseClose}) => {
    const [transactionAmount, setTransactionAmount]=useState()
    const [utr, setUtr]=useState()
    const [dateTime, setDateTime]=useState()
    const [reason, setReason]=useState()
    const [bankSelectedValue, setBankSelectedValue] = useState('');
    // const [transactionTypeValue,setTransactionTypeValue]=useState('')
    // console.log(franchise,password)
    const outerTheme = useTheme()
  return (
    <div>
    <Box sx={{border:'2px solid black', background:'white',width:'670px',height:'350px',borderRadius:'16px',boxShadow:3,padding:'5px 5px 0 5px'}}>
        <Box sx={{border:'2px solid red',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Typography sx={style.title}>Add Credit/Debit</Typography>
            <img src={close} style={{cursor:'pointer'}} onClick={handleAddExpenseClose}/>
        </Box>
        <Box sx={{border:'2px solid orange',mt:'10px',height:'85%',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap: theme => theme.spacing(1) }}>
        <ThemeProvider theme={customTheme(outerTheme)} >
        <TextField variant='outlined' value={transactionAmount} InputLabelProps={{ style:style.textFieldLabel}} label='Transaction Amount' sx={{width:'48%', mt:'10px'}} onChange={(e)=>setTransactionAmount(e.target.value)}/>
        <TextField variant='outlined' value={utr}  InputLabelProps={{ style:style.textFieldLabel}} label='UTR No.' sx={{width:'48%', mt:'10px'}} onChange={(e)=>setUtr(e.target.value)}/>
        <AddBankExpensePage bankSelectedValue={bankSelectedValue} setBankSelectedValue={setBankSelectedValue} /> 
        <TextField variant='outlined' value={dateTime} InputLabelProps={{ style:style.textFieldLabel}} label='Date and Time' sx={{width:'48%', mt:'10px'}} onChange={(e)=>setDateTime(e.target.value)}/>
        <TextField variant='outlined' value={reason} InputLabelProps={{ style:style.textFieldLabel}} label='Reason' sx={{width:'100%', mt:'10px'}} onChange={(e)=>setReason(e.target.value)}/>
        </ThemeProvider>
        <Divider style={{width:'100%'}}/>       
        <Button variant='contained' disabled={!(transactionAmount&&utr&&dateTime&&reason&&bankSelectedValue)} sx={style.addTransactionButton}>Add Transaction</Button>
        </Box>
    </Box>
    </div>
  ) 
}

export default AddExpense