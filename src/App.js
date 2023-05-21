import Loginpage from "./loginpage/loginpage";
import Dashboard from "./dashboard/dashboard";
import { useState } from "react";
import "./App.css";
import { Logincontext } from "./context/logincontext";

function App() {
  const [showProfile, setshowProfile] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <Logincontext.Provider value={{ setshowProfile, username, setUsername }}>
        {showProfile ? <Dashboard /> : <Loginpage />}
      </Logincontext.Provider>
    </div>
  );
}

export default App;
