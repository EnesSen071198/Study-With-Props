import React from 'react'
import './info.css'

function info(props) {

return (
  <div className="info">
     <h2 ><img  src={props.img} alt="" /></h2>
     <h3>Name : <span>{props.name}</span></h3>
     <h3>Lastname : <span>{props.lastname}</span></h3>
     <h3>Age : <span>{props.age}</span></h3>
     <p>About : <span>{props.about}</span></p>
 
  </div>
);
}
export default info