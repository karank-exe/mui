import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import Toolbar from '@mui/material/Toolbar'
import BankDetails from './BankDetails';
import { styles } from './BanksPageStyles';
import { Laptopstyles } from './BankPageLaptopStyles';
import { Paper,TableBody,TableRow,TableCell,InputAdornment } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Controls from '../control/Controls';
import Search from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import CustomSwitch from './SwitchCustom/Switch'
import useTable from '../control/BankPageTable';
const style = styles();
const headCells = [
    { id: 'accountholdername', label: 'Account Holder Name' },
    { id: 'bankname', label: 'Bank Name' },
    { id: 'accounttype', label: 'Account Type'},
    { id: 'currentbalance', label: 'Current Balance' },
    { id: 'status', label: 'Status',checked:'false', disableSorting:true},
    { id: 'usedfor', label: 'Used For'},

]
function createData(accountholdername, bankname, accounttype, currentbalance, status,usedfor) {
  return {accountholdername, bankname, accounttype, currentbalance, status,usedfor };
}
const recordsdata=[
createData('Rakesh Tamboli','IDFC','Savings',25000,false,'Withdrawal'),
createData('Rakesh Tamboli','Paytm','Savings',25000,true,'Deposit'),
createData('Rakesh Tamboli','IDFC','Savings',25000,false,'Withdrawal'),
createData('Shivam Sharma','Paytm','Savings',25000,true,'Withdrawal'),
createData('Shivam Sharma','Paytm','Savings',25000,false,'Deposit'),
createData('Shivam Sharma','Paytm','Savings',25000,true,'Withdrawal'),
createData('Rakesh Tamboli','IDFC','Savings',25000,false,'Withdrawal'),
createData('Shivam Sharma','Paytm','Savings',25000,true,'Withdrawal'),
createData('Rakesh Tamboli','IDFC','Savings',25000,false,'Withdrawal'),
createData('Shivam Sharma','Paytm','Savings',25000,true,'Withdrawal'),
createData('Rakesh Tamboli','IDFC','Savings',25000,false,'Withdrawal'),
createData('Shivam Sharma','Paytm','Savings',25000,true,'Withdrawal'),
createData('Shivam Sharma','Paytm','Savings',25000,true,'Withdrawal'),
createData('Rakesh Tamboli','IDFC','Savings',25000,false,'Withdrawal'),
createData('Shivam Sharma','Paytm','Savings',25000,true,'Withdrawal'),
createData('Rakesh Tamboli','IDFC','Savings',25000,false,'Withdrawal'),
createData('Shivam Sharma','Paytm','Savings',25000,true,'Withdrawal'),
createData('Rakesh Tamboli','IDFC','Savings',25000,false,'Withdrawal'),
createData('Shivam Sharma','Paytm','Savings',25000,true,'Withdrawal'),
]
const BanksPage = () => {
    const isLaptopScreen = useMediaQuery('(max-width: 1250px)')
    const style = isLaptopScreen? Laptopstyles(): styles()
    const [records, setRecords] = React.useState(recordsdata)
    const [filterFn, setFilterFn] = React.useState({ fn: items => { return items; } })
    const [selectedUser, setSelectedUser]=React.useState(null)

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
                return items.filter(x => x.accountholdername.toLowerCase().includes(target.value))
        }
    })
}
const handleViewClick=(user)=>{
    setSelectedUser(user)
    console.log(user)
  }
  return (
    <>
    {selectedUser ?
        (<BankDetails selectedUser={selectedUser}/>):
                            (<>
                              <Paper >
                              <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
                                          <Typography sx={style.BankTitle}>
                                            Banks
                                          </Typography>
                                          <Box sx={{display:'flex',height:'40px'}}>
                                          <Controls.Input
                                              label="Search Employees"
                                              // className={classes.searchInput}
                                              InputProps={{
                                                startAdornment: (<InputAdornment position="start">
                                                      <Search />
                                                  </InputAdornment>)
                                              }
                                            }
                                              onChange={handleSearch}
                                              size='small'
                                              />
                                          <Button  variant='contained' sx={style.AddBankButton}
                                          startIcon={<AddIcon/>}
                                          ><Typography sx={style.AddBankButtonText}>Add New Bank</Typography></Button>
                                          </Box>
                                      </Toolbar>
                              <TblContainer>
                                          <TblHead />
                                          <TableBody>
                                              {
                                                  recordsAfterPagingAndSorting().map((item,index) =>
                                                      (<TableRow key={index}>
                                                          <TableCell sx={{minWidth:50,'&.MuiTableCell-root':{padding:0}}}><Typography sx={style.tableDataText}>{item.accountholdername}</Typography></TableCell>
                                                          <TableCell sx={{minWidth:50,'&.MuiTableCell-root':{padding:0}}}><Typography sx={style.tableDataText}>{item.bankname}</Typography></TableCell>
                                                          <TableCell sx={{minWidth:50,'&.MuiTableCell-root':{padding:0}}}><Typography sx={style.tableDataText}>{item.accounttype}</Typography></TableCell>
                                                          <TableCell sx={{minWidth:50,'&.MuiTableCell-root':{padding:0}}}><Typography sx={style.tableDataText}>{item.currentbalance}</Typography></TableCell>
                                                          <TableCell sx={{minWidth:50, textAlign:'center', border:'2px solid red',p:0,background:'white','&.MuiTableCell-root':{padding:0}}}>
                                                            <CustomSwitch checked={item.status} />
                                                          </TableCell>
                                                          <TableCell sx={{minWidth:100,width:900,'&.MuiTableCell-root':{padding:'10px 0px 10px 5px'}}}>
                                                            <Box sx={{display:'flex',justifyContent:'space-between', border:'2px solid black', alignItems:'center'}}>
                                                              <Box sx={item.usedfor==='Withdrawal'? style.withdrawstyle:style.depositstyle}>
                                                              {item.usedfor}
                                                              </Box>
                                                              <Box >
                                                                <Button variant='contained' sx={style.button}>
                                                                 Edit
                                                                </Button>
                                                                <Button variant='contained' sx={style.button} onClick={()=>handleViewClick(item)}>
                                                                 View
                                                                </Button>
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
                              </Paper>
                              </>
                            )
        }
</>
  );
}

export default BanksPage