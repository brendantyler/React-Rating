import { FaStar } from "react-icons/fa";
import React from "react";
import PropTypes from 'prop-types';

Star.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  color: PropTypes.string
}

function Star({
  id = 0,
  text = "No Rating",
  color = "#565656",
  setRating = f => f
}){
  return(
    <div className="star"> 
      <FaStar
        id = {id}
        text = {text}
        color= {color}
        onClick={setRating}
      />
    </div>
  )
}

export default Star;