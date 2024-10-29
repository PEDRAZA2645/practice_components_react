import { useState } from "react";
import "./App.css";
import Child from "./components/Child";
// import FristComponent from "./components/FristComponent";
// import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import FourthComponent from "./components/FourthComponent";

function App() {
  //Hoots

  const [name, setName] = useState("Mía Samantha Moreno Torres"); //vairable de estado

  return (
    <div className="App">
      <header className="App-header">
        {/* <hr className="white-hr" />
        <FristComponent />
        <hr className="white-hr" />
        <SecondComponent />
        <hr className="white-hr" /> */}
        <ThirdComponent name="Andres" lastName="Moreno Pedraza" age="20" />
        <hr className="white-hr" />
        <Child name={name} setName={setName}/>
        <hr className="white-hr" />
        <FourthComponent />
        <hr className="white-hr" />
      </header>
    </div>
  );
}

export default App;
