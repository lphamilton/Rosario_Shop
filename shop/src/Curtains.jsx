import React from 'react';
import styled from 'styled-components'

const Main = styled.div`
  display:flex;
  min-height: 100%;
  font-weight: 550;
  color: #fff;
  font-family: hanken, sans-serif;
  font-size: 170px;
  letter-spacing: .03rem; 
`

const Container1 = styled.div`
border:solid red;
background-color: #171719;
flex: 1;
flex-direction: column;
padding-top:280px;
`

const Container2 = styled.div`
border:solid red;
background-color: #171719;
flex: 1;
flex-direction: column;
text-align: center;
`

const Container3 = styled.div`
border:solid red;
background-color: #171719;
flex: 1;
flex-direction: column;
text-align: center;
`

class Curtains extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        };
    }

    componentDidMount(){
        //remove the class initial 
        //add your own styling to the element...
        //would have taken away background but nahh...
       let body = document.querySelector('body');
       body.classList.remove("initial");

       
    }

    render(){ 
        return(
            <Main id="container-after">
               <div>
                 <p className="panel1" id="row1-after">Ro</p>
               </div>
               <div >
                 <p className="panel2" id="row2-after"></p>
               </div>
               <div>
                 <p className="panel3" id="row3-after"></p>
               </div>
           </Main>)
    }
}

export default Curtains;