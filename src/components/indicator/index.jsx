import { useEffect, useState } from "react";
import "./scroll.css";

export default function ScrollIndicator({ url }) {
const [data, setData]= useState('');
const [error,setError] = useState('');
const [scrollPercentage, setScrollPercentage] = useState(0);

async function  fetchData(){

    try{
        const response= await fetch(url);
        const product = await response.json();
        setData(product.products);
    }catch(error){
     setError(error);
    }
}

function handleScroll (){
    console.log("hi");
    const height = document.documentElement.scrollHeight-document.documentElement.clientHeight;
    setScrollPercentage ((document.documentElement.scrollTop/height)*100);
}
useEffect(() => {
    fetchData();
}
,[url])

useEffect (()=>{
window.addEventListener("scroll",handleScroll);

return (window.removeEventListener("scroll",()=>{}))
},[])

const yone = 12;

console.log(data);
  return (
    <div>
    <div className="top-container">
    <div className="scrollbar" style={{background: "yellow", height: "20px", width: "100%"}}>
        <div className="indicator" style={{background: "green", width: `${scrollPercentage}%` , height: "20px"}}>{Math.floor(scrollPercentage)}%</div>
    </div>
    </div>
     <div>
        {data && data.length > 0 ?
         data.map((item)=><div>{item.title}</div>) 
         : 
         <div>No data found</div>}
     </div>
    </div>
  );
}