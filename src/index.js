
  import React  from "react";
  import { Fragment } from "react";
  import ReactDom  from "react-dom";

///css
    import "./index.css";

    const title="appu";

    function  Greeting()
    { 
     
      ///// nested components 
        return (
        <>
           <h1>welcome to react world , man</h1>
            <Hello title="shet"  role="sql"/>
            <Hello/>
           

      </>
        );

    }

    function  Hello(props)
    {
      console.log(props.title);
        
      return  (
          <>
            <h2> hello sharath , how its going on  </h2>
            <h1>{title + ' developer php ,javascript,sql,react, salesforce'}</h1>
            <h1>{props.title}</h1>
            <h1>{props.role}</h1>
          </>
      
        );
       
    }

    function  Msg()
    {
        return <h1  style={{color:"green"}}> please , leave us message  </h1>;
    
    }

     ReactDom.render(<Greeting/> ,document.getElementById("root")  );