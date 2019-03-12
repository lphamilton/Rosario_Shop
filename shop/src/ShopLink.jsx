import React from 'react';
import Shop from './Shop.jsx';

import {BrowserRouter as Router,
    Route,
    Link,
    } from 'react-router-dom';

class ShopLink extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            shop: false
        };

        this.handleShopClick = this.handleShopClick.bind(this);
        }

    handleShopClick(e){

        console.log("clicked on left curtain");
        console.log("clicked on shop");
        //Will need to add a class to the shop-container that makes it expand? Width 100% for the shop and 0 for the other containers
        
        let shop = document.querySelector('.curt1-container');
        shop.classList.add('fullshop');//expands curtain-1
        
        this.setState({shop:true}, ()=>console.log("changed the state")); //makes the shop show up
    }
 
    render(){ 
      return(
        <Router>
            <div>
                <Route path="/" exact strict render={()=>{
                    return( //here there is no class of fullshop...
                    <div className="Shop-Container" onClick={this.handleShopClick}>
                        <div className="Shop-Subcontain">
                        <Link to="/shop" style={{ textDecoration: 'none' }}>
                            <nav className="Shop-Nav">SHOP</nav>
                            <div className="Hidden-Text">Buy sugar skulls!<br/>Various sizing and color customization avaliable.</div>
                        </Link> 
                        </div>
                    </div> 
                    )}} />
                <Route path="/shop" exact strict render={()=>{
                return(
                    <div>HELLO FREAK BITCHES</div>
                )}}/>
         </div>
        </Router>
     )};
}

export default ShopLink ;



// import React from 'react';
// import Shop from './Shop.jsx';

// import {BrowserRouter as Router,
//     Route,
//     Link,
//     } from 'react-router-dom';

// class ShopLink extends React.Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             shop: false
//         };

//         this.handleShopClick = this.handleShopClick.bind(this);
//         }
//     handleShopClick(e){

//         console.log("clicked on left curtain");
//         console.log("clicked on shop");
//         //Will need to add a class to the shop-container that makes it expand? Width 100% for the shop and 0 for the other containers
        
//         let shop = document.querySelector('.curt1-container');
//         shop.classList.add('fullshop');//expands curtain-1
        
//         this.setState({shop:true}, ()=>console.log("changed the state")); //makes the shop show up
//     }
 
//     render(){ 
//       if(!this.state.shop){
//         return(
//           <div className="Shop-Container" onClick={this.handleShopClick}>
//             <div className="Shop-Subcontain">
//               <nav className="Shop-Nav">SHOP</nav>
//               <div className="Hidden-Text">Buy sugar skulls!<br/>Various sizing and color customization avaliable.</div>
//             </div>
//          </div>
//         )} else {
//             return(<Shop />
//         )};
//     };
// }

// export default ShopLink ;


