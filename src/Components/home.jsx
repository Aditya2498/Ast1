import React from 'react';
import {Data} from '../Components/Data.jsx';
import {Cardlist} from '../Components/Cardlist.jsx';


export const home = () =>(
    <div >
     <h2 style={{color:'#284894'}}>AST</h2>
     <p >Advance seals technology”, are  one  of  the  most trusted  manufacturers ,  importers ,  suppliers ,  exporters  &  service  providers  of Mechanical  Seals.
     We  take  the  privilege  of  introducing  ourselves  as  one  of  the  leading  Manufactures Mechanical  Seals  Faces  Components  from  various  materials  i.e.  Stainless  Steel, Carbon  , TC , Ceramic , Silicon  Carbide , PTFE , CFT , Stellite , GFT parts  used  for various   Industries  i.e. Waste  Water,  Onshore,  Offshore,  Chemical  &  Petrochemical, Refinery,  Pulp  &  Paper ,  Compressor ,  Hot Water ,  Marine ,  Sugar ,  Pharmaceutical,  Textiles  Compressor , Quarrying  &  Coal  Mining  etc.  as  per  Client  Drawings  and requirement.
     </p>
     <div  >
     <Cardlist Data={Data}  />
     </div>

    </div>
)