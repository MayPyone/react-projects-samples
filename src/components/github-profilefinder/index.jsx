import { useEffect, useState } from "react"
import  User  from "./userProfile"
export default function FethUserData(){
    const [userData, setUserData] = useState(null)
    const [userName, setUserName] = useState("MayPyone")

    async function fetchData() {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();
        setUserData(data);
    }

    function handleSubmit(){
        fetchData();
    }

    useEffect(
      ()=> {
        fetchData()
      }
    ,[])
    return(
        <div>
            <input type="text" onChange={(event)=>setUserName(event.target.value)}
             placeholder="Enter User Name.."
            />
            <button onClick={handleSubmit}>Search</button>
            {userData 
            ?
            <User avatar_url={userData.avatar_url} bio={userData.bio} followers={userData.followers} following={userData.following} login={userData.login} location={userData.location} />
            :
            <div>The user is not provided</div>
        }
            
        </div>
    )
}