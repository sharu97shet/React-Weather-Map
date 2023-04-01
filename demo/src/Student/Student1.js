import React from "react";
  
import studentdetails from "../Studentdata";

import Studentassignment from "./Studentassignment";
  

    class Student1 extends React.Component
    {
    
        constructor()
        {
          super();
          this.state={

             details:{
                name:"",
                 email:"",
                 address:{
                     city:"",
                     state:""
                 }, 

            //    qualification:["" ,"" ,""]
             },
             
          }
       
        }

                updatedetails=()=>
                {
        
                    alert("demo");
                    this.setState({
                        details:{
                            name:studentdetails.name,
                            email:studentdetails.email,
                            address:{
                                city:"",
                                state:""
                            }, 
            
                        //    qualification:["" ,"" ,""]
                        },
                    });
        
                }

            

            render()
            {
            console.log(this.studentdetails);

             return(

                <div>

                <button onClick={this.updatedetails } className="btn-primary">    
            UPDATE child details </button>
           

            <Studentassignment d={this.state.details.name }  email={this.state.details.email}/>
             
           </div>

          )
        
        }
    }

           
console.log(studentdetails.name);
          


         
export default Student1;   