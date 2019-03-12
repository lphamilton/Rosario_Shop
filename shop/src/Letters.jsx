import React from 'react';

class Letters extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hidden:false,
        };
    }

animationStyle(div){ 

    let regex = /[0-9]/g; 
    let index = div.className.match(regex);
    let delay = ((index * 0.1) + .5).toFixed(1); // delay = 0.1x + .5
    div.style.display = 'inline-block';
    div.style.overflow = 'hidden';

    div.style.animation = `${delay}s slideup forwards`; 
    div.firstChild.style.animation = `slidein forwards`;

  

    div.firstChild.addEventListener('animationend', () => { //Only once the animation ends (1.3s), the Shop component will move forward
        document.querySelector('.Shop-Container').style.zIndex=12;  //making the app component under everything
        document.querySelector('.curt1-container').style.zIndex=11; //making the containers clickable 
        document.querySelector('.curt2-container').style.zIndex=11; //TODO: Generalize 
        document.querySelector('.curt3-container').style.zIndex=11;
    });

    

    div.firstChild.style.animationDuration = `1.3s`;
    div.firstChild.style.animationDelay = `1.3s`;
}

componentDidMount(){
    console.log("Letters mounted");
    let letters = Array.from(document.querySelectorAll('.rows')); //the intial paragraph tags

    letters.forEach((row) => {
        row.innerHTML = row.innerHTML.replace(/./g, `<div class="span-container-"><div class=letter>$&</div></div>`); 
    })


    //each span should have an identifing class
    let row1 = Array.from(document.querySelectorAll('#row1 .span-container-')); //array of all the divs with parent id=row1 && .span-container
    let row2 = Array.from(document.querySelectorAll('#row2 .span-container-')); //want to select all divs
    let row3 = Array.from(document.querySelectorAll('#row3 .span-container-')); //row3
 

    //*TODO*/:write function to do this: (adds a number to each span classname) "...container-indexNumberInRow"
    row1.forEach( (div, index) => { 
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
    
}
    render(){
        return(
            <div id="letters"> 
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
                </div>    
            </div>
          );
    };
}

export default Letters;

