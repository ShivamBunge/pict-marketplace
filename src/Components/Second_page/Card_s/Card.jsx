import React from "react";
import { Card, Button } from "react-bootstrap";
import "./card.css";
import Seller_img from "./../../../Assets/seller-img.svg";
import Star from "./../../../Assets/Star.svg";
import temp from "./../../../Assets/temp.svg";
import { useNavigate } from 'react-router-dom';
const Card_s = () => {
  const navigate= useNavigate();
  const thirdpg = () => {
    // 👇️ navigate to /pg3 
    navigate('/Thirdpg');
  };
  return (
    
  <>
    {/* {spcarddata
        .filter((Second_page_data) => Second_page_data.title === title)
        .map((spcarddata) => (
          <>
            {spcarddata.values((carddata, index) => (
              <div
                key={index}
                className="Student_offer_page_card_area py-4 py-lg-5 container "
              >
                <div className="row justify-content-center align-item-center">
                  <div
                    key={index}
                    className="Student_offer_card_item col-11 col-md-6 col-lg-3 mx-0 mb-4"
                  >
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={carddata.img_gig} />
                      <Card.Body>
                        <div className="seller">
                          <div className="seller-img-name">
                            <div className="simg">
                              <img src={carddata.img_seller} />
                            </div>
                            <div className="sname">{carddata.name}</div>
                          </div>
                          <div className="seller-rating">
                            <div className="rating">{carddata.star}</div>
                            <div className="star">
                              <img src={Star} />
                            </div>
                          </div>
                        </div>
                        <Card.Title>{carddata.gig_name}</Card.Title>
                        <Card.Text>{carddata.gig_description}</Card.Text>
                        <Button className="card-btn" variant="primary">
                          Buy
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                  );
                </div>
              </div>
            ))}
          </>
        ))} */}
    <div className="page_card_area  ">
      <div className="row justify-content-center align-item-center  ">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={temp} />
          <Card.Body>
            <div className="seller">
              <div className="seller-img-name">
                <div className="simg">
                  <img src={Seller_img} />
                </div>
                <div className="sname">Name of seller</div>
              </div>
              <div className="seller-rating">
                <div className="rating">5</div>
                <div className="star">
                  <img src={Star} />
                </div>
              </div>
            </div>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </Card.Text>
            <Button onClick={thirdpg} className="card-btn" variant="primary">
              Buy
            </Button>
          </Card.Body>
        </Card>
        {/* <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={temp} />
            <Card.Body>
              <div className="seller">
                <div className="seller-img-name">
                  <div className="simg">
                    <img src={Seller_img} />
                  </div>
                  <div className="sname">Name of seller</div>
                </div>
                <div className="seller-rating">
                  <div className="rating">5</div>
                  <div className="star">
                    <img src={Star} />
                  </div>
                </div>
              </div>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="card-btn" variant="primary">
                Buy
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={temp} />
            <Card.Body>
              <div className="seller">
                <div className="seller-img-name">
                  <div className="simg">
                    <img src={Seller_img} />
                  </div>
                  <div className="sname">Name of seller</div>
                </div>
                <div className="seller-rating">
                  <div className="rating">5</div>
                  <div className="star">
                    <img src={Star} />
                  </div>
                </div>
              </div>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="card-btn" variant="primary">
                Buy
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={temp} />
            <Card.Body>
              <div className="seller">
                <div className="seller-img-name">
                  <div className="simg">
                    <img src={Seller_img} />
                  </div>
                  <div className="sname">Name of seller</div>
                </div>
                <div className="seller-rating">
                  <div className="rating">5</div>
                  <div className="star">
                    <img src={Star} />
                  </div>
                </div>
              </div>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button className="card-btn" variant="primary">
                Buy
              </Button>
            </Card.Body>
          </Card> */}
      </div>
    </div>

  </>
  );
};

export default Card_s;
