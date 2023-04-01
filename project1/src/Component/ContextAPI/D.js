
    import React from "react";

  import mycontext from "./Context.js";

    class D extends React.Component
     {

    render()
   {
     return(
        <div className="container">

        <div className="row">

        <div className="col">

        <div class="card">

        <div class="card-header bg-dark text-red ">
                            Featured  D
                    </div>

            <h4  >col 1</h4>
            <b>java DEVELOPERS</b>

            <div class="card-body">

            <mycontext.Consumer>
              {
                (data)=>{

                  return  <div>
                    <h4>Name:{data.name}</h4>
                    <h4>description:{data.description}</h4>
                  </div>

                   }

              }
                           
                     </mycontext.Consumer>
                        
                        <p  class="text-red">D   ggjhhComponent</p>
                    </div>

            </div>

            
               
        </div>

        <h1>D Component</h1>

      </div>

         </div>
        )
            }
    };

export default D;