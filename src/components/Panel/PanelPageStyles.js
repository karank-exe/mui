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
        border:'2px solid black',
        width:'100%',
        height:'150px',
        display:'flex',
        gap:'10px', 
    },
    card:{
        width:'30%',
        height:'100%',
        border:'2px solid red',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
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
})