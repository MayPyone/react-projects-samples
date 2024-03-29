import { useEffect, useState } from 'react'
import './style.css'
export default function LoadMoreData(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [disableButton, setDisableButton] = useState(false);
    const [count, setCount] = useState(0);

    async function fetchProducts(){
        try{
            setLoading(true);
        const response = await fetch(` https://dummyjson.com/products?limit=20&skip=${count===0 ? 0: count*20}`)
        const result = await response.json();
        if (result && result.products && result.products.length) {
            setLoading(false);
            setProducts((prevData)=>[...prevData,...result.products])
        }
    }
    catch(error){
        console.log(error);
      setLoading(false);
    }

    }

    useEffect(()=>{
        fetchProducts();
    },[count])
    
    useEffect(()=>{
        if(products && products.length === 100) setDisableButton(true);
    },[count])

    console.log(products.length);
    return(
        <div className="load-more-container">
      <div className="product-container">
            {loading?
            <div>Loading...</div>
            :
             products && products.length ?
              products.map((product,index)=>(
               <div className='product' key={index}> <img src = {product.thumbnail}/>
                     <div> {product.title} </div>
                     <div> {product.id} </div>
                </div>
              ))
            :
            null
            }
            </div>
          <div className="button-container">
            <button disabled= {disableButton} onClick={()=>{setCount(count+1)}}>Load more data..</button>
            {disableButton ? <p>You have reached to 100 products</p> : null}
          </div>

        </div>
    )
}