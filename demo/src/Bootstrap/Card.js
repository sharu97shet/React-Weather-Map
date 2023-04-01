    import React from "react";

    class Card extends React.Component 
    {
    render()
        {
           return(
            <div className="container  mt-4">

        <div class="card   ">

            <div className="row">

                <div className="col-4 ">
                        
                    <div class="card-header bg-success text-warning  ">
                            Featured  information of tech
                    </div>
      
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a  class="btn btn-primary">Go somewhere</a>
                    </div>

                    <div class="card-footer">
                        2 days ago
                    </div>

                 </div>

             <div className="col-4">
                    
                <div class="card-header bg-success text-warning">
                        Featured  information of tech
                </div>

                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a  class="btn btn-primary">Go somewhere</a>
                </div>

                <div class="card-footer">
                    2 days ago
                </div>

            </div>

            </div>

           </div>
                
    </div>

   )
                    
    
        } 
        
        }

        export default  Card;


