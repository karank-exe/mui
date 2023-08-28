import React,{useState}from 'react'
import { styled, alpha } from "@mui/material/styles";
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {styles} from './AddPanelRolesPageStyles'
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
  
const SelectRolesRolesPage = ({rolesSelected,setRolesSelected}) => {
    const [text, setText]= useState('Search or Select Panel')
    const [anchorEl, setAnchorEl] = React.useState(null);
 
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        setAnchorEl(null);
      };
      const handleOptionChange = (event) => {
        setRolesSelected(event.target.value);
        handleClose();
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
        sx={style.panelButton}
        endIcon={<KeyboardArrowDownIcon style={{color:'#919EAB'}} />}
      >
        <Typography sx={{fonFamily: 'Public Sans',fontSize: '14px',fontWeight: 400,
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign:'left',
        color:'#919EAB'}}> {rolesSelected || 'Select Role'}</Typography>
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
        <RadioGroup value={rolesSelected} onChange={handleOptionChange}>
          <MenuItem>
            <FormControlLabel value="Option 1" control={<Radio />} label="Option 1" />
          </MenuItem>
          <MenuItem>
            <FormControlLabel value="Option 2" control={<Radio />} label="Option 2" />
          </MenuItem>
          <MenuItem>
            <FormControlLabel value="Option 3" control={<Radio />} label="Option 3" />
          </MenuItem>
        </RadioGroup>
        </Box>
      </StyledMenu>
    </div>
  )
}

export default SelectRolesRolesPage






// <MenuItem onClick={handleClose} disableRipple selected={panelSelectedValue === 'Panel 1'}>
// <Typography sx={{ fontFamily: 'Public Sans',
// fontSize: '14px',
// fontWeight: 400,
// lineHeight: '22px',
// letterSpacing: '0px',
// textAlign:'left',
// color:'#212B36'}}>Panel 1</Typography> 
// </MenuItem>
// <MenuItem onClick={handleClose} disableRipple selected={panelSelectedValue === 'Panel 2'}>
// <Typography sx={{ fontFamily: 'Public Sans',
// fontSize: '14px',
// fontWeight: 400,
// lineHeight: '22px',
// letterSpacing: '0px',
// textAlign:'left',
// color:'#212B36'}}>Panel 2</Typography>  
// </MenuItem>
// <MenuItem onClick={handleClose} disableRipple selected={panelSelectedValue === 'Panel 3'}>
// <Typography sx={{ fonFtamily: 'Public Sans',
// fontSize: '14px',
// fontWeight: 400,
// lineHeight: '22px',
// letterSpacing: '0px',
// textAlign:'left',
// color:'#212B36'}}>Panel 3</Typography>  
// </MenuItem>
// <MenuItem onClick={handleClose} disableRipple selected={panelSelectedValue === 'Panel 4'}>
// <Typography sx={{ fontFamily: 'Public Sans',
// fontSize: '14px',
// fontWeight: 400,
// lineHeight: '22px',
// letterSpacing: '0px',
// textAlign:'left',
// color:'#212B36'}}>Panel 4</Typography> 
// </MenuItem>