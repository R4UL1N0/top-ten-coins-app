import React from 'react'

export default function Cointainer(props) {
  return (
    <div className="cointainer">
        <div className="coin-content">
            <div className="image-border">
                <img src={props.image} alt="" className="src" />
            </div>
            <div className="name-sign">
                <p>{props.name} - {props.sign}</p>
            </div>
            <div>
                <p>{props.price}</p>
            </div>
        </div>
    </div>
  )
}
