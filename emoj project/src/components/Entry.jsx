import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Basic">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
      <button className="button"> button</button>
      <div>
        <button>tickets count</button>
      </div>
    </div>
    
    
  );
}


export default Entry;
