import React from 'react';
import styled from 'styled-components'


class Curtains extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        };
    }

    componentDidMount(){
        //remove the class initial 
        //add your own styling to the element...
        //would have taken away background but nahh...
       let body = document.querySelector('body');    
    }

    render(){ 
        return(
            <div className="curtains">
              <div className="curt1-container">
                <div className="curt1"></div>
              </div>
              <div className="curt2-container">
                <div className="curt2"></div>
              </div>
              <div className="curt3-container">
                <div className="curt3"></div>
              </div>
              
            </div>)
    }
}

export default Curtains;