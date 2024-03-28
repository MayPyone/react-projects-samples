import { useEffect, useState } from "react"
import './style.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
export default function ImageSlider({url, limit=5}){

    const [currentImg, setCurrentImg] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    async function getImage(getUrl) {
    try {
    const data =  await fetch(`${getUrl}?page=1&limit=${limit}`);
    const result = await data.json();
    setCurrentImg(result.products);
    }
    catch(error){
        console.error('Error fetching data:', error);
    }
    }

    function handleLeft() {
      setCurrentSlide(currentSlide === 0 ? currentImg.length-1 : currentSlide-1)
    }

    function handleRight() {
      setCurrentSlide(currentSlide ===currentImg.length-1 ? 0 : currentSlide+1 )
    }

    useEffect(()=>{
        if(url!=="") getImage(url);
    },
    url)

    console.log(currentImg.length-1);
    return ( 
        <div className="container">
            <BsArrowLeftCircleFill 
             className="arrow arrow-left"
             onClick = {handleLeft}
            />
            {currentImg && currentImg.length ?
            currentImg.map((imgUrl,index)=>(
                
                <img
                   key= {index}
                   className= {currentSlide === index ? "current-image" : "hide-image"}
                   src= {imgUrl.thumbnail}
                />
                
                
            ))
            :
            null
            }

            <BsArrowRightCircleFill 
             className="arrow arrow-right"
             onClick={handleRight}
            />

            <div className="circle">
                {currentImg && currentImg.length ?
                 currentImg.map((_,index)=>(
                 <button key={index} className={currentSlide === index ? "active": "inactive"}></button>
                 ))
                 :
                 null
                }
            </div>
          
        </div>
    )
}