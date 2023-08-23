import React,{useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import close from '../components/image/close.png'
import {createTheme,ThemeProvider,useTheme} from '@mui/material/styles'
import { styles } from './EditFranchiseStyle';
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

const AddWithdrawal = () => {
    const [franchise, setFranchise]=useState()
    const [password, setPassword]=useState()
    console.log(franchise,password)
    const outerTheme = useTheme()
  return (
    <div>
    <Box sx={{border:'2px solid black', width:'670px',height:'350px',borderRadius:'16px',boxShadow:3,padding:'5px 5px 0 5px'}}>
        <Box sx={{border:'2px solid red',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Typography>Add Withdraw</Typography>
            <img src={close}/>
        </Box>
        <Box sx={{border:'2px solid orange',mt:'10px',display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
        <ThemeProvider theme={customTheme(outerTheme)} >
        <TextField variant='outlined' label='Transaction Amount'     sx={{width:'48%', mt:'10px'}} onChange={(e)=>setFranchise(e.target.value)}/>
        <TextField variant='outlined' label='UTR No.' sx={{width:'48%', mt:'10px'}} onChange={(e)=>setPassword(e.target.value)}/>
        <TextField variant='outlined' label='Username' sx={{width:'48%', mt:'10px'}} onChange={(e)=>setFranchise(e.target.value)}/>
        <TextField variant='outlined' label='Date and Time' sx={{width:'48%', mt:'10px'}} onChange={(e)=>setPassword(e.target.value)}/>
        </ThemeProvider>
        </Box>

    </Box>
    </div>
  )
}

export default AddWithdrawal