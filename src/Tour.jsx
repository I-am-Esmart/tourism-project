import React from "react"

const Tour = ({ id, name, info, price }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="imag" />
      <span className="tour-price"> ${price} </span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p> {info} </p>
      </div>
    </article>
  )
}

export default Tour
