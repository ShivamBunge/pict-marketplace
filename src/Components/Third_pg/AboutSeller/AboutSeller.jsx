import React from 'react';
import '../AboutSeller/aboutSeller.css';
const AboutSeller = () => {
  return (
    <section className='container content'>
    <div>
        <h4>About The Seller</h4>
    </div>
      <div className='img-content'>
        <div>
          <img
            className='image'
            src='https://images.unsplash.com/photo-1597241250411-624976eacf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
            alt=''
          />
        </div>
        <div className='sname'>
          <div>Name of seller</div>
          <div>⭐⭐⭐⭐⭐</div>
        </div>
      </div>
      <div className='boxed'>
          <p className='para'>
              Lorem ipsum dolor sit amet.
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quas?
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, provident.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad harum cum asperiores optio enim.
          </p>
      </div>

      <hr/>
    </section>
  );
}

export default AboutSeller;