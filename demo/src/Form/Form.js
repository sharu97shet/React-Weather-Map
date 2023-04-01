
import React, { Component ,createRef } from 'react';

    class Form extends Component
    {
        constructor(props)
        {
          super(props);
          this.inputRef=createRef()
          this.passRef=createRef()
          this.gender=createRef()
         

        this.state={
            name:'',
            pass:'',
            check:'',
            
            }
       
        }

            updateref=(e)=>
            {
                //alert("working");
                console.log(this.inputRef.current.value);

                const val = e.target.value;
                alert(val);
                this.setState({
                    name:this.inputRef.current.value,
                    pass:this.passRef.current.value,
                    check : val
                })

            
            }

           
          render()
        {
             return(

            <div className="container  mt-4">

            <div class="card   ">

            <div className="row">
              
                <div className="col-sm-4 ">

                </div>

                <div   className="col-sm-4 ">   
                <div class="card-header bg-success text-warning  mt-1 ">
                       
                       LOGIN FORM
                </div>
  
                <div class="card-body">

        <div class="form-group">
            
        <input type="text" ref={this.inputRef}   className="form-control "  placeholder="enter name " autoFocus/>
        
            </div>

            <div class="form-group mt-2">
            
        <input type="text" ref={this.passRef}   className="form-control "  placeholder="enter pass " />
            
        </div>

            <div class="form-group mt-2"  >
            
            Male <input type="radio"  value="male"   onChange={this.updateref.bind(this)}  name="gender"   />

            FeMale <input type="radio"  value="female"   onChange={this.updateref.bind(this)} name="gender"    />
                
         </div>

        
        </div>

        <div class="card-footer my-1">
            
        <button className="btn btn-primary button  px-5"  onClick={this.updateref.bind(this)}  >login</button>
        <p>{this.state.name}</p>

        <p>{this.state.pass}</p>

        <p>{this.state.check}</p>
        <div>
        
            </div>
        
        </div>

        </div>
    
        </div>
        </div>
    
    </div>
    )
            
        }
    
    };

    export default Form;