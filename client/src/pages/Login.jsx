import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("jwtToken")) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (ev) => {
    ev.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("jwtToken", data.jwtToken);
        console.log(data.success);
        navigate("/");
      } else {
        const data = await res.json();
        console.log(data.error);
        alert(data.error);
      }
    } catch (error) {
      console.log("something wennt wrong: ", error);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen w-screen">
      <div className=" flex flex-col justify-center items-center w-11/12 sm:w-9/12 md:w-2/6 p-4 bg-[#f8f8f8] rounded-md">
        <label className="text-3xl font-light">Login</label>
        <form
          onSubmit={handleLogin}
          className="flex flex-col justify-center items-center space-y-3 px-4 py-4 my-3 w-10/12"
        >
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className="w-11/12 sm:w-5/6 border border-spacing-2 border-b-indigo-300 p-1"
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            className="w-11/12 sm:w-5/6 border border-spacing-2 border-b-indigo-300 p-1"
          />

          <button
            type="submit"
            className="w-11/12 sm:w-5/6 p-2 text-lg bg-[#E55604] hover:bg-[#26577C] active:bg-[#ac9689]"
          >
            Login
          </button>

          <span>
            Didn&apos;t have account?{" "}
            <Link to={"/register"}>
              <strong>Register Here</strong>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};
export default Login;
