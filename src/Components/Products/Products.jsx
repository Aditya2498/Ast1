import React from 'react';
import { Productlist } from './Productlist';
import {OilSealData, WaterSealData,ChemicalSealData} from './ProductData.jsx';


export const Products =()=>(
     <div>
     <Productlist WaterSealData={WaterSealData} ChemicalSealData={ChemicalSealData} OilSealData={OilSealData}  />
     </div>
    )
