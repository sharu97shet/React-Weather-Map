import React from "react";
  
   class Grid extends React.Component
    {
       render()
            
          {
              return(

            <div className="container-fluid bg-secondary mt-3 p-5">
                
            <div className="row bg-primary">
                <h4>row1</h4>
        </div>

                <div className="row bg-danger mt-2 mb-4">
                        <h4>row2</h4>
                </div>

                <div className="row bg-warning">
                    <h4>row3</h4>
            </div>

            <br></br>

            {/* now for columns */}

            <div className="row bg-info">
              
            <div className="col-6">

            <h4  >col 1</h4>
            <b>SQL DEVELOPERS</b>

            </div>

            <div className="col-6">
                
                <h4>col 2</h4>
                <b>JAVA DEVELOPERS</b>
    
                </div>

            </div>

             <div className="row bg-primary  mt-4">
              
            <div className="col-3">

            <h4>col 1</h4>
                <b>asus </b>

            </div>

            <div className="col-3">
                
            <h4>col 2</h4>
            <b>php DEVELOPERS</b>

            </div>

            <div className="col-3">
            
            <h4>col 3</h4>
            <b>python DEVELOPERS</b>

            </div>

            <div className="col-3">
            
            <h4>col 4</h4>
            <b>salesforce DEVELOPERS</b>

            </div>

                       </div>
                       </div>
                       )
        
        }
    }
      
         
export default Grid;   