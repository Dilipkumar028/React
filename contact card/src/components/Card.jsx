import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
        
        <div>
        <button className="button">Test</button>
        </div>
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
        <p className="info">{props.discription}</p>
        
        
      </div>
      
    </div>
    
  );
}

export default Card;
