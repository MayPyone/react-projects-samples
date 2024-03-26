import { useEffect, useState } from "react"

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color ,setColor] = useState ('black');

    function randomUtilityColor(lenght){
        return Math.floor(Math.random()* lenght)
    }

    function handleGenerateHexColor () {
    let hexColor = "#";
    const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    for (let i =0 ; i<6; i++) {
        hexColor += randomUtilityColor(hex.length);
    }

    setColor(hexColor);
    }

    function handleGenerateRgbColor () {
    const r = randomUtilityColor(256);
    const g = randomUtilityColor(256);
    const b = randomUtilityColor(256);
    setColor(`rgb(${r},${g},${b})`);
    }
    
   useEffect (()=>{
    if (typeOfColor==="rgb") handleGenerateRgbColor();
    else handleGenerateHexColor();
   },[typeOfColor]) 
    return (
        <div style={
            {
                width: "100vw",
                height: "100vh",
                background: color,
            }
        }>
            <button onClick={()=>{setTypeOfColor("hex")}}>Create HEX color</button>
            <button onClick={()=>{setTypeOfColor("rgb")}}>Create RGB color</button>
            <button onClick={typeOfColor === "hex" 
            ?
            handleGenerateHexColor
            :
            handleGenerateRgbColor
            }
            >Generate Random Color</button>
             <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
        }}
      >
        <h3>{typeOfColor === "hex" 
        ?
        "HEX"
        :
        "RGB"
        }</h3>
        <div>{color}</div>
      </div>
        </div>
    )
}