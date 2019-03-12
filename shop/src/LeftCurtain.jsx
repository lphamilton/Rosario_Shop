import React from 'react';
import {NavLink} from 'react-router-dom';

class LeftCurtain extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            shopOpen: false 
        };
        this.handleShopClick = this.handleShopClick.bind(this);
    }

handleShopClick(e){
    console.log("clicked")
    
}


    render(){ 
        return(
            <NavLink className="curt1-container" style={{ textDecoration: 'none' }} to="/shop">
           
               <div className="Shop-Container">
                 <div className="Shop-Subcontain">
                   
                     <div className="Shop-Nav">SHOP</div>
                     <div className="Hidden-Text">Buy sugar skulls!<br/>Various sizing and color customization avaliable.</div> 
                  
                   </div>
                  </div>
             
              <div className="curt1"></div>
           </NavLink>
    
        )}
}

export default LeftCurtain;


