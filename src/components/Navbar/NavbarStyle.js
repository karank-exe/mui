export const styles=()=>({
editAddbutton:{
width: '101px',
height: '30px',
padding: '4px 8px 4px 8px',
borderRadius: '8px',
gap: '8px',
ml:2,
background: '#919EAB14',
//styleName: Components/Button/TextSmall;
fontFamily: 'Public Sans',
fontSize: '13px',
fontWeight: '700',
lineHeight: '22px',
letterSpacing: '0px',
textAlign: 'center',
color:'black',
textTransform:'none',
'&:hover':{
    background:'grey'
}
},
bellBox:{
    border:'2px solid black', 
    display:'flex', 
    justifyContent:'center',
    position:'relative',
},
bellBoxBadge:{
    width:'20px', 
    height:'20px', 
    background:'#FF5630', 
    borderRadius:'50%',
    position:'absolute', 
    top:'-12px', 
    right:'-8px', 
    color:'white', 
    display:'flex', 
    justifyContent:'center', 
    alignItems:'center'     
},
avatarImg:{
    borderRadius:50, 
    marginLeft:'10px',
},
statusImg:{
    position:'absolute',
    marginLeft:'55px',
    bottom:2
}   
})