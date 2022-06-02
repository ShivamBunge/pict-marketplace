import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LeftArrow from "../../../Assets/left-arrow.svg";
import RightArrow from "../../../Assets/right-arrow.svg";
import Explore_trending_data from "./Explore_trending_data";
import "./explore_trending_services.css";
const Explore_trending_services = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" className="slick-prev" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" className="slick-next" {...props} />
  );
  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div className="Explore_trending_services_area">
      <div className="container">
        <div className="Explore_trending_services_title">
          Explore trending services
        </div>
        <Slider {...settings} className="card_slider  ">
          {Explore_trending_data.map((item, index) => {
            return (
              <div key={index} className="card_slider_item">
                <Card className="card_recent_added" style={{ width: "21rem" }}>
                  <Link
                    to={"/trendin_service/" + item.title}
                    className="decoration"
                  >
                    <Card.Img
                      className="card_slider_item_img"
                      // variant="top"
                      src={item.url}
                    />
                    <div className="card_body">
                      <Card.Title className="Explore_trending_card_title">
                        {item.title}
                      </Card.Title>
                    </div>
                  </Link>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Explore_trending_services;
