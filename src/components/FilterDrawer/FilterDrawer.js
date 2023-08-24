import React,{useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import CheckBox  from '@mui/material/Checkbox'
import Slider from "@mui/material/Slider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {createTheme,ThemeProvider,useTheme} from '@mui/material/styles'
import filterDelete from '../image/filterDelete.png'
import { styles } from '../WithdrawPage/WithdrawPageStyles';
const customTheme1=()=>
createTheme({
    // palette: {
    //     mode: outerTheme.palette.mode,
    //   },
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

const style = styles();

//-------------marks for slider--------------------------------//
const marks = [
    {
      value: 0,
      label: "0"
    },
    {
      value: 40,
      label: "40"
    },
    {
      value: 80,
      label: "80"
    },
    {
      value: 120,
      label: "120"
    },
    {
      value: 160,
      label: "160"
    },
    {
      value:'200',
      label: "200"
    }
  ];
  const banks=[
    {
      text:'Shivam-HDFC',
    },
    {
      text:'Rakesh-Union',
    },
    {
      text:'Kevin-HDFC',
    }
  ]
  
  const panel=[
    {
      text:'Panel1',
    },
    {
      text:'Panel2',
    },
    {
      text:'Panel3',
    }
  ]

const FilterDrawer = ({filterOpen,handleFilter}) => {
const [value, setValue] = useState([40, 160]);
const handleSliderChange = (event, newValue) => {
    let [newFirstValue, newSecondValue] = newValue;

    if (newFirstValue >= 80) {
      newFirstValue = 80;
    }

    if (newSecondValue <= 120) {
      newSecondValue = 120  ;
    }

    setValue([newFirstValue, newSecondValue]);
  };
  return (
    <div>
            <Drawer
          variant="temporary"
          anchor='right'
          open={filterOpen}
          onClose={handleFilter}
        //   onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            // display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '280px' },
          }}
        >
             <div style={{border:'2px solid red',padding:0,position:'relative',height:'100%'}}>
        <Toolbar >
            <Box sx={{border:'2px solid black',width:'100%', display:'flex',justifyContent:'space-between',margin:0}} >
            <Typography sx={{
                fontFamily: 'Public Sans',
                fontSize: '18px;',
                fontWeight: '700',
                lineHeight: '28px',
                letterSpacing: '0px',
                textAlign: 'left',
                }}>Filters</Typography>
            <Button>
            <img src={filterDelete}/>
            </Button>
            </Box>
        </Toolbar>
        <Divider/>
        <List sx={{display:'flex', flexDirection:'column',mt:'10px'}}>
        <Typography sx={{//styleName: Desktop/Subtitle2;
                fontFamily: 'Public Sans',
                fontSize: '14px',
                fontWeight: '600',
                lineheight: '22px',
                letterSpacing: '0px',
                textAlign: 'left',
                marginLeft:'10px',
                color:'#212B36'
                }}>Banks</Typography>
          {banks.map((data, index) => (
            <ListItem key={data.text} disablePadding sx={{height:'40px'}}>
              <ListItemButton>
                <CheckBox color='success' sx={{}}/>
                <Typography sx={{fontFamily: 'Public Sans',fontSize: '14px',fontWeight: '600',lineHeight:'22px',letterSpacing: '0px',textAlign: 'left',color:'#212B36'}} >
                    {data.text}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
       
        <List>
        <Typography sx={{fontFamily: 'Public Sans',
                fontSize: '14px',
                fontWeight: '600',
                lineheight: '22px',
                letterSpacing: '0px',
                textAlign: 'left',
                marginLeft:'10px',
                color:'#212B36'}}>Panel</Typography>
          {panel.map((data, index) => (
            <ListItem key={data.text} sx={{height:'40px'}} disablePadding>
              <ListItemButton>
                <CheckBox color='success'/>
                <Typography sx={{fontFamily: 'Public Sans',fontSize: '14px',fontWeight: '600',letterSpacing: '0px',textAlign: 'left',color:'#212B36'}} >
                    {data.text}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Typography sx={{
            fontFamily: 'Public Sans',
            fontSize: '14px',
            fontWeight: '600',
            lineheight: '22px',
            letterSpacing: '0px',
            textAlign: 'left',
            marginLeft:'10px',
            color:'#212B36'
        }}>Withdraw Date Range</Typography>
        <Box sx={{paddingLeft:'10px'}}>
        <ThemeProvider theme={customTheme1()} >  
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="Start Date"  sx={{ width: "260px" }} />
        </DemoContainer>
      </LocalizationProvider>
      </ThemeProvider>
      </Box>
      <Box sx={{paddingLeft:'10px'}}>
      <ThemeProvider theme={customTheme1()} >  
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="End Date"  sx={{ width: "260px" }} />
        </DemoContainer>
      </LocalizationProvider>
      </ThemeProvider>
      </Box>
      <Box sx={{border:'2px solid green',paddingLeft:1, marginTop:'20px'}}>
      <Typography sx={{
        //styleName: Desktop/Subtitle2;
        fontFamily: 'Public Sans',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign: 'left',
        color:'#212B36'
      }}>Transaction Amount</Typography>
      <Box sx={{border:'2px solid black',display:'flex',marginTop:'10px',justifyContent:'space-between'}}>
        <Box sx={{border:'2px solid red',display:'flex',width:'45%',justifyContent:'space-between',alignItems:'center'}}>
          <Box sx={{
            width:'40px',
            height:'35px',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
           
            }}>
            <Typography 
            sx={{fontSize:'14px',
                fontFamily: 'Public Sans',
                fontWeight: 600,
                lineHeight: '22px',
                letterSpacing: '0px',
                textAlign: 'left',
                color:'#919EAB'
             }}>Min</Typography>
            <Typography 
              sx={{fontSize:'14px',
              fontFamily: 'Public Sans',
              fontWeight: 600,
              lineHeight: '22px',
              letterSpacing: '0px',
              textAlign: 'left',
              color:'#919EAB'
           }}
            >(₹)</Typography>
          </Box>
          <Box sx={{width:'40px', height:'30px',borderRadius:'6px',padding:'6px 8px 6px 8px',background:'#919EAB14',display:'flex',alignItems:'center',justifyContent:'end'}}> 
          <Typography sx={{color:'black'}}>0</Typography>
          </Box>
        </Box>
        <Box sx={{display:'flex',width:'45%',justifyContent:'space-between',alignItems:'center'}}>
          <Box sx={{
            width:'40px',
            height:'35px',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
           
            }}>
            <Typography 
            sx={{fontSize:'14px',
                fontFamily: 'Public Sans',
                fontWeight: 600,
                lineHeight: '22px',
                letterSpacing: '0px',
                textAlign: 'left',
                color:'#919EAB'
             }}>Max</Typography>
            <Typography 
              sx={{fontSize:'14px',
              fontFamily: 'Public Sans',
              fontWeight: 600,
              lineHeight: '22px',
              letterSpacing: '0px',
              textAlign: 'left',
              color:'#919EAB'
           }}
            >(₹)</Typography>
          </Box>
          <Box sx={{width:'40px', height:'30px',borderRadius:'6px',padding:'6px 8px 6px 8px',background:'#919EAB14',display:'flex',alignItems:'center',justifyContent:'end'}}> 
          <Typography sx={{color:'black'}}>100</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{marginTop:'10px'}}>
      <Slider
          track="inverted"
          value={value}
          aria-labelledby="track-inverted-range-slider"
          min={0}
          max={200}
          defaultValue={[20, 37]}
          onChange={handleSliderChange}
          marks={marks}

          sx={{
            width:'260px',
            color: "green",
            "& .MuiSlider-track": {
              height: 3, // Change the track height
              borderRadius: 4, // Customize track border radius
              // backgroundColor: "green",
              opacity: 0.7
            },
            "& .MuiSlider-thumb": {
              backgroundColor: "#22C55E" // Customize thumb color
            },
            "& .MuiSlider-valueLabel": {
              backgroundColor: "#22C55E" // Customize value label color
            },
            "& .MuiSlider-rail": {
              height:3,
              borderRadius:4,
              backgroundColor: "green",
              opacity: 1
            },
            '& .MuiSlider-mark': {
              height:3,
              width:3,
              color:'green'
            },
            '& .MuiSlider-markLabel': {
              color:'grey'
            }
  
          }}
        />
      </Box>
      </Box>
      <Box sx={{width:'100%', border:'2px solid orange',display:'flex',justifyContent:'center',position:'absolute',bottom:0}}>
        <Button variant='contained' sx={{width:'240px',background:'#212B36',borderRadius:'8px','&:hover':{background:'#212B36'}}}>
            <Typography>Apply Filter</Typography>
        </Button>
      </Box>
      </div>
        </Drawer>
    </div>
  )
}

export default FilterDrawer