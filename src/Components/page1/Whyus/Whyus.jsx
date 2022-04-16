import React from 'react';
import './whyus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Whyus = () => {
  return (
    <section className='cta'>
      <div>
        <div>
          <h2>Get Professional Consultation Anytime & Anywhere</h2>
          <p className='pTitle'>Let’s Find Perfect Consultant For Your Needs</p>
        </div>
        <div className='wu'>
          <h6>#WHY US</h6>
        </div>
        <div className='content'>
          <ul style={{ padding: '30px 20px 0px' }}>
            <li>
              <h6>
                <FontAwesomeIcon icon='fa-solid fa-circle-check' /> No Bad
                Apples
              </h6>
              <p className='pbody'>
                Every Consultant on Platform is Hand-Vetted , We Constantly
                Review and Rated our Consultants to Ensure Quality on our
                Platform.
              </p>
            </li>
            <li>
              <h6>We Cater To Every Budget</h6>
              <p className='pbody'>
                Find Best Consultants at every price point. No hidden charges,
                transparent pricing.
              </p>
            </li>
            <li>
              <h6>Protected Payments, Every Time</h6>
              <p className='pbody'>
                Your payment isn't released until consultation or service is
                delivered. There’s no chance of fraud or non-delivery.
              </p>
            </li>
            <li>
              <h6>24/7 Support</h6>
              <p className='pbody'>
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
