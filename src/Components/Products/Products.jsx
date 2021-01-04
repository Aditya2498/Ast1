import React from 'react';
import { Productlist } from './Productlist';
import {OilsealData, ProductData,ChemicalData} from './ProductData.jsx';


export const Products =()=>(
     <div>
     <Productlist ProductData={ProductData} OilsealData={OilsealData} ChemicalData={ChemicalData} />
     </div>
    )
