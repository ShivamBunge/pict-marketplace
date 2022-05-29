import React from "react";
import './top_service.css';
const size={ width: "15rem"};

function Cardx(props) {
    return(
    <>
   
    <div className="cardx" style={size}>
        <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-text">{props.description}.</h6>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>

    </div>
    
    </>
    )
}
export default Cardx;