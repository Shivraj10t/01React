import { useLoaderData } from "react-router-dom";

 

function Github() {
 const data=useLoaderData();
  return (
    <div className="p-10 bg-slate-500 text-white justify-self-center">
      Github : {data.followers}
      <h3>  {data.name}</h3>
      {/* <img src={data.avatar_url}  alt="git img" width={300} /> */}
      <article>{data.bio}</article>
    </div>
  );
}

export default Github

export const GithubInfo= async ()=>{
return fetch("https://api.github.com/users/Shivraj10t")
.then((x) => x.json())
}