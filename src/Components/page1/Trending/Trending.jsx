import React from 'react'
import "./trending.css";


const Trending = () => {
  return (

    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <h1 className='heading'>Explore the Trending Services</h1>
      <div className="carousel-inner">
        <div className="carousel-item active" >

          <div className="card-group">
            {/* <div className="col-sm-4"> */}

              <div className="card border-success mb-3" >
                <div className="card-header">Header 1</div>
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9apF3GjrZ4wel6m4vQ1-YyH9D-Jdp-BSPw&usqp=CAU" alt="Card image cap" />

                <div className="card-body text-success">
                  <h5 className="card-title">Success card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div><br />
            
              <div className="card border-success mb-3" >
                <div className="card-header">Header</div>
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9apF3GjrZ4wel6m4vQ1-YyH9D-Jdp-BSPw&usqp=CAU" alt="Card image cap" />
                <div className="card-body text-success">
                  <h5 className="card-title">Success card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div><br />

            <div className="card border-success mb-3" >
              <div className="card-header">Header</div>
              <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9apF3GjrZ4wel6m4vQ1-YyH9D-Jdp-BSPw&usqp=CAU" alt="Card image cap" />
              <div className="card-body text-success">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" >
          {/* <img src="..." className="d-block w-100" alt="..." /> */}
          <div className="card-group">
            <div className="card border-success mb-3" >
              <div className="card-header">Header 2</div>
              <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9apF3GjrZ4wel6m4vQ1-YyH9D-Jdp-BSPw&usqp=CAU" alt="Card image cap" />
              <div className="card-body text-success">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div><br />
            <div className="card border-success mb-3" >
              <div className="card-header">Header</div>
              <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9apF3GjrZ4wel6m4vQ1-YyH9D-Jdp-BSPw&usqp=CAU" alt="Card image cap" />
              <div className="card-body text-success">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div><br />
            <div className="card border-success mb-3" >
              <div className="card-header">Header</div>
              <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9apF3GjrZ4wel6m4vQ1-YyH9D-Jdp-BSPw&usqp=CAU" alt="Card image cap" />
              <div className="card-body text-success">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" >
          {/* <img src="..." className="d-block w-100" alt="..." /> */}
          <div className="card-group">
            <div className="card border-success mb-3" >
              <div className="card-header">Header 3</div>
              <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9apF3GjrZ4wel6m4vQ1-YyH9D-Jdp-BSPw&usqp=CAU" alt="Card image cap" />
              <div className="card-body text-success">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div><br />
            <div className="card border-success mb-3" >
              <div className="card-header">Header</div>
              <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9apF3GjrZ4wel6m4vQ1-YyH9D-Jdp-BSPw&usqp=CAU" alt="Card image cap" />
              <div className="card-body text-success">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div><br />
            <div className="card border-success mb-3" >
              <div className="card-header">Header</div>
              <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB9apF3GjrZ4wel6m4vQ1-YyH9D-Jdp-BSPw&usqp=CAU" alt="Card image cap" />
              <div className="card-body text-success">
                <h5 className="card-title">Success card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div >
  )

}

export default Trending