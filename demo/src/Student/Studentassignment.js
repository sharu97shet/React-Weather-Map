
  import React from "react";

  class Studentassignment extends React.Component
  {
      constructor(props)
      {
        super(props);
        this.state={
           
        }
     
      }
      // <script src="<?=base_url("stylesheets/js/mobiscroll.javascript.min.js")?>"></script>  

   //<link rel="stylesheet" type="text/css" href="<?=base_url("stylesheets/css/mobiscroll.javascript.min.css")?>">


        render()
      {
        return(
                <div>

            <h1>child Componentfffff</h1>

        <table>
        
        <thead>
            <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>State</th>
                <th>qualification</th>
            </thead>
                        
                   <tbody>

                <tr>
                <td>{this.props.d}</td>
                <td>{this.props.email}</td>  
                <td>{}</td>
                <td>{}</td>

                <td>{}</td>
                </tr>

                   </tbody>

       </table>

              </div>
       )
          }

  };

        export default Studentassignment;