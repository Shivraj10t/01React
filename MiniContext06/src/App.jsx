 
import Login from "./components/Login";
import UserContextProvider from "./contexts/User/UserContextProvider";
import Profile from "./components/Profile";

function App() {
  return (
    <div style={{padding:'10px'}}>
      <UserContextProvider>
        <Login />
        <br></br>
        <Profile />
      </UserContextProvider>
    </div>
  );
}

export default App;
