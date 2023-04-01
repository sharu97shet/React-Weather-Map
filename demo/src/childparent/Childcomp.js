
  import React from "react";

    class Childcomp extends React.Component
    {
        constructor(props)
        {
          super(props);
          this.state={
              name:"sharath shet sneha ",
              skill:"reactjs"
             
          }
       
        }

        childMethod=(childName,childCity)=>
        {

            this.props.updateparentstate(this.state.name ,this.state.skill);
           

        }
        
    render()

    {
    return(
                
        <div>

    <h5>Child component</h5>

     
    <button  onClick={this.childMethod}>UPDATE DATA FROM child TO parent </button>
        </div>
        )
            }
    };

export default Childcomp;