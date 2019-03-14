import React from 'react';
import LeftCurtain from './LeftCurtain.jsx';
import MiddleCurtain from './MiddleCurtain.jsx';

class Curtains extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        };
        
    }
    componentDidMount(){
      console.log("Curtains mounted");
    }

    render(){
        return(
                <div className="curtains">
                    <LeftCurtain />
                    <MiddleCurtain />
                  <div className="curt3-container">
                    <div className="curt3"></div>
                  </div>
                </div>
            
        )};
};

export default Curtains;