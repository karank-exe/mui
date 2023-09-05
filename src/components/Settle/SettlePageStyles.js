export const styles=()=>({
    cardContainer:{
        width:'100%',
        border:'2px solid green', 
        display:'flex',
        justifyContent:'space-between',
    },
    card:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        width:'18%',height:'220px',
        borderRadius:'16px',
        boxShadow:3,
        padding:2,
        overflow:'hidden'
    },
    titleBox:{
        display:'flex',
       // justifyContent:'space-between',
        border:'2px solid black',
        width:'106%',
        alignItems:'center'
    },
    loanOrCreditTitleBox:{
        display:'flex',
       // justifyContent:'space-between',
        border:'2px solid black',
        width:'111%',
        alignItems:'center'
    },
    text:{
        fontFamily:'Public Sans',
        fontWeight:600,
        lineHeight:'22px',
        fontSize:'15px',
        color:'#212B36',
        textWrap:'noWrap'
    },
    todayText:{
         //styleName: Components/Nav/ItemBase/Active;
         fontFamily: 'Public Sans',
         fontSize: '16px',
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
        gap:'5px',
        border:'2px solid black',
        //justifyContent:'space-between', 
        width:'113%',
        alignItems:'center'
    },
    percentageText:{
        fontFamily: 'Public Sans',
        fontSize: '15px',
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
    bankTransferText:{
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
        // lineHeight: '22px',
        letterSpacing: '0px',
        textAlign: 'center',
        color:'#212B36',
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
        marginLeft:'-60px',
        textAlign:'center',
        color:'#919EAB',
    },
    tablePanelText:{
        fontFamily: 'Public Sans',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign: 'left',
        color:'#212B36',
    },
    transactionAmountRedText:{
        color:'#B71D18',
        fontFamily: 'Public Sans',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign: 'center',
    },
    transactionAmountGreenText:{
        fontFamily: 'Public Sans',
        fontSize: '14px',
        fontWeight: '400',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #22C55E 0%, #118D57 100%)',            
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    },
    creditGivenBox:{
        width:'110px',
        height:'24px',
        padding: '2px 6px 2px 6px',
        borderRadius: '6px',
        gap: '6px',
        background:'#FF563029',
        marginLeft:'25%',
    },
    creditGivenText:{
        fontFamily: 'Public Sans',
        fontSize: '12px',
        fontWeight: '700',
        color:'#B71D18',
    },
    loanBorrowedBox:{
        width:'110px',
        height:'24px',
        padding: '2px 6px 2px 6px',
        borderRadius: '6px',
        gap: '6px',
        background:'#22C55E29',  
        marginLeft:'25%',
    },
    loanBorrowedText:{
        fontFamily: 'Public Sans',
        fontSize: '12px',
        fontWeight: '700',
        color:'#118D57',
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
    addBankTransferButton:{
    position:'relative',
    marginLeft:'10px',
    textTransform:'none',
    width:'190px',
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
   addBankTransferButtonText:{
    //styleName: Components/Button/TextSmall;
    fontFamily: 'Public Sans',
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '22px',
    letterSpacing: '0px',
    textAlign: 'left',
    color:'#212B36'
   },
   reasonBox:{
    display:'flex',
    justifyContent:'space-between',
    border:'2px solid green',
    alignItems:'center'
   },
   reasonEditButton:{
    width:'43px',
    height:'30px',
    borderRadius: '8px',
    background:'#919EAB14',
    minWidth:0,
    '&:hover':{
    background:'grey'
    }
   },
   reasonEditButtonText:{
    fontFamily: 'Public Sans',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight:'22px',
    textTransform:'none',
    color:'#212B36'
   }
})