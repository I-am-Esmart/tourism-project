import React, { useState } from "react"

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [readMore, setReadmore] = useState(false)
  console.log(info.substring(0, 200))
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price"> ${price} </span>
      <div className="tour-info">
        <h4>{name}</h4>
        <p>
          {" "}
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="read-more-btn"
            onClick={() => setReadmore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className=" delete-btn" onClick={() => removeTour(id)}>
          Not interested
        </button>
      </div>
    </article>
  )
}

export default Tour
