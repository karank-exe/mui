import React,{useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import close from '../image/close.png'
import {createTheme,ThemeProvider,useTheme} from '@mui/material/styles'
import { styles } from './EditRolesStyles'
import SelectFranchiseRolesPage from './SelectFranchiseRolesPage'
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

const EditRoles = ({handleCloseEditRoles}) => {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [franchiseSelectedValue, setFranchiseSelectedValue] = useState([]);
    const [rolesSelected, setRolesSelected ] = useState('');
    // console.log(franchise,password)
    const outerTheme = useTheme()
  return (
    <div >
    <Box sx={{border:'2px solid black', background:'white',width:'337px',height:'500px',borderRadius:'16px',padding:'5px 5px 0 5px',position:'absolute',top:'50%',left:'50%',  transform:'translateY(-50%) translateX(-50%)'}}>
        <Box sx={{border:'2px solid red',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Typography sx={style.title}>Edit Roles</Typography>
            <img src={close} style={{cursor:'pointer'}} onClick={handleCloseEditRoles}/>
        </Box>
        <Box sx={{border:'2px solid orange',mt:'10px',height:'90%',display:'flex',justifyContent:'center',flexWrap:'wrap',gap: theme => theme.spacing(1) }}>
        <ThemeProvider theme={customTheme(outerTheme)} >
        <TextField variant='outlined' value={username} InputLabelProps={{ style:style.textFieldLabel}} label='Username' sx={{width:'95%', mt:'10px'}} onChange={(e)=>setUsername(e.target.value)}/>
        <TextField variant='outlined' value={password} type='password'  InputLabelProps={{ style:style.textFieldLabel}} label='Password' sx={{width:'95%', mt:'10px'}} onChange={(e)=>setPassword(e.target.value)}/>
        </ThemeProvider>
        <SelectRolesRolesPage rolesSelected={rolesSelected} setRolesSelected={setRolesSelected} />
        <SelectFranchiseRolesPage franchiseSelectedValue={franchiseSelectedValue} setFranchiseSelectedValue={setFranchiseSelectedValue} />  
        <Divider style={{width:'100%'}}/>
        <Button variant='contained' disabled={!(username&&password&&franchiseSelectedValue&&rolesSelected)} sx={style.addRolesButton}>Save Changes</Button>
        </Box>

    </Box>
    </div>
  )
}

export default EditRoles