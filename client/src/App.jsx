import "./index.css";
import { Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Letter from "./pages/Letter";

function App() {

  return (
      <Routes>
        <Route path={"/"} element={<Letter />}/>
        <Route path={"/login"} element={<Login />}/>
        <Route path={"/register"} element={<Register />}/>
      </Routes>
  )
}

export default App
