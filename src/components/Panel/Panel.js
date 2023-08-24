import React from 'react'
import { useParams } from 'react-router-dom'
import Panel1 from './Panel1';
import Panel2 from './Panel2';
import Panel3 from './Panel3';
import Panel4 from './Panel4';
const Panel = () => {
    const {panelId}= useParams();
    let panelContent= null;
    if (panelId==='panel1'){
       panelContent=<Panel1/>;
    }
    else if (panelId==='panel2'){
        panelContent=<Panel2/>;
     }
     else if (panelId==='panel3'){
        panelContent=<Panel3/>;
     }
     else if (panelId==='panel4'){
        panelContent=<Panel4/>;
     }
  return (
    <div>
        {panelContent}
    </div>
  )
}

export default Panel