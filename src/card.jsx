import React from "react";

function Card(props) {
    function remove() {
        props.func(props.index);
    }
    return <div className="card">
   <div className="chead">
    <h1>
        {props.title}
    </h1>
   </div>
   <div className="cbody">
    <p>{
        props.note
    }</p>
   </div>
   <button className="delete" onClick={remove}>Delete</button>
    </div>
}
export default Card;