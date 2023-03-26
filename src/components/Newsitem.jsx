import React from "react";

export default function Newsitem(props) {
  return (
    <>
      <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={props.image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.link} target="_blank" className="btn btn-sm btn-info">Read more</a>
  </div>
</div>
    </>
  )
}