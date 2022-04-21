import React from "react";
import sData from './sData';
import Card from './Card';
const Top_services = () => {
  return(    
  <>
  <h2 className='heading'>Top Service Providers</h2>
  <div className='cardContainer'>
  {sData.map(function ncard(val){  //can use arrow function as well
       return <Card
       key={val.id}
       title={val.sname}
       description={val.descrip}
       img={val.imgsrc}          
       />
  })}
  </div>
  </>
  );
};



export default Top_services;
