import React from 'react';
import {NavLink} from 'react-router-dom';


class MiddleCurtain extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            shopOpen: false 
        };
        
    }
componentDidMount(){
 console.log("MiddleCurtain mounted");
}


    render(){ 
        return(
            <NavLink className="curt2-container" style={{ textDecoration: 'none' }} to="/about">            
              <div className="Shop-Container">
                 <div className="Shop-Subcontain">
                     <div className="Shop-Nav">ABOUT</div>
                     <div className="Hidden-Text">Who am I?<br/>Learn about my mission.</div> 
                 </div>
                </div>
             <div className="curt2"></div>
           </NavLink>
    
        )}
}

export default MiddleCurtain;


