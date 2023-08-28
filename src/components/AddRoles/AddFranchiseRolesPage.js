import React,{useState}from 'react'
import { styled, alpha } from "@mui/material/styles";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import  CheckBox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import EditIcon from "@mui/icons-material/Edit";
// import Divider from "@mui/material/Divider";
// import ArchiveIcon from "@mui/icons-material/Archive";
// import FileCopyIcon from "@mui/icons-material/FileCopy";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {styles} from './AddBankRolesPageStyles'
import { ForkLeft } from '@mui/icons-material';
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
    marginTop:10,
    marginLeft:3,
    minWidth: 310,
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
        fontSize: 20,
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

const AddFranchiseRolesPage = ({franchiseSelectedValue,setFranchiseSelectedValue}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        setAnchorEl(null);
      };
      const handleOptionToggle = (option) => () => {
        const currentIndex = franchiseSelectedValue.indexOf(option);
        const newSelectedOptions = [...franchiseSelectedValue];
        
        if (currentIndex === -1) {
          newSelectedOptions.push(option);
        } else {
          newSelectedOptions.splice(currentIndex, 1);
        }
        
        setFranchiseSelectedValue(newSelectedOptions);
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
        endIcon={<KeyboardArrowDownIcon style={{color:'#919EAB'}} />}
      >
        <Typography sx={{fonFamily: 'Public Sans',fontSize: '14px',fontWeight: 400,
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign:'left',
        color:'#919EAB'}}> {franchiseSelectedValue.length > 0 ? franchiseSelectedValue.join(', ') : 'Select Franchise'}</Typography>
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
        <Box sx={{border:'2px solid red',maxWidth:'310px'}}>
        <MenuItem  disableRipple selected={franchiseSelectedValue.includes('Franchise 1')}>
          <CheckBox
           checked={franchiseSelectedValue.includes('Franchise 1')}
           color='success'
           onChange={handleOptionToggle('Franchise 1')}/>
        <Typography sx={{ fontFamily: 'Public Sans',
        fontSize: '14px',
        fontWeight: 400,

        letterSpacing: '0px',
        textAlign:'left',
        color:'#212B36'}}>Franchise 1</Typography> 
        </MenuItem>

        <MenuItem disableRipple selected={franchiseSelectedValue.includes('Franchise 2')}>
        <CheckBox
           checked={franchiseSelectedValue.includes('Franchise 2')}
           color='success'
           onChange={handleOptionToggle('Franchise 2')}/>
        <Typography sx={{ fontFamily: 'Public Sans',
        fontSize: '14px',
        fontWeight: 400,
        letterSpacing: '0px',
        textAlign:'left',
        color:'#212B36'}}>Franchise 2</Typography> 
        </MenuItem>

        <MenuItem  disableRipple selected={franchiseSelectedValue.includes('Franchise 3')}>
        <CheckBox
           checked={franchiseSelectedValue.includes('Franchise 3')}
           color='success'
           onChange={handleOptionToggle('Franchise 3')}/>
        <Typography sx={{ fontFamily: 'Public Sans',
        fontSize: '14px',
        fontWeight: 400,

        letterSpacing: '0px',
        textAlign:'left',
        color:'#212B36'}}>Franchise 3</Typography> 
        </MenuItem>

        <MenuItem  disableRipple selected={franchiseSelectedValue.includes('Franchise 4')}>
        <CheckBox
           checked={franchiseSelectedValue.includes('Franchise 4')}
           color='success'
           onChange={handleOptionToggle('Franchise 4')}/>
        <Typography sx={{ fontFamily: 'Public Sans',
        fontSize: '14px',
        fontWeight: 400,

        letterSpacing: '0px',
        textAlign:'left',
        color:'#212B36'}}>Franchise 4</Typography> 
        </MenuItem>
        </Box>
      </StyledMenu>
    </div>
  )
}

export default AddFranchiseRolesPage