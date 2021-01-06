import {React,Component} from 'react';
import {WaterSealCard,ChemicalSealCard,OilSealCard} from './ProductCard';

export class Show extends Component{
  constructor(){
     super();
    this.state={
        show:false
    }
   handleClickShow=()=>{
        this.setState({show:true})
      }
      handleClickHide=()=>{
          this.setState({show:false})
      }  
}
 
 render(){
     return(
         <div>
           <WaterSealCard show={this.state.show} handleClickShow={this.handleClickShow()} 
                          handleClickHide={this.handleClickHide()} />
          <ChemicalSealCard show={this.state.show}
                            handleClickShow={this.handleClickShow()} 
                            handleClickHide={this.handleClickHide()} />
          <OilSealCard show={this.state.show} 
                       handleClickShow={this.handleClickShow()} 
                       handleClickHide={this.handleClickHide()}/>
         </div>
          );
      }
}; 
