export const styles=()=>({
    cardContainer:{
        width:'98%',
        border:'2px solid green', 
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    card:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        width:'12%',
        height:'90%',
        borderRadius:'16px',
        boxShadow:3,
        padding:3
    },
    titleBox:{
        display:'flex',
        justifyContent:'space-between',
        border:'2px solid black',
        width:'100%',
        alignItems:'center'
    },
    loanOrCreditTitleBox:{
        display:'flex',
        justifyContent:'space-between',
        border:'2px solid black',
        width:'92%',
        alignItems:'center'
    },
    text:{
        fontFamily:'Public Sans',
        fontWeight:600,
        lineHeight:'22px',
        fontSize:'14px',
        color:'#212B36'
    },
    todayText:{
         //styleName: Components/Nav/ItemBase/Active;
         fontFamily: 'Public Sans',
         fontSize: '12px',
         fontWeight: '600',
         lineHeight: '22px',
         letterSpacing: '0px',
         textAlign: 'left',
         color:'#00B8D9'
    },
    rateBox:{
        display:'flex',
        border:'2px solid green',
        alignItems:'center'
    },
    rateText:{
        //styleName: Desktop/H4;
        fontFamily: 'Public Sans',
        fontSize: '26px',
        fontWeight: '700',
        lineHeight: '36px',
        letterSpacing: '0px',
        textAlign: 'left',
    },
    rateGreenTextGradient:{
        fontFamily: 'Public Sans',
        fontSize: '26px',
        fontWeight: '700',
        textAlign: 'left',
        background: 'linear-gradient(135deg, #22C55E 0%, #118D57 100%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    },
    rateRedTextGradient:{
        fontFamily: 'Public Sans',
        fontSize: '26px',
        fontWeight: '700',
        textAlign: 'left',
        background: 'linear-gradient(135deg, #FF5630 0%, #B71D18 100%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    },
    descriptionBox:{
        display:'flex',
        border:'2px solid black',
        justifyContent:'space-between', 
        width:'85%',
        alignItems:'center'
    },
    percentageText:{
        fontFamily: 'Public Sans',
        fontSize: '18px',
        fontWeight: '600',
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign: 'left',
        color:'#212B36'
    },
    lastWeekText:{
        fontFamily: 'Public Sans',
        fontSize: '15px',
        fontWeight: '400',
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign: 'left',
        color:'#637381'
    },
    depositText:{
        //styleName: Desktop/H4;
        fontFamily: 'Public Sans',
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '36px',
        letterSpacing: '0px',
        textAlign: 'left',
    },
    tableDataText:{
        fontFamily: 'Public Sans',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '22px',
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
    filterButton:{
        textTransform:'none',width:'94px',
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
        fontWeight: '600',
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign: 'center',
    },
    addDepositButton:{
    position:'relative',
    marginLeft:'10px',
    textTransform:'none',
    width:'170px',
    height:'40px',
    // padding: '4px 4px 4px 4px',
    borderRadius: '8px',
    border: '1px',
    gap: '4px',
    background:'#919EAB14',
    '&:hover':{
    background:'grey'
    }
   },
   addDepositButtonText:{
    //styleName: Components/Button/TextSmall;
    fontFamily: 'Public Sans',
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '22px',
    letterSpacing: '0px',
    textAlign: 'left',
    color:'#212B36'
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