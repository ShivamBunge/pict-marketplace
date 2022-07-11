import React from "react";
import './top_service.css';

function Cardx(props) {
    return (
        <>
            <div className="flip-card-container" style={{ "--hue": 220 }}>
                <div className="flip-card">
                    <div className="card-front">
                        <figure>
                            <div className="img-bg"></div>
                            {/* <img src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Brohm Lake" /> */}
                            <figcaption>Brohm Lake</figcaption>
                        </figure>

                        <ul>
                            <li>Name is {props.title}</li>
                            <li>{props.description}</li>
                            <li>Detail 3</li>
                            <li>Detail 4</li>
                            <li>Detail 5</li>
                        </ul>
                    </div>

                    <div className="card-back">
                        <figure>
                            <div className="img-bg"></div>
                            <img src={props.img} alt="Brohm Lake" />
                        </figure>

                        <button>Contact</button>

                        <div className="design-container">
                            <span className="design design--1"></span>
                            <span className="design design--2"></span>
                            <span className="design design--3"></span>
                            <span className="design design--4"></span>
                            <span className="design design--5"></span>
                            <span className="design design--6"></span>
                            <span className="design design--7"></span>
                            <span className="design design--8"></span>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}
export default Cardx;