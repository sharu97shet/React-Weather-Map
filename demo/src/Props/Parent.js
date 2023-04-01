import React from "react";

import Child from "./Child";

    class Parent extends React.Component
    {
           constructor()
        {
          super();
          this.state={
              name:"ajay"
          }
       
        }

   render()

   {
     return(
            <div>

        <h1>parent  Component</h1>

        <p>-----------</p>

        <Child  d={this.state.name}  city="mysore"/>

        <Child  d={this.state.name}  city="bangalore"/>

         </div>
        )
            }
    };

export default Parent;