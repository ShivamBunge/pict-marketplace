import React, { useState } from "react";
import sData from "./sData";
import Cardx from "./Cardx";
const Marketplace = () => {
  const [data, setData] = useState(sData);
  const filterRes = (item) => {
    const res = sData.filter((cur) => {
      return cur.category === item;
    });
    setData(res);
  }
  return (
    <>
      <h2 className="heading">
        <button className="btn btn-lg btn-primary mx-2" onClick={() => filterRes('cs')}>Computer Science</button>
        <button className="btn btn-lg btn-primary mx-2" onClick={() => filterRes('entc')}>Electronics & Telecomm</button>
        <button className="btn btn-lg btn-primary mx-2" onClick={() => filterRes('IT')}>IT</button>
        <button className="btn btn-lg btn-primary mx-2" onClick={() => filterRes('EM')}>Engineering Material</button>
        <button className="btn btn-lg btn-primary mx-2" onClick={() => filterRes('other')}>Others</button>
        <button className="btn btn-lg btn-primary mx-2" onClick={() => setData(sData)}>All</button>

      </h2>
      <div className="cardbox">
        {data.map(function ncard(val) {
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
      {/* -------------- */}



    </>
  );
};

export default Marketplace;
