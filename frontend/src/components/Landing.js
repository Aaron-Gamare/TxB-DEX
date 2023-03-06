import React from "react";
import Background from '../assets/background.png'

var background = {
  // backgroundImage: "url("+ {Background} + ")"
  height: '100vh',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100vw',
  height: '100vh'
};

var title = {
  textAlign: 'left',
  fontWeight: 'bold',
  fontSize: 100,
  paddingTop: 300,
  paddingLeft: '10vw',
  color: 'white',
  fontFamily: 'Inter'
}

export function Landing() {
  return (
    // <div style={{background: "red"}}>
    <div>
      <section style={background}>
        <h1 style={title}>
          TxDEX
        </h1>
      </section>
      <div>
        
      </div>
    </div>
  );
}
