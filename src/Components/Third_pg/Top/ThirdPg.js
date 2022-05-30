import React from 'react';
import dummy from '../../../Assets/page3Asset/dummy.png'
import UserIcon from '../../../Assets/page3Asset/user-icon.png';
import './page3.css';

const ThirdPg = () => {
  return (
    <section className='container'>
      <div className='row'>
        <div className='col-sm'>
          <div className='row'>
            <div className=' JobTitle col-sm  align-content-lg-end mb-sm-0'>
              <h1 className='font'>Tittle of the job. Lorem here Lorem here</h1>
              <br />
            </div>
            <div className=' col-sm-4 me-sm-5'>
              <div class='input-group mt-4 my-4 p-sm-5'>
                <input
                  type='search'
                  class='form-control rounded'
                  placeholder='Search'
                  aria-label='Search'
                  aria-describedby='search-addon'
                />
                <button type='button' class='btn btn-primary'>
                  search
                </button>
              </div>
            </div>
          </div>

          <div className='row w-100'>
            <div className='align-content-lg-end  w-75 col-sm '>
              <div className='Usericon'>
                <img src={UserIcon} className='rounded-circle' alt='UserImg' />
                <p className=' usericon align-self-center mx-3'>
                  <strong>Ganesh Kothawade</strong>
                </p>
                <p className=' userlevel align-self-center mx-2'>
                  Level of seller
                </p>
                <p className=' userrating align-self-center mx-2'>4.9 ★</p>
              </div>
              <br />
              <div className='w-100'>
                <img
                  src={dummy}
                  className='img-fluid'
                  alt='pic'
                />
              </div>
            </div>
            <div className='col-sm'>
              <br />
              <div className='TitleDetails square border border-dark solid m-lg-5 w-74 p-4 fixed-right '>
                <div className='Testbox p-1'>
                  <h4 className='title'>All in one</h4>
                  <h4 className='price float-end ms-auto'>₹399</h4>
                </div>
                <p className='about font'>
                  <strong>
                    Details about the titles. Lorem here Lorem here
                  </strong>{' '}
                </p>

                <button className='btn-warning w-100 p-1 bg-warning border-warning'>
                  Continue
                </button>
              </div>
            </div>
          </div>
          <div className='About align-content-lg-end col-sm-6 my-4 '>
            <h2>About This Gig</h2>
            <p>
              Hi there ! Thanks for stopping by !! A Team of Talented Graphic
              Designer with 8+ years of experience in Graphic Industry,
              expertise as Logo Maker, You'll get creative & AWESOME logo design
              for your business.
            </p>

            <br />
            <h5>★ Why Us? ★</h5>
            <ul class='list'>
              <li class='list-item'>Talented Logo Maker Team</li>
              <li class='list-item'>
                Fully custom made, creative, original, UNIQUE and AWESOME
                designs Professional customer support 24/7
              </li>
              <li class='list-item'>High Quality work</li>
              <li class='list-item'>100% money back policy if not satisfied</li>
              <li class='list-item'>
                {' '}
                Vector Source Files (scalable without any quality loss) (AI,
                EPS, PDF) for the final design
              </li>
            </ul>

            <br />
            <h5>★ WHAT DO YOU GET? ★ </h5>
            <ul class='list'>
              <li class='list-item'>
                Highly Professional, UNIQUE & High Quality designs
              </li>
              <li class='list-item'>
                UNLIMITED revisions until u r 100% satisfied
              </li>
              <li class='list-item'>
                Fast turn around time 24 to 48 hours only
              </li>
              <li class='list-item'>
                100% original & unique vector design from Adobe Illustrator
              </li>
              <li class='list-item'>
                Vector Source Files (scalable without any quality loss) (AI,
                EPS, PDF) for the final design
              </li>
              <li class='list-item'>
                PROFESSIONAL Communication & Outstanding Customer Support{' '}
              </li>
              <li class='list-item'> Guaranteed High Quality work</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className='style1 border-top-1 solid' style={{ color: 'black' }}></hr>
    </section>
  );
};

export default ThirdPg;
