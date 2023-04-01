
   import React from "react";
   
   class StateComp extends React.Component
    {
       constructor()
        {
          super();
          this.state={
              title:"React Js State Concept",
              description:"Is used to build  Effective UI"
          }
       
        }

        updateState=()=>
        {

            alert("demo");
            this.setState({
                title:"React Js Javascript ",
                description:"It is a programming language"

            });

        }
        
    render()
    {
        return(

            <div>

                <h1>{this.state.title}</h1>

                <h4>{this.state.description}</h4>

                <p> react state Component</p>

                <button onClick={this.updateState}>UPDATE</button>

            </div>
            
        )
    }


    }


    export default StateComp;