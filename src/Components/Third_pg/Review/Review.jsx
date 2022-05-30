import React from 'react';
import '../Review/review.css'
const Review = () => {
  return (
    <section className='container'>
       <h4 className='title'>Review</h4>
      <div className='content-div'>
        <div className='circle-div'>
          <div>
            <img
              src='https://images.unsplash.com/photo-1597241250411-624976eacf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
              alt='dummy image' className='im'
            />
          </div>
          <div className='heading'>Abcd</div>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            officia tempore praesentium tenetur iste culpa, atque itaque. Esse,
            animi voluptatem laboriosam dolorum accusantium libero dignissimos
            
          </p>
        </div>
      </div>
      <div className='content-div'>
        <div className='circle-div'>
          <div>
            <img
              src='https://images.unsplash.com/photo-1597241250411-624976eacf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
              alt='dummy image' className='im'
            />
          </div>
          <div className='heading'>lorem</div>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            officia tempore praesentium tenetur iste culpa, atque itaque. Esse,
            animi voluptatem laboriosam dolorum accusantium libero dignissimos
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default Review;
