
  import React from 'react';

  import {Link} from 'react-router-dom';


  class Navbar extends React.Component 
   {
       render()
        {
        return(
            <div  className="container-fluid mt-3 ">  

            <nav className="navbar navbar-expand-lg navbar-light  bgcolor">

                    <Link to="/#" className="navbar-brand left">

                        Home
                    
                    </Link>

                    <Link to="/weather" className="navbar-brand left" >

                        Weather
                    
                        </Link>

                    <Link  to="/axios" className="navbar-brand left">

                        Axios
                    
                        </Link>

                    <Link  to="/avenger" className="navbar-brand left">

                        Avenger
                    
                        </Link>

                  </nav>

          </div>
            );

            }
      
        }

        export default Navbar;
