import React from 'react';
import {Data} from '../Components/Data.jsx';
import {Cardlist} from '../Components/Cardlist.jsx';


export const home = () =>(
    <div >
     <h2 style={{color:'#284894'}}>Welcome to AST!</h2>
     <h4 style={{color:'#2F4F4F',fontFamily:"sans-serif",fontSize:"2rem"}}>Advance seals technology, are  one  of  the  most trusted  manufacturers,  importers ,  suppliers ,  exporters  &  service  providers  of Mechanical  Seals.
     </h4>
     <div>
     <p style={{fontSize:"1.2rem"}}>
     We  take  the  privilege  of  introducing  ourselves  as  one  of  the  leading 
     Manufactures Mechanical  Seals  Faces  Components  from  various  materials.   
     </p>
     <div style={{fontSize:"1.2rem"}}>
     Stainless  Steel, Carbon  , TC , Ceramic , Silicon  Carbide , PTFE , CFT , Stellite ,
     GFT parts  used  for various   Industries  i.e. Waste  Water,  Onshore,  Offshore, 
     Chemical  &  Petrochemical, Refinery,  Pulp  &  Paper ,  Compressor ,  Hot Water ,  Marine ,  Sugar , 
     Pharmaceutical,  Textiles  Compressor , Quarrying  &  Coal  Mining  etc.  as  per  Client  Drawings 
     and requirement.
     </div>    
     <Cardlist Data={Data}  />
     </div>

    </div>
)