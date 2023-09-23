import {useState} from "react";
import { useNavigate
 } from "react-router-dom";
const Register = () => {
    const [userName, SetUserName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const navigate = useNavigate();

    const handleRegister = async (ev)=>{
        ev.preventDefault();
        const res = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName,
                email,
                password
            }),
        })

        if(res.ok){
            const data = await res.json();
            console.log(data);
            return navigate("/login");
        } else{
            console.log("Something went wrong");
            return alert("input invalid! try again");
        }

    }

  return (
    <>
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <div className="flex flex-col justify-center items-center w-2/6 py-4 bg-[#f8f8f8] rounded-md">
                <label className="text-3xl font-light">Register</label>
                <form onSubmit={handleRegister} className="flex flex-col justify-center items-center space-y-3 py-4 px-4 my-3 w-10/12">

                    <input placeholder="User Name" 
                        type="text" value={userName} 
                        onChange={(ev)=>SetUserName(ev.target.value)}
                        className="w-5/6 border border-spacing-2 border-b-indigo-300 p-1"/>

                    <input placeholder="Email" 
                        type="email" 
                        value={email} 
                        onChange={(ev)=>setEmail(ev.target.value)}
                        className="w-5/6 border border-spacing-2 border-b-indigo-300 p-1"/>
                    <input placeholder="Password" 
                        type="password" 
                        value={password} 
                        onChange={(ev)=>setPassword(ev.target.value)}
                        className="w-5/6 border border-spacing-2 border-b-indigo-300 p-1"/>
                    <button 
                        type="submit"
                        className="w-5/6 p-2 text-lg bg-[#E55604] hover:bg-[#26577C] active:bg-[#E55604]">Register</button>
                </form>
            </div> 
        </div>
    </>
  )
}
export default Register