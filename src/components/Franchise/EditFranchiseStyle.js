export const styles=()=>({
    main:{
        display:'flex', 
        flexDirection:'column',
        alignItems:'center', 
        width:'372px', 
        height:'296px', 
        borderRadius:'16px',
        border:'2px solid grey', 
        padding:'5px 5px 0 5px',
        background:'white'
    },
    titleBox:{
        display:'flex',
        justifyContent:'space-between', 
        width:'100%', border:'2px solid red',
        position:'relative'
    },
    titleBoxText:{
        fontFamily: 'Public Sans',
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '36px',
        letterSpacing: '0px',
        textAlign: 'left',
        color:'black'
    },
    savebutton:{
        textTransform:'none',
        height:'40px', 
        fontSize:'14px',
        padding: '4px 16px 4px 16px',
        borderRadius: '8px',
        gap: '8px',
        background: '#212B36',
        mr:'15px',
        //styleName: Components/Button/TextSmall;
        fontFamily: 'Public Sans',
        fontSize: '13px',
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
          fontSize: '13px',
          fontWeight: '700',
          lineHeight: '22px',
          letterSpacing: '0px',
          textAlign: 'left',
          '&:hover':{
            background:'#919EAB14'
          },
    }
})