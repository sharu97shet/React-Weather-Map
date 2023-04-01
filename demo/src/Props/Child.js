
  import React from "react";

    class Child extends React.Component
    {
        constructor(props)
        {
          super(props);
          this.state={
             
          }
       
        }

   render()

   {
     return(
            <div>

        <h1>child Component</h1>

        <h1>Name:{this.props.d}</h1>

        <h1>place:{this.props.city}</h1>

       

         </div>
        )
            }
    };

export default Child;