import React from "react";

import Childcomp from "./Childcomp";

    class Parentcomp extends React.Component
    {

        constructor(props)
        {
          super(props);
          this.state={
              name:"aa",
              skill:"axxx"
             
          }
       
        }

        updateState=(childName,childCity)=>
        {

            this.setState({
                name:childName,
              skill:childCity

            });

        }
        
    render()

    {

     return(
         
      <div>

        <h1>child Relations</h1>

        <p>-----------</p>

        <h1><span>Name:{this.state.name}</span></h1>

        <h2><span>skill:{this.state.skill}</span></h2>

        <Childcomp  updateparentstate={this.updateState}/>

         </div>
        )
            }
    };

export default Parentcomp;