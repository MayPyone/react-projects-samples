import { useState } from "react"

export default function TabContainer({totalTabs}) {
    const [tabIndex, setTabIndex] = useState(0);

    function handleIndex(index){
        setTabIndex(index)
    }

    return(
        <div className="container" style={{cursor: "pointer"}}>
        <div>
          {totalTabs.map((tab,index)=> (<span className={`tabgroup ${index===tabIndex? "active" : ""}`} onClick={() => handleIndex(index)}>{tab.label}</span>))}
         </div>

         <div>
            {totalTabs[tabIndex] && <div>{totalTabs[tabIndex].content}</div>}
         </div>
        </div>

    )
}