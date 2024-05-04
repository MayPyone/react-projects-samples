import { useState, useEffect } from "react"
import Suggest from './suggest'
import "./suggest.css"

export default function SearchUser(){
    //https://dummyjson.com/users
    const [userData, setUserData]= useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [filterUsers, setFilterUsers] = useState([]);
    const [searchParam, setSearchParam]= useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    
    async function fetchUsers(){
       
        try{
            setLoading(true);
            const response = await fetch("https://dummyjson.com/users");
            const data= await response.json();
            if(data){
                setUserData(data.users.map((item)=>(item.firstName)))
                setLoading(false);
                setError(null);
            }
        }catch(error){
            setError(error);
        }
    }

    function handleInput(event) {
    const query =event.target.value;
   
    setSearchParam(query);
    if(query.length>1){
        const data= userData.filter((user)=>(user.toLowerCase().indexOf(query.toLowerCase())>-1));
        setFilterUsers(data);
        setShowDropdown(true);
    }
    else {
        setFilterUsers([]);
        setShowDropdown(false)
    }
    
    }
    function handleClick(event){
        setSearchParam(event.target.innerText);
    }

    useEffect(()=>{fetchUsers()},[])
    
    if(loading){
        return<div>Loading...</div>
    }

    if(error){
        return <div>{error}</div>
    }
    return(
        <div>
         <input type="text" onChange={handleInput} value={searchParam}
         />
         {showDropdown && <Suggest data={filterUsers} action={handleClick} />}
        </div>
    )
}