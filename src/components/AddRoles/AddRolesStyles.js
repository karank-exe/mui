export const styles=()=>({
    title:{
        fontFamily: 'Public Sans',
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: '36px',
        letterSpacing: '0px',
        textAlign: 'left',
        color:'#212B36',
    },
    textFieldLabel:{
        fonFamily: 'Public Sans',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign:'left',
        color:'#919EAB'
    },
    addTransactionButton:{
        top:'8px',
        width:'95%',
        textTransform:'none',
        height:'40px', 
        fontSize:'14px',
        padding: '4px 16px 4px 16px',
        borderRadius: '8px',
        gap: '8px',
        background: '#212B36',
        //styleName: Components/Button/TextSmall;
        fontFamily: 'Public Sans',
        fontWeight: '700',
        lineHeight: '22px',
        letterSpacing: '0px',
        textAlign: 'left',
        '&:hover':{
            background:'#212B36'
        },
    },
    deletebutton:{
        textTransform:'none',
        height:'40px', 
        fontSize:'14px',
        padding: '4px 16px 4px 16px',
        borderRadius: '8px',
        gap: '8px',
        background: '#919EAB14',
        color:'black',
          //styleName: Components/Button/TextSmall;
          fontFamily: 'Public Sans',
          fontWeight: '700',
          lineHeight: '22px',
          letterSpacing: '0px',
          textAlign: 'left',
          '&:hover':{
            background:'#919EAB14'
          },
    }
})