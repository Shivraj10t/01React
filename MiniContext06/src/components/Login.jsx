import { useContext, useState } from "react";
import UserContext from "../contexts/User/UserContext";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({userName,password})
  };
  return (
    <div style={{ backgroundColor: "#21212121", padding: "20px" }}>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <br></br>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Login;
