import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Letter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authVerify = async () => {
      console.log("sending cookie to server");

      try {
        const res = await fetch("http://localhost:3000/authVerify", {
          method: "POST",
          credentials: 'include',
        });

        if (res.ok) {
          const data = await res.json();
          console.log(data.success);
        } else {
          const data = await res.json();
          console.log(data.error);
          document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          navigate("/login");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    authVerify();
  }, []); 

  return <div>Letter</div>;
};

export default Letter;
