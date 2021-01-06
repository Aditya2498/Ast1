import React from 'react';
import {ProductShow} from './ProductShow';
import {OilSealData, WaterSealData,ChemicalSealData} from './ProductData.jsx';


export const Products =()=>(
     <div>
     <ProductShow WaterSealData={WaterSealData} ChemicalSealData={ChemicalSealData} OilSealData={OilSealData} />
     </div>
    )
