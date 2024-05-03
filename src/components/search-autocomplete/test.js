const arr=["May","Pyone","May Thet","Hnin", "PuMay"];
 const data =arr.filter((item)=>{
  console.log( item.indexOf("May")>-1)
  return item.indexOf("May")>-1
 }

)
 console.log(data);