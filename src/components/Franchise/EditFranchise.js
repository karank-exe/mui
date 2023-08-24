import React,{useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import close from  '../image/close.png'
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
const EditFranchise = ({handleClose}) => {
    const [franchise, setFranchise]=useState()
    const [password, setPassword]=useState()
    console.log(franchise,password)
    const outerTheme = useTheme()
  return (
    <Box sx={style.main}>
        <Box sx={style.titleBox}>
        <Typography sx={style.titleBoxText}>Edit Franchise</Typography>
        <img src={close} style={{position:'absolute', right:'0px',cursor:'pointer'}} onClick={handleClose}/>
        </Box>
        <ThemeProvider theme={customTheme(outerTheme)} >
        <TextField variant='outlined' label='Name' sx={{width:'95%', mt:'10px'}} onChange={(e)=>setFranchise(e.target.value)}/>
        <TextField variant='outlined'type='password' placeholder='Password' sx={{width:'95%', mt:'10px'}} onChange={(e)=>setPassword(e.target.value)}/>
        </ThemeProvider>
        <Box sx={{width:'95%', borderTop:'2px solid #919EAB33',mt:'20px', paddingTop:'10px'}}>
        <Button disabled={!(franchise&&password)} variant='contained' sx={style.savebutton}>Save Changes</Button>
        <Button disabled={!(franchise&&password)} variant='contained'sx={style.deletebutton}>Delete Franchise</Button>
        </Box>
    </Box>
  )
}

export default EditFranchise