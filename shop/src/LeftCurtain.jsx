import React from 'react';
import Shop from './Shop.jsx';

class LeftCurtain extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hidden: false
        };
        this.handleLeftCurtainClick = this.handleLeftCurtainClick.bind(this);
    }


handleLeftCurtainClick(event){
//   console.log("clicked on left curtain");
//   console.log("clicked on shop");
//   //Add a class to the shop-container that makes it expand? Width 100% for the shop and 0 for the other crap 
//   //Make the shop-subcontain Disapear...?
//   //Make other shit appear...
//   let shop = document.querySelector('.curt1-container');
//   shop.classList.add('fullshop');
//   document.querySelector('.Shop-Container').style.display = 'none';

//   //Make a WHOLE component appear thru a transition (it will be a transparent component laying on top)
//   //pass down shop props accordingly and have the shop display the components according to props
}


componentDidMount(){
    console.log("mounted");
    //I only want curt1 to be above the items inside curt1-container
    //curt1-container has a background that is below curt1
    
}

    render(){ 
        return(
            <div className="curt1-container" onClick={this.handleLeftCurtainClick}>
              <Shop shop={false}/>
              <div className="curt1"></div>
            
            </div>)
    }
}

export default LeftCurtain;