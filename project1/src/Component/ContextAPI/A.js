import React from "react";

import B from "./B..js";

import mycontext from "./Context.js";

    class A extends React.Component
    {
         constructor(props)
        {
          super(props);
          this.state={
              name:"sharath sneha ",
              description:"Is used to build  Effective UI"
          }
       
        }

   render()

   {
     return(
        <div className="container">

        <div className="row">

        <div className="col">

        <div class="card">

        <div class="card-header bg-success ">
                            Featured  information of tech
                    </div>

            <h4  >col 1</h4>
            <b>SQL DEVELOPERS</b>

            <div class="card-body">
                      
                        <p class="card-text"></p>

                        <mycontext.Provider  value={this.state}>
                            <B/>
                        </mycontext.Provider>
                       
                    </div>

                    <div class="card-footer">
                        2 days ago
                        <button className="btn btn-primary" onClick={()=>this.setState({
                          
                          name:"appu",
                          description:12
                        })}>update</button>
                    </div>

            </div>

            
               
        </div>

        <h1>A Component</h1>

      </div>

         </div>
        )
            }
    };

export default A;