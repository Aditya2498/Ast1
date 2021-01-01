import React from 'react';
import { Productlist } from './Productlist';
import {OilsealData, ProductData,ChemicalData} from './ProductData.jsx';


export const Products =()=>(
     <div>
      <h1 style={{textAlign:'center',color:'#284894'}}>Water Seals</h1>
     <Productlist ProductData={ProductData} OilsealData={OilsealData} ChemicalData={ChemicalData} />
     </div>
    )
