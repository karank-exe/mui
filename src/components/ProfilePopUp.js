import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
const ProfilePopUp = () => {
  return (
    <Box sx={{width:'100px', border:'2px solid black', borderRadius:'8px',background:'white'}}>
        <Typography sx={{//styleName: Desktop/Body2;
        fontFamily: 'Public Sans',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign: 'left',
        color:'black',
        textAlign:'center',
        cursor:'pointer'
}}>Logout</Typography>
    </Box>
  )
}

export default ProfilePopUp