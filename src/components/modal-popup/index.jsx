import { useState } from "react"
import ModalPopUp from "./modal";
import "./modal.css"

export default function Container(){
    const [showModal, setShowModal] = useState(false);

    function handleModel(){
        setShowModal(!showModal);
    }

    function onClose(){
        setShowModal(false);
        console.log(showModal);
    }
    return(
        <div><button className="showbutton"onClick={handleModel}>Show More</button>
        {showModal && <ModalPopUp header={"May's Cafe"} body={"If any queries, You can reach  out to me!"} footer={"Bon your appetite!"} close={onClose}/>}
        </div>
    )
}