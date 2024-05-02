import "./user.css"
export default function User({avatar_url, bio, followers, following, login, location }){
 return(
    <div>
      <img src={avatar_url} />
      <h1>{login}</h1>
      <div className="bio">{bio}</div>
      <table>
  <tr>
    <td>Location</td>
    <td>{location}</td>
  </tr>
  <tr>
    <td>Followers</td>
    <td>{followers}</td>
  </tr>
  <tr>
    <td>Following</td>
    <td>{following}</td>
  </tr>
</table>


    </div>
 )   
}