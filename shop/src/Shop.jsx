import React from 'react';

class Shop extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    componentDidMount(){
       console.log("shop mounted")
    }

  //
    render(){ 
        return(
        
                <div className="shop1-container" style={{position:"absolute"}} >
                    <div>Hello World</div> 
                </div>  
    
             
        )
    };
}

export default Shop;