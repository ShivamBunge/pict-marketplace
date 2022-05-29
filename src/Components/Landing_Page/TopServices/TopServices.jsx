import React from "react";
import sData from "./sData";
import Cardx from "./Cardx";
const TopServices = () => {
  return (
    <>
      <h2 className="heading">Top Service Providers</h2>
      <div className="cardbox">
        {sData.map(function ncard(val) {
          //can use arrow function as well
          return (
            <Cardx
              key={val.id}
              title={val.sname}
              description={val.descrip}
              img={val.imgsrc}
            />
          );
        })}
      </div>
    </>
  );
};

export default TopServices;
