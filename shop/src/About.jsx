import React from 'react';


class About extends React.Component{

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
            <div className="about-container" style={{position:"absolute"}} >
            <div>Hello From About</div> 
        </div>  
            
        )};
};

export default About;