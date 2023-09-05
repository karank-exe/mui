import React,{useState} from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton' 
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Modal from '@mui/material/Modal';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper'
import {createTheme,ThemeProvider,useTheme} from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add';
import eye from '../image/passwordEye.png'
import search from '../image/search.png'
import deleterow from '../image/deleterow.png'
import { styles } from './RolesPageStyles';
import { TableRow, TableBody, TableCell } from '@mui/material'
import useTable from '../control/RolesTable'
import FilterDrawer from '../FilterDrawer/FilterDrawer'
import AddRoles from '../AddRoles/AddRoles'
import EditRoles from '../EditRoles/EditRoles'
import CustomSwitch from './SwitchCustom/Switch'
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

function createData(username, password, roles, userlock,franchiseaccess) {
    return {username, password, roles, userlock,franchiseaccess};
}

const headCells=[
    {id:'username', label:'Username'},
    {id:'password', label:'Password'},
    {id:'roles', label:'Roles'},
    {id:'userlock', label:'User Lock'},
    {id:'franchiseaccess', label:'Franchise Access'},
]
const recordsData=[
    createData('user2205','Abcd1234','Super Admin',true,'All'),
    createData('user2345','Abcd1234','Admin',false,'Franchise 1, Franchise 2'),
    createData('user7456','Abcd1234','Depositer',true,'Franchise 1'),
    createData('user4656','Abcd1234','Withdrawal',false,'Franchise 2'),
    createData('user9546','Abcd1234','Admin',true,'Franchise 4'),
    createData('user2205','Abcd1234','Super Admin',false,'All'),
    createData('user2345','Abcd1234','Admin',true,'Franchise 1, Franchise 2'),
    createData('user7456','Abcd1234','Depositer',false,'Franchise 1'),
    createData('user4656','Abcd1234','Withdrawal',true,'Franchise 2'),
    createData('user9546','Abcd1234','Admin',false,'Franchise 4'),
]
// console.log("recordData",recordsData)

const Roles = () => {
    const[records,setRecords]=useState(recordsData)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [filterOpen, setFilterOpen]= useState(false)
    // const [addDepositOpen, setAddDepositOpen]= useState(false);
    // const [value, setValue] = useState([40, 160]);
    const [showPasswords, setShowPasswords] = useState({});
    const [openAddRoles, setOpenAddRoles] = useState(false);
    const [openEditRoles, setOpenEditRoles] = useState(false);
    const outerTheme = useTheme()
    const handleOpenAddRoles = () => {
      setOpenAddRoles(true);
    }
    const handleCloseAddRoles = () =>{
      setOpenAddRoles(false);
    } 
    const handleOpenEditRoles = () => {
      console.log("edit opened")
      setOpenEditRoles(true);
    }
    const handleCloseEditRoles = () =>{
      console.log("edit closed")
      setOpenEditRoles(false);
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
                    return items.filter(x => x.username.includes(target.value))
            }
        })
    }
    const handleFilter =()=>{
        setFilterOpen(!filterOpen)
    }

    const handleTogglePassword = (index) => {
        setShowPasswords((prevShowPasswords) => ({
          ...prevShowPasswords,
          [index]: !prevShowPasswords[index],
        }));
      };

      
    // const handleAddDepositOpen=()=>{
    //     setAddDepositOpen(true)
    // }
    // const handleAddDepositClose=()=>{
    //     setAddDepositOpen(false)
    // }

  return (
    <>
    <Paper sx={{marginTop:'10px', borderRadius:'16px', paddingTop:3}}>
        <Box sx={{display:'flex', alignItems:'center',padding:'0px 8px 0px 8px',justifyContent:'space-between'}}>
        <Typography sx={style.depositText}>Roles</Typography>

        <Box sx={{border:'2px solid green',display:'flex', alignItems:'center',position:'relative'}}>
        <ThemeProvider theme={customTheme(outerTheme)} >
        {/* custom styling for search field */}
      <TextField variant='outlined' placeholder='Search...' sx={{width:'250px',height:'45px', mt:'10px','& ::placeholder':{fontFamily:'Public Sans',fontWeight:'400',fontSize:'14px'}}} size='small' onChange={handleSearch}
          InputProps={{
              startAdornment: (
                  <InputAdornment position='start'>
                    <img src={search} style={{marginRight:'7px'}}/>
                {/* <SearchIcon fontSize='large' /> */}
              </InputAdornment>
            ),
            inputProps: {
                style: {
                    fontFamily: 'Public Sans',
                    fontSize: '16px',
                    fontWeight: '400',
                    // lineHeight: '22px',
                    letterSpacing: '0px',
                    textAlign: 'left',
                    color: 'black', // Color of the input text
                },
            },
        }}
        />
      </ThemeProvider>
      {/* <Button sx={style.filterButton} variant='contained' endIcon={<img src={filterIcon}/>} onClick={handleFilter}>
      <Typography sx={style.filterButtonText}>Filters</Typography>
      </Button> */}
      <Button sx={style.addDepositButton} variant='contained' startIcon={<AddIcon style={{color:'black'}}/>} onClick={handleOpenAddRoles}>
          <Typography sx={style.addDepositButtonText}>Add Roles</Typography>
      </Button>
      <Modal
        open={openAddRoles}
        onClose={handleCloseAddRoles}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box onClose={handleCloseAddRoles}>
        <AddRoles handleCloseAddRoles={handleCloseAddRoles}/>
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
                                    <TableCell sx={{minWidth:100,textAlign:'center','&.MuiTableCell-root':{padding:'10px 0px 10px 7px'}}}><Typography sx={style.tableDataText} >{item.username}</Typography></TableCell>
                                    <TableCell sx={{minWidth:100, textAlign:'center','&.MuiTableCell-root':{padding:'10px 0px 10px 7px'}}}>
                                    <Typography sx={style.tableDataText} >{showPasswords[index]?item.password:'*****'}
                                    <img src={eye} style={{marginLeft:'8px',cursor:'pointer'}} onClick={()=>handleTogglePassword(index)}/>
                                    </Typography>
                                    </TableCell>
                                    <TableCell sx={{minWidth:100, textAlign:'center','&.MuiTableCell-root':{padding:'10px 0px 10px 7px'}}}><Typography sx={style.tableDataText} >{item.roles}</Typography></TableCell>
                                    <TableCell sx={{minWidth:100, textAlign:'center','&.MuiTableCell-root':{padding:'10px 0px 10px 7px'}}}><CustomSwitch checked={item.userlock}/></TableCell>
                                    <TableCell sx={{minWidth:100, textAlign:'center','&.MuiTableCell-root':{padding:'10px 0px 10px 7px'}}}>
                                        <Box sx={style.userEditButtonBox}>
                                       <Typography sx={style.tableDataText} >{item.franchiseaccess}</Typography>
                                       <Box sx={{border:'2px solid black'}}>
                                        <Button variant='contained' sx={style.userEditButton} onClick={handleOpenEditRoles}>
                                            <Typography sx={style.userEditButtonText}>Edit</Typography>
                                        </Button>
                                        <Modal
                                              open={openEditRoles}
                                              onClose={handleCloseEditRoles}
                                              aria-labelledby="modal-modal-title"
                                              aria-describedby="modal-modal-description"
                                              sx={{
                                                '& .MuiBackdrop-root': {
                                                  backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust the opacity value as needed
                                                },
                                              }}
                                            >
                                              <Box onClose={handleCloseEditRoles}>
                                              <EditRoles handleCloseEditRoles={handleCloseEditRoles}/>
                                              </Box>
                                            </Modal>
                                        <IconButton sx={{width:'36px',height:'30px',borderRadius:'8px',backgroundColor:'#919EAB14',marginLeft:'10px'}}>
                                            <img src={deleterow}/>
                                        </IconButton>
                                       </Box>
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
 
    </>
  )
}

export default Roles 