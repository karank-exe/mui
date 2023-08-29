export const styles=()=>({
    RolesButton:{
    display:'flex',
    justifyContent: 'space-between',    
    width: '315px',
    height:'50px',
    padding: '16px 14px 16px 14px',
    borderRadius: '8px',
    gap: '8px',
    border: '1px solid #919EAB33',
    background:'white',
    textTransform:'none',
    mt:'10px',
    '&:hover':{
        background:'grey'
    }
    },
    RolesButtonText:{
    marginLeft:'-90px', 
    fontSize:'14px',
    }, 
    customRadio: {
        // color: 'orange', // Customize the color of the radio button
        '&.Mui-checked': {
          color: 'green', // Customize the color when radio is checked
        },
      },
    RadioLabel:{
        fontFamily:'Public Sans',
        fontWeight:'400',
        fontSize:'14px',
        color:'#212B36'
    }
    })