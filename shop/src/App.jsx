import React from 'react';
import Curtains from './Curtains.jsx';


class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hidden:false,
        };
    }

animationStyle(div){ //add style to each container div...(not the letters)
    //will take a span and add style 
    //if it's classname is letter-0 add style delay of .5
    let regex = /[0-9]/g; 
    let index = div.className.match(regex);
    let delay = ((index * 0.1) + .5).toFixed(1);// delay = 0.1x + .5

    div.style.display = 'inline-block';
    div.style.overflow = 'hidden';
    div.style.animation = `${delay}s heading forwards`;
    div.firstChild.style.animation = `slidein forwards`;
    div.firstChild.style.animationDuration = `1.3s`;
    div.firstChild.style.animationDelay = `0.9s`;

}

componentDidMount(){
    let letters = Array.from(document.querySelectorAll('.rows')); //the intial paragraph tags

   //wraping every letter into a span and every span into a div with class "span container..."
    letters.forEach((row) => {
        row.innerHTML = row.innerHTML.replace(/./g, `<div class="span-container-"><div class=letter>$&</div></div>`); //replace all the letters inside the P with spans
    })

    //change the spans into divs

    //each span should have an identifing class
    let row1 = Array.from(document.querySelectorAll('#row1 .span-container-')); //array of all the divs with parent id=row1 && .span-container
    let row2 = Array.from(document.querySelectorAll('#row2 .span-container-')); //want to select all divs
    let row3 = Array.from(document.querySelectorAll('#row3 .span-container-')); //row3
 
    //write function to do this: (adds a number to each span classname) "...container-indexNumberInRow"
    row1.forEach( (div, index) => { 
        div.style.overflow = 'hidden';
        div.className += index; //added the index to the className
        this.animationStyle(div);
    });

    row2.forEach( (div, index) => {
        div.className += index;
        this.animationStyle(div);
    });

    row3.forEach( (div, index) => {
        div.className += index;
        this.animationStyle(div);
    });
    
    //want the container div and the .letter div to be same height and width

    
}
    render(){
        return(
            <div className="container">
              <div id="row1-container">
                <p className="rows" id="row1">Rosario's</p>
              </div>
              <div id="row2-container">
                <p className="rows" id="row2">Sugar</p> 
              </div>
              <div id="row3-container">
                <p className="rows" id="row3">Skulls</p>
              </div>
            </div>);
    };
}

export default App;

