import React from 'react';
import LeftCurtain from './LeftCurtain.jsx';

class Curtains extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentDidMount(){
       console.log("curtains mounted")
    }

    render(){ 
        return(
            <div className="curtains">
              <LeftCurtain />
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