
import './App.css';

import Header from "./Header/Header.js";

import State from "./State/State.js";

import Student1  from "./Student/Student1.js";

import A  from "./Relations/A.js";

 import Parent  from "./Props/Parent.js";

 import Grid   from "./Bootstrap/Grid";

 import Card   from "./Bootstrap/Card";

 import Parentcomp  from "./childparent/Parentcomp.js";

 
 import Navbar  from "./Navbar/Navbar";
 
import Form  from "./Form/Form";

  
 import  "bootstrap/dist/css/bootstrap.css";

   function App() 
   {
    return (
      <div className="App">

     
      <Header/>

      <State/> 

      <h1> React demo</h1>
      <A/>

      <Parent/>

      <Student1/>

      
       <Grid/>

       <Card/>

     < Navbar/>

      <Form/>
    
       <Parentcomp/>
      
       </div>

        );
      }


  export default App;
