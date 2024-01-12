import { useParams } from "react-router-dom";
function User() {
  const { myParams } = useParams("");
  
  return (
    <div className="p-10 bg-slate-500 text-white justify-self-center">
      Github : {myParams }
    </div>
  );
}

export default User;
