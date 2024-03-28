import { useState } from "react";
import {FaStar} from "react-icons/fa";
import './style.css'

export default function StarRating({noOfStars = 5}){
   const [rating, setRating] = useState(0);
   const [hover, setHover] = useState(0);

   function handleClick (getCurrentId) {
    setRating(getCurrentId);
   }

   function mouseMove (getCurrentId) {
     setHover(getCurrentId)
   }

   function mouseLeave () {
    hover(rating);
   }

    return (
        <div className="star-rating">
          {[...Array(noOfStars)].map((_, index) => {
            index +=1;
         return(
            <FaStar
            key = {index}
            className={index <= (rating || hover) ? "active" : "inactive"}
            onClick={()=> handleClick(index)}
            onMouseMove= {() => mouseMove(index)}
            onMouseLeave={()=>mouseLeave}
            size={50}
            />
         )
        })}

        <div>You got {rating} stars</div>

        </div>
    )
}