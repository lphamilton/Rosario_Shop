import React from 'react';
import Curtains from './Curtains.jsx';
import Letters from './Letters.jsx';
import Shop from './Shop.jsx';


import {Switch, Route, withRouter} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Transition from 'react-transition-group/Transition';


class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        };
    }

    

componentDidMount(){
  console.log("App mounted");
}
    render(){
        const {location} = this.props;
        return(
        <div>
           <Route exact path="/" render={() => 
                <div>
                    <Curtains />
                    <Letters />
                </div>}>
            </Route>
                  
        
            <TransitionGroup>
              <CSSTransition
                unmountOnExit //so that the transiton will happen even if user presses back button for
                key={location.key}
                timeout={{exit:3000}}
                addEndListener={(node, done) => {
                    if(done){
                    // use the css transitionend event to mark the finish of a transition
                    node.addEventListener('transitionend', () => node.style.width="100%")};
                  }}
                classNames={'fade'}
              >
                <Switch key={location.key} location={location}>
                  <Route exact path="/shop" component={Shop}></Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            </div>
        )}
}

export default withRouter(App);