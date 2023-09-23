import {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const navigate = useNavigate();

    const handleLogin = async (ev)=>{
        ev.preventDefault();

        const res = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        if(res.ok){
            const data = await res.json();
            navigate("/letter");
            console.log(data);
        } else{
            console.log("something went wrong");
            alert("invalid input")
        }
    }

  return (
    <div className=" flex justify-center items-center h-screen w-screen">
        <div className=" flex flex-col justify-center items-center w-2/6 p-4 bg-[#f8f8f8] rounded-md">
            <label className='text-3xl font-light'>Login</label>
            <form onSubmit={handleLogin} className="flex flex-col justify-center items-center space-y-3 px-4 py-4 my-3 w-10/12">
                
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

                <button type='submit' className="w-5/6 p-2 text-lg bg-[#E55604] hover:bg-[#26577C] active:bg-[#ac9689]">Login</button>

                <span>Didn't have account? <Link to={"/register"}><strong>Register Here</strong></Link></span>
            </form>
        </div>
    </div>
  )
}
export default Login