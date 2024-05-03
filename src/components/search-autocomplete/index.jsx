import { useState, useEffect } from "react"
import Suggest from './suggest'
import "./suggest.css"

export default function SearchUser(){
    const [userData, setUserData] = useState('');
    const [searchParam, setSearchParam]= useState(null);
    const [loading, setLoading] = useState(false);
    const [filterUsers, setFilterUsers] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    async function fetchUser(){
        setLoading(true);
        try{
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();
            if(data){
            setUserData(data.users.map((item)=>item.firstName));
            }

           

            setLoading(false);
        }catch(error){
          setLoading(false);
        }


    }

    function handleInput(event){
    const query = event.target.value;
    setSearchParam(query);
    if(query.length>1){
     console.log(query.length);
     const users= userData.filter((item) => item.toLowerCase().indexOf(query.toLowerCase()) > -1)
    console.log(users);
    setFilterUsers(users);
    }
    else {
        setFilterUsers([]);
    }
    }

    function handleClick(e){
        setSearchParam(e.target.innerText);
        console.log(e.target.innerText);
    }

    useEffect(()=>{ fetchUser()  }
    ,[])

    if(loading){
        return <div>Loading...</div>
    }

    return(
        <div>
        <input value = {searchParam} type="text" placeholder="Search users..." onChange={(e)=>{handleInput(e)}} />
        <Suggest data={filterUsers} action={handleClick}/>
        </div>
    )
}