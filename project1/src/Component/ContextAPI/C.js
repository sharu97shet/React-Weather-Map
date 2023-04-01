import React from "react";


import D  from "./D";

 class C extends React.Component
    {

   render()

   {
     return(
        <div className="container">

        <div className="row">

        <div className="col">

        <div class="card">

        <div class="card-header bg-dark text-red ">
                            Featured  C 
                    </div>

            <h4  >col 1</h4>
            <b>PLSQL DEVELOPERS</b>

            <div class="card-body">
                        
            <p class="card-text"><D/></p>

                    </div>

            </div>

            
               
        </div>

        <h1>c Component</h1>

      </div>

         </div>
        )
            }
    };

export default C;