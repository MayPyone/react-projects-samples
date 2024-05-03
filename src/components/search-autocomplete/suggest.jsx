export default function Suggest({data,action}){
    return(
        <ul>
            {data.map((user)=> (<li  onClick={action}>{user}</li>))}
        </ul>
    )
}