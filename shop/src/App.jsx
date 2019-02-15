import React from 'react';


class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        };
    }

componentDidMount(){
    //setTimeout in here to change the CSS 
    let letters = Array.from(document.querySelectorAll('.rows'));
    
   //wraping every letter into a span 
    letters.forEach((row) => {
        row.innerHTML = row.innerHTML.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
    })
    
}
    render(){
        return(<div id="container">
                 <div id="row1-container">
                   <p className="rows" id="row1">Rosario's</p>
                 </div>
                   <br />
                 <div id="row2-container">
                   <p className="rows" id="row2">Sugar</p> 
                 </div>
                   <br /> 
                 <div id="row3-container">
                   <p className="rows" id="row3">Skulls</p>
                 </div>
               </div>)
    }
}

export default App;

