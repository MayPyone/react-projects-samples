import { useEffect, useState } from "react"
import  User  from "./userProfile"
export default function FethUserData(){
    const [userData, setUserData] = useState(null)
    const [userName, setUserName] = useState("MayPyone")
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();
        if(data){
            setUserData(data);
            setLoading(false);
        }
    }

    function handleSubmit(){
        fetchData();
        
    }

    useEffect(
      ()=> {
        fetchData()
      }
    ,[])

    if(loading){
        <div>Loading..</div>
    }

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