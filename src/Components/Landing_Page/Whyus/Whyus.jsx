import React from "react";
import "./whyus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Whyus = () => {
  return (
    <div className="whyus-area">
      <div className="container">
        <div className="Whyus-title">Why Us</div>
        <div className="whyus-body">
          <ul>
            <li>
              <div className="subtitle">No Bad Apples</div>
              <p className="whyus-pbody">
                Every Consultant on Platform is Hand-Vetted , We Constantly
                Review and Rated our Consultants to Ensure Quality on our
                Platform.
              </p>
            </li>
            <li>
              <div className="subtitle">We Cater To Every Budget</div>
              <p className="whyus-pbody">
                Find Best Consultants at every price point. No hidden charges,
                transparent pricing.
              </p>
            </li>
            <li>
              <div className="subtitle">Protected Payments, Every Time</div>
              <p className="whyus-pbody">
                Your payment isn't released until consultation or service is
                delivered. There’s no chance of fraud or non-delivery.
              </p>
            </li>
            <li>
              <div className="subtitle">24/7 Support</div>
              <p className="whyus-pbody">
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
