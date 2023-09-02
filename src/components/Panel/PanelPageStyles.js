export const styles=()=>({
    panelBox:{
        border:'2px solid black',
        borderRadius:'16px',
        width:'100%',
        height:'84px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        boxShadow:'0px 7px 10px 0px #919EAB29',
        marginBottom:'10px',
    },
    settleButton:{
        textTransform:'none',
        width:'108px',
        height:'30px',
        // padding: '4px 4px 4px 4px',
        borderRadius: '8px',
        border: '1px',
        background:'#919EAB14',
        '&:hover':{
        background:'grey'
        }
    },
    settleButtonText:{
        fontFamily:'Public Sans',
        fontSize:'12px',
        fontWeight:700,
        color:'#212B36'
    },
    cardContainer:{
        // border:'2px solid black',
        width:'100%',
        height:'150px',
        display:'flex',
        gap:'20px', 
    },
    card:{
        width:'30%',
        height:'100%',
        // border:'2px solid red',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:'16px',
        boxShadow:'0px 4px 8px 0px #919EAB29',
        padding:'0px 16px 0px 16px'
    },
    tableHeadText:{
        //styleName: Desktop/Subtitle2;
    fontFamily: 'Public Sans',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '22px',
    letterSpacing: '0px',
    textAlign: 'left',
    color:'#637381',
    cursor:'pointer',
    },
    tableHeadActiveText:{
        //styleName: Desktop/Subtitle2;
    fontFamily: 'Public Sans',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '22px',
    letterSpacing: '0px',
    textAlign: 'left',
    color:'#637381',
    color:'black',
    borderBottom:'2px solid black',
    cursor:'pointer',
    },
    filterButton:{
    textTransform:'none',
    width:'94px',
    height:'40px',
    padding: '6px 12px 6px 12px',
    borderRadius: '8px',
    border: '1px',
    gap: '8px',
    marginLeft:'10px',
    background:'white',
    '&:hover':{
    background:'grey'
    }
    },
    filterButtonText:{
    color:'#919EAB',  //styleName: Desktop/Body2;
    fontFamily: 'Public Sans',
    fontSize: '14px',
    fontWeight: '400',
    letterSpacing: '0px',
    textAlign: 'center',
    },
    tableDataText:{
        fontFamily: 'Public Sans',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign: 'center',
    },
    DateText:{
        fontFamily:'Public Sans',
        fontSize:'14px',
        fontWeight:400,
        color:'#212B36',
    },
    TimeText:{
        fontFamily:'Public Sans',
        fontSize:'14px',
        fontWeight:400,
        marginLeft:'-50px',
        color:'#919EAB',
    },
    userEditButtonBox:{
        display:'flex',
        justifyContent:'space-between',
        border:'2px solid green',
        alignItems:'center'
       },
       userEditButton:{
        width:'43px',
        height:'30px',
        borderRadius: '8px',
        background:'#919EAB14',
        minWidth:0,
        '&:hover':{
        background:'grey'
        }
       },
       userEditButtonText:{
        fontFamily: 'Public Sans',
        fontSize: '14px',
        fontWeight: 600,
        lineHeight:'22px',
        textTransform:'none',
        color:'#212B36'
       }
})