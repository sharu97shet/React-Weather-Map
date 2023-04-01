// import logo from './logo.svg';

import "./App.css";

// import   A from "./Component/ContextAPI/A.js";

import Navbar from "./Component/Navbar/Navbar.js";
import Axios from "./Component/Axios/Axios.js";
import "bootstrap/dist/css/bootstrap.css";
import Avenger from "./Banner/Avenger";
import Weather from "./Banner/Weather";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//import Form  from "./Component/Form/Form"; //<A/>

function App() {
  return (
    <div className="App">
      <h1>context api</h1>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Axios />} />
          <Route path="/axios" element={<Axios />} />
          <Route path="/avenger" element={<Avenger />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>

      {/* <Axios/>

    <Avenger/> */}
    </div>
  );
}

export default App;
