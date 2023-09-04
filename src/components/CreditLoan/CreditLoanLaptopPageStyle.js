export const Laptopstyles=()=>({
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
        width:'18%',height:'200px',
        borderRadius:'16px',
        boxShadow:3,
        padding:0
    },
    titleBox:{
        display:'flex',
        justifyContent:'space-around',
        border:'2px solid black',
        width:'100%',
        alignItems:'center'
    },
    loanOrCreditTitleBox:{
        display:'flex',
        justifyContent:'space-between',
        border:'2px solid black',
        width:'100%',
        alignItems:'center'
    },
    text:{
        fontFamily:'Public Sans',
        fontWeight:600,
        lineHeight:'22px',
        fontSize:'12px',
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
        //justifyContent:'center',
        paddingLeft:'5px',
        border:'2px solid green',
        alignItems:'center'
    },
    rateText:{
        //styleName: Desktop/H4;
        fontFamily: 'Public Sans',
        fontSize: '22px',
        fontWeight: '700',
        lineHeight: '36px',
        letterSpacing: '0px',
        textAlign: 'left',
    },
    rateGreenTextGradient:{
        fontFamily: 'Public Sans',
        fontSize: '22px',
        fontWeight: '700',
        textAlign: 'left',
        background: 'linear-gradient(135deg, #22C55E 0%, #118D57 100%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    },
    rateRedTextGradient:{
        fontFamily: 'Public Sans',
        fontSize: '22px',
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
        width:'100%',
        alignItems:'center'
    },
    percentageText:{
        fontFamily: 'Public Sans',
        fontSize: '0.75rem',
        fontWeight: '600',
        textAlign: 'left',
        color:'black'
    },
    lastWeekText:{
        fontFamily: 'Public Sans',
        fontSize: '10px',
        fontWeight: '400',
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign: 'left',
        color:'#637381'
    },
    creditLoanText:{
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
        fontSize: '12px',
        fontWeight: 600,
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign: 'center',
        color:'#212B36',
    },
    DateText:{
        fontFamily:'Public Sans',
        fontSize:'11px',
        fontWeight:400,
        textWrap:'noWrap',
        color:'#212B36',
    },
    TimeText:{
        fontFamily:'Public Sans',
        fontSize:'10px',
        fontWeight:400,
        marginLeft:'-60px',
        color:'#919EAB',
    },
    transactionAmountRedText:{
        color:'#B71D18',
        fontFamily: 'Public Sans',
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign: 'center',
    },
    transactionAmountGreenText:{
        fontFamily: 'Public Sans',
        fontSize: '12px',
        fontWeight: '400',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #22C55E 0%, #118D57 100%)',            
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    },
    creditGivenBox:{
       // border:'2px solid black',
        width:'110px',
        height:'24px',
        padding: '2px 6px 2px 6px',
        borderRadius: '6px',
        // gap: '6px',
        background:'#FF563029',
        marginLeft:'0%',
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
        marginLeft:'0%',
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
    addCreditLoanButton:{
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
   addCreditLoanButtonText:{
    //styleName: Components/Button/TextSmall;
    fontFamily: 'Public Sans',
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '22px',
    letterSpacing: '0px',
    textAlign: 'left',
    color:'#212B36'
   },
   bankAccountButtonBox:{
    display:'flex',
    justifyContent:'space-between',
    border:'2px solid green',
    alignItems:'center'
   },
   bankAccountEditButton:{
    width:'43px',
    height:'30px',
    borderRadius: '8px',
    background:'#919EAB14',
    minWidth:0,
    '&:hover':{
    background:'grey'
    }
   },
   bankAccountEditButtonText:{
    fontFamily: 'Public Sans',
    fontSize: '12px',
    fontWeight: 600,
    lineHeight:'22px',
    textTransform:'none',
    color:'#212B36'
   }
})