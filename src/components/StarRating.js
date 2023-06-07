import Star from "./Star";
import {useState} from 'react';

const ratingText = ['No Rating', 'Very Bad', 'Bad', "Good", "Very Good", "Terrific"]

function StarRating(){
  const [rating, setRating] = useState(0);
  const [text, setText] = useState(null);

  const handleText=(id)=>{
    setText(ratingText[id]);
  }

  const handleClick=(event)=>{
    handleText(event.target.id)
    setRating(event.target.id)
    console.log(rating)
  }

  return(
    <div className = 'starRating flexbox'>
      <div className="stars flexbox">

        {[...Array(5)].map((star, i) => {
          return(
            <Star
            key = {i}
            id={i + 1}
            text= {ratingText[i]}
            setRating={handleClick}
            color= {i < rating ? "#FFE203" : "#565656"}
            />
          )
        })}
      </div>
      <div className="ratingText">
        <h2>{text ?? ratingText[0]}</h2>
      </div>
    </div>
    )
}

export default StarRating;