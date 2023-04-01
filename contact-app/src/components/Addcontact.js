import React from "react";
import { Component } from "react/cjs/react.production.min";

class Addcontact extends React.Component
{
      render()
   {
       return(
           <div className="ui main"  >
      
       <br/>

        <form className="ui form">

      <div className="field">

    <label>Name</label>

    <input type="text"  name="name"  placeholder="Name"/>

      </div>

        <div className="field">

    <label>Email</label>

    <input type="text"  name="name"  placeholder="Email"/>

    </div>

        </form>

           </div>

       )
   }


}


export default Addcontact;