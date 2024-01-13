import { useContext } from "react";
import UserContext from "../contexts/User/UserContext";

 
function Profile() {
    const { user } = useContext(UserContext);
  return (
    <div style={{backgroundColor:'#21212121',padding:'20px'}}>
      UserName {user.userName}
      <br></br>
      Password {user.password}
    </div>
  )
}

export default Profile
