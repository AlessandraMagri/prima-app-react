import React from 'react';
import './App.css';

function App() {
  let ciao = 10;
  return (
    <div>
        <Cat/> {/* classe componente */}
        {ciao}
        <Dog/> {/* funzione componente */}
    </div>
  );
}

export default App;

class Cat extends React.Component {
    render() {
      return <p>Hi, I am a Cat!</p>;
    }
  }

function Dog() {
    return (
      <p>Hi, I am a Dog!</p>
    );
  }