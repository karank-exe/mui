import React,{useState}from 'react'
import { styled, alpha } from "@mui/material/styles";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import EditIcon from "@mui/icons-material/Edit";
// import Divider from "@mui/material/Divider";
// import ArchiveIcon from "@mui/icons-material/Archive";
// import FileCopyIcon from "@mui/icons-material/FileCopy";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {styles} from './AddBankWithdrawalPageStyles'
const style= styles();

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left"
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 400,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main, 
          theme.palette.action.selectedOpacity
        )
      }
    } 
  }
}));

const AddBankWithdrawalPage = ({bankSelectedValue,setBankSelectedValue}) => {
    const [text, setText]= useState('Search or Select Bank')
    const [anchorEl, setAnchorEl] = React.useState(null);
   
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        // console.log(e.target.innerText)
        // {e.target.innerText!==''?  setText(e.target.innerText):setText('Franchise')} 
        // setAnchorEl(null);
        if (e.target.innerText !== '') {
          setText(e.target.innerText);
          setBankSelectedValue(e.target.innerText); // Update the selected value when an option is clicked
        }
        setAnchorEl(null);
      };
  return (
    <div>
        <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        sx={style.BankButton}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <Typography sx={{fonFamily: 'Public Sans',fontSize: '14px',fontWeight: 400,
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign:'left',
        color:'#919EAB'}}>{text}</Typography>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Box sx={{border:'2px solid red', }}>
        <MenuItem onClick={handleClose} disableRipple selected={bankSelectedValue === 'Shivam-HDFC'}>
        <Typography sx={{ fontFamily: 'Public Sans',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign:'left',
        color:'#212B36'}}>Shivam-HDFC</Typography> 
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple selected={bankSelectedValue === 'Vivek-ICIC'}>
        <Typography sx={{ fontFamily: 'Public Sans',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign:'left',
        color:'#212B36'}}>Vivek-ICIC</Typography> 
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple selected={bankSelectedValue === 'Rakesh-HDFC'}>
        <Typography sx={{ fontFamily: 'Public Sans',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign:'left',
        color:'#212B36'}}>Rakesh-HDFC</Typography> 
        </MenuItem>
        </Box>
        {/* <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem> */}
      </StyledMenu>
    </div>
  )
}

export default AddBankWithdrawalPage