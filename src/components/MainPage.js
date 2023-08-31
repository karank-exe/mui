import * as React from 'react';
import { BrowserRouter as Router, Route, Routes,Link,useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'
import{ styles} from './MainPageStyle'
import analytics from '../components/image/analytics.png'
import banks from '../components/image/bank.png'
import panel from '../components/image/panel.png'
import user from '../components/image/user.png'
import usageimg from '../components/image/usageimg.png'
import Navbar from './Navbar/Navbar';
import BanksPage from './BankPage/BanksPage';
import Analytics from './Analytics/Analytics';
import Panel from './Panel/Panel';
import WithdrawPage from './WithdrawPage/WithdrawPage';
import Deposit from './Deposit/Deposit';
import CreditLoan from './CreditLoan/CreditLoan';
import Expense from './Expense/Expense';
import BankTransfer from './BankTransfer/BankTransfer';
import Settle from './Settle/Settle';
import Roles from './Roles/Roles'
// import { makeStyles } from '@mui/styles';
const drawerWidth = 200;
const style = styles();
console.log(style.ledger)

// const useStyles = makeStyles(theme => ({
//   pageContent: {
//       margin: theme.spacing(5),
//       padding: theme.spacing(3)
//   },
//   searchInput: {
//       width: '75%'
//   }
// }))


const overview=[
    {
        text:'Analytics',
        image: analytics,
    },
    {
        text:'Banks',
        image: banks,
    },
    {
        text:'Panel',
        image: panel,
        subOptions:[
          {text:'Panel1'},
          {text:'Panel2'},
          {text:'Panel3'},
          {text:'Panel4'}
        ]
    },
    {
        text:'Roles',
        image: user,
    },
]
const usage=[
    {
        text:'Withdraw',
        image:usageimg,

    },
    {
        text:'Deposit',
        image:usageimg,

    },
    {
        text:'Credit/Loans',
        image:usageimg,

    },
    {
        text:'Expense',
        image:usageimg,

    },
    {
        text:'BankTransfer',
        image:usageimg,

    },
    {
        text:'Settle',
        image:usageimg,

    },
]
//here i have made state variable "selectedOption" for overview Option, "selectedSubOption" for suboption in the Panel Option in overview section and "selectedUsageOption" state variable for the option of the
//usage section and their handling function are also created

/***************IMPORTANT***************************** 
as we have to give styling to the option and suboption when user clicks on it we have to use the state variable created which will keep track of the selected options or suboption
IMP 1)here we have to use e.preventDefault() in the handling function so that it dont re-render page if we dont add this then state variable will again have default value which is null
and styling wont be applied 
Problem of point 1 :- using this e.preventDefault() wont allow the routing set to each ListItem previously[check previous commits to see the previous change] hence when user click
on the option the styling will be applied to that selected option but routing wont happen and we wont see the page corresponding to that option selected
solution:-IMP 2) "to solve the problem of point 1" we have to use Usenavigate hook and it handling function where we set the state variable for the styling we also set routing using useNavigate hook
Problem occured in point 2:- using this i got an error of the saying useNavigate must be descendant of the Router[Browser router] as previously we were Router[BrowserRouter as Router]
in the return (..........some code) of this page [check previous commit Router is wrapping all the things inside the return(.......) of the MainPage.js]
solution:- to solve this we have to use Router [BrowserRouter as Router] in the App.js which Wraps the whole MainPaje.js component "check App.js"
App.js should be something like this 
<Router>
<MainPage/>
</Router> 
**/

const MainPage = () => {
    // const classes = useStyles();
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false)  // state variable for suboption visibilty of the Panel option in overview section
    const [selectedOption, setSelectedOption] = React.useState(null);     //state for 'overview' section options   
    const [selectedSubOption, setSelectedSubOption]=React.useState(null)  //state for Panel suboptions in 'overview' section
    //this will handle visibilty of the suboptions for Panel option in 'overview' section
    const [selectedUsageOption, setSelectedUsageOption]= React.useState(null)  // state for 'usage' section
    function handleClick(e,optionIndex) {
      e.preventDefault()
      setOpen(!open)   // for toggling the visibilty of the suboptions of the Panel
      setSelectedOption(optionIndex) 
      setSelectedSubOption(null) // when user click on the Panel option in the 'overview' section make sure to set setSelectedSubOption to null
      //as this will remove the styling for the suboptions[if this line was not written then if user click on panel option then select any suboption ->
      // now again if user click on the Panel option the suboption will be hidden but the selected styling for the suboption wont get removed]
      setSelectedUsageOption(null) // set 'selectedUsageOption' state variable to null so that it removes the styling from the option from the 'usage' section if previously selecte
      navigate(`/${overview[optionIndex].text.toLowerCase()}`);  // do the routing to the selected option [Panel option]
    }
    const handleSubOptionClicked=(e,index,subOptionIndex)=>{
      e.preventDefault()
      setSelectedOption(null)  // this line removes the styling from the option when the user selects the any suboption from the Panel Option 
      //as we need to see the styling on the selected suboption only if we did not write this line then 'selectedOption' state variable would have some previous value 
      //of the previously selected option[value stored in 'selectedOption' state variable is the 'index' of the option]
      setSelectedSubOption(subOptionIndex) // store index of the suboption to selectedSubOption to set the styling to the suboption selected
      setSelectedUsageOption(null) // set 'selectedUsageOption' state variable to null so that it removes the styling from the option from the usage section if previously selecte
      navigate(`/panel/${overview[index].subOptions[subOptionIndex].text.toLowerCase()}`) // do the routing to the selected suboption
    }
   const handleOptionClicked=(e,optionIndex)=>{
    // e.preventDefault()
    setSelectedOption(optionIndex)  // store the index of the option in 'selectedOption' state variable to give the styling to selected option
    setSelectedSubOption(null) // make sure to set 'selectedSubOption' state variable to null this remove the styling from the suboptions if it was previously selected by user
    setSelectedUsageOption(null) // set 'selectedUsageOption' state variable to null so that it removes the styling from the option from the usage section if previously selecte
    navigate(`/${overview[optionIndex].text.toLowerCase()}`); // do the routing to the selected option
   } 
  //--------------handling state variable for usage section for the styling--------------------------//
  const handleUsageOptionClicked=(e,usageIndex)=>{
    e.preventDefault()
    setSelectedUsageOption(usageIndex)
    setSelectedOption(null)
    setSelectedSubOption(null)
    navigate(`/${usage[usageIndex].text.toLowerCase()}`)
  }
  //--------------handling state variable for usage section for the styling--------------------------//

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
 
    const drawer = (
      <div>
        <Toolbar >
            <Typography sx={style.ledger}>Ledgers</Typography>
        </Toolbar>
       
        <List sx={{display:'flex', flexDirection:'column',}}>
        <Typography sx={style.overview}>OVERVIEW</Typography>
          {overview.map((data, index) => (
            data.text!=='Panel'?
            (<ListItem key={data.text} disablePadding sx={selectedOption===index?style.listItemSelected:style.listItem}>
            <ListItemButton onClick={(e)=>handleOptionClicked(e,index)}>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                <img src={data.image}/>
              </ListItemIcon>
              <ListItemText><Typography sx={selectedOption===index?style.listItemTextSelected:style.listItemText}>{data.text}</Typography></ListItemText>
            </ListItemButton>
          </ListItem>):(
            <div key={data.text}>
            <ListItem key={`${data.text}-${index}`} disablePadding sx={selectedOption===index?style.listItemSelected:style.listItem}>
            <ListItemButton onClick={(e)=>handleClick(e,index)} to={`/${data.text.toLowerCase()}`}>
            <ListItemIcon>
              <img src={data.image}/>
            </ListItemIcon>
            <ListItemText><Typography sx={selectedOption===index?style.listItemTextSelected:style.listItemText}>{data.text}</Typography></ListItemText>
          </ListItemButton>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
          <Divider/>
          <List>
          {data.subOptions.map((subOption,subIndex)=>(
            <ListItem key={`${subOption.text}-${subIndex}`} sx={selectedSubOption===subIndex?style.listItemSelected:style.listItem} >
              <ListItemButton component={Link} onClick={(e)=> handleSubOptionClicked(e,index,subIndex)} >
              <ListItemText><Typography sx={selectedSubOption===subIndex?style.subItemTextSelected:style.subItemText}>{subOption.text}</Typography></ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          </List>
          </Collapse>
          </div>
          ) 
          ))}
        </List>
        <Typography sx={style.usage}>USAGE</Typography>
        <List>
          {usage.map((data, index) => (
            <ListItem key={data.text} disablePadding sx={selectedUsageOption===index?style.listItemSelected:style.listItem}>
              <ListItemButton onClick={(e)=>handleUsageOptionClicked(e,index)}  >
                <ListItemIcon>
                  <img src={data.image}/>
                </ListItemIcon>
                <ListItemText><Typography sx={selectedUsageOption===index?style.listItemTextSelected:style.listItemText}>{data.text}</Typography></ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    );
    
  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* Navbar and sidebar starts */}
      <Navbar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}/>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* Navbar and sidebar end */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p:3, width: { sm: `calc(100% - ${drawerWidth}px)`}, border:'2px solid orange',mt:'68px' }}
      >
        {/* <Toolbar/> */}
        <Routes>
          <Route path='/banks' element={<BanksPage navigate={navigate}/>} />
          <Route path='/analytics' element={<Analytics navigate={navigate}/>} />
          <Route path='/panel/:panelId' element={<Panel navigate={navigate}/>}/>
          <Route path='/withdraw' element={<WithdrawPage navigate={navigate}/>} />
          <Route path='/deposit' element={<Deposit navigate={navigate}/>} />
          <Route path='/credit/loans' element={<CreditLoan navigate={navigate}/>} />
          <Route path='/expense' element={<Expense navigate={navigate}/>} />
          <Route path='/banktransfer' element={<BankTransfer navigate={navigate}/>} />
          <Route path='/settle' element={<Settle navigate={navigate}/>} />
          <Route path='/roles' element={<Roles navigate={navigate}/>} />
        </Routes>
      </Box>
    </Box>

  )
}

export default MainPage