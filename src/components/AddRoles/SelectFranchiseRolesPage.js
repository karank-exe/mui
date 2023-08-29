import React,{useState}from 'react'
import { styled, alpha } from "@mui/material/styles";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import  Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from '@mui/material/FormControlLabel';
import { green } from '@mui/material/colors';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {styles} from './SelectFranchiseRolesPageStyles'
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
    marginTop:5,
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

const SelectFranchiseRolesPage = ({franchiseSelectedValue,setFranchiseSelectedValue}) => {
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
        sx={style.FranchiseButton}
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
        <FormControlLabel
              control={
                <Checkbox
                  checked={franchiseSelectedValue.includes('Franchise 1')}
                  onChange={handleOptionToggle('Franchise 1')}
                  sx={{
                    color:green[800],
                    '&.Mui-checked': {
                      color: green[600],
                    },
                  }}
                />
              }
              label={ <Typography sx={{ fontFamily: 'Public Sans',
              fontSize: '14px',
              fontWeight: 400,
              textAlign:'left',
              color:'#212B36'}}>Franchise 1</Typography> }
            />
        </MenuItem>
        <MenuItem  disableRipple selected={franchiseSelectedValue.includes('Franchise 2')}>
        <FormControlLabel
              control={
                <Checkbox
                  checked={franchiseSelectedValue.includes('Franchise 2')}
                  onChange={handleOptionToggle('Franchise 2')}
                  sx={{
                    color:green[800],
                    '&.Mui-checked': {
                      color: green[600],
                    },
                  }}
                />
              }
              label={ <Typography sx={{ fontFamily: 'Public Sans',
              fontSize: '14px',
              fontWeight: 400,
              textAlign:'left',
              color:'#212B36'}}>Franchise 2</Typography> }
            />
        </MenuItem>
        <MenuItem  disableRipple selected={franchiseSelectedValue.includes('Franchise 3')}>
        <FormControlLabel
              control={
                <Checkbox
                  checked={franchiseSelectedValue.includes('Franchise 3')}
                  onChange={handleOptionToggle('Franchise 3')}
                  sx={{
                    color:green[800],
                    '&.Mui-checked': {
                      color: green[600],
                    },
                  }}
                />
              }
              label={ <Typography sx={{ fontFamily: 'Public Sans',
              fontSize: '14px',
              fontWeight: 400,
              textAlign:'left',
              color:'#212B36'}}>Franchise 3</Typography> }
            />
        </MenuItem>
        <MenuItem  disableRipple selected={franchiseSelectedValue.includes('Franchise 4')}>
        <FormControlLabel
              control={
                <Checkbox
                  checked={franchiseSelectedValue.includes('Franchise 4')}
                  onChange={handleOptionToggle('Franchise 4')}
                  sx={{
                    color:green[800],
                    '&.Mui-checked': {
                      color: green[600],
                    },
                  }}
                />
              }
              label={ <Typography sx={{ fontFamily: 'Public Sans',
              fontSize: '14px',
              fontWeight: 400,
              textAlign:'left',
              color:'#212B36'}}>Franchise 4</Typography> }
            />
        </MenuItem>
        </Box>
      </StyledMenu>
    </div>
  )
}

export default SelectFranchiseRolesPage
