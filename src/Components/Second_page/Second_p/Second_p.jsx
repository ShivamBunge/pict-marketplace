import React from "react";
import Card from "../Card_s/Card";
import "./second_p.css";
import { useParams } from "react-router";
import Second_page_data from "../Second_page_data";

const Second_p = ({ data }) => {
  const params = useParams();
  const { title } = params;
  return (
    <>
      <div className="container ">
        {data
          .filter(
            (Explore_trending_data) => Explore_trending_data.title === title
          )
          .map((data, index) => (
            <>
              <div key={index} className="second-page-area">
                <div className="page-area">
                  <div className="second-page-title">{data.title}</div>
                  <div className="second-page-description">
                    {data.description}
                  </div>
                </div>
              </div>

              <div className="place-card ">
                <Card />
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default Second_p;
