import React,{useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import close from '../image/close.png'
import {createTheme,ThemeProvider,useTheme} from '@mui/material/styles'
import { styles } from './AddRolesStyles'
// import AddBankWithdrawalPage from './AddBankWithdrawalPage'
// import AddPanelWithdrawalPage from './AddPanelWithdrawalPage'
// import AddBankDepositPage from './AddBankRolesPage'
// import AddPanelDepositPage from './AddPanelRolesPage'
import AddFranchiseRolesPage from './AddFranchiseRolesPage'
import SelectRolesRolesPage from './SelectRolesRolesPage'
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

const AddRoles = ({handleAddDepositClose}) => {
    const [transactionAmount, setTransactionAmount]=useState()
    const [utr, setUtr]=useState()
    const [username, setUserName]=useState()
    const [dateTime, setDateTime]=useState()
    const [franchiseSelectedValue, setFranchiseSelectedValue] = useState([]);
    const [rolesSelected, setRolesSelected ] = useState('');
    // console.log(franchise,password)
    const outerTheme = useTheme()
  return (
    <div>
    <Box sx={{border:'2px solid black', background:'white',width:'337px',height:'500px',borderRadius:'16px',boxShadow:3,padding:'5px 5px 0 5px'}}>
        <Box sx={{border:'2px solid red',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Typography sx={style.title}>Add Deposit</Typography>
            <img src={close} style={{cursor:'pointer'}} onClick={handleAddDepositClose}/>
        </Box>
        <Box sx={{border:'2px solid orange',mt:'10px',height:'90%',display:'flex',justifyContent:'center',flexWrap:'wrap',gap: theme => theme.spacing(1) }}>
        <ThemeProvider theme={customTheme(outerTheme)} >
        <TextField variant='outlined' value={transactionAmount} InputLabelProps={{ style:style.textFieldLabel}} label='Transaction Amount' sx={{width:'95%', mt:'10px'}} onChange={(e)=>setTransactionAmount(e.target.value)}/>
        <TextField variant='outlined' value={utr}  InputLabelProps={{ style:style.textFieldLabel}} label='UTR No.' sx={{width:'95%', mt:'10px'}} onChange={(e)=>setUtr(e.target.value)}/>
        </ThemeProvider>
        <AddFranchiseRolesPage franchiseSelectedValue={franchiseSelectedValue} setFranchiseSelectedValue={setFranchiseSelectedValue} />  
        <SelectRolesRolesPage rolesSelected={rolesSelected} setRolesSelected={setRolesSelected} />
        <Divider style={{width:'100%'}}/>
        <Button variant='contained' disabled={!(transactionAmount&&utr&&username&&dateTime&&franchiseSelectedValue&&rolesSelected)} sx={style.addTransactionButton}>Add Transaction</Button>
        </Box>

    </Box>
    </div>
  )
}

export default AddRoles