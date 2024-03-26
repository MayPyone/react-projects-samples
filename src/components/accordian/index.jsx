import { useState } from "react"
import data from './data'
import './style.css'

export default function Accordian(){
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);
    
    function singleHandleSelection (getCurrentId){
        setSelected(getCurrentId === selected ?  null : getCurrentId);
    }

    function multipleHandleSelection (getCurrentId) {
        const copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
        if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
        else  copyMultiple.splice(findIndexOfCurrentId, 1);
        setMultiple(copyMultiple);
    }

    console.log(multiple);

    return (
        <div className="wrapper">
            <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
          <div className="accordian">
            {data && data.length>0 ? (<div>
             {data.map((dataItem)=> (
                <div className='item'>
                  <div className="title" 
                 onClick={
                    enableMultiSelection ? 
                  () => {multipleHandleSelection(dataItem.id)}
                  : 
                  () => {singleHandleSelection(dataItem.id)}
                 }
                  >
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                  {
                    enableMultiSelection 
                    ?
                    multiple.indexOf(dataItem.id) !== -1 && (
                        <div className="acc-content ">{dataItem.answer}</div>
                    )
                    :
                    selected === dataItem.id && (
                        <div className="acc-content ">{dataItem.answer}</div>
                    )
                  }
                </div>
                
             ))}
            </div>) 
            : 
            (<div>No data found</div>)
            } 
          </div>
        </div>
    )
}