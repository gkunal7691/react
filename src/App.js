import React from 'react';
import logo from './logo.svg';
import './App.css';
import  FonctionalComponent , {FonctionalComponent111}  from './components/functional-component';
import ClassComponent from './components/class-component';
import Hello from './components/jsx-demo';
import Props1 from './components/props';
import State from './components/state';
import Counter from './components/setState';
import FunctionEvent from './components/functionEvent';
import ClassEvent from './components/classEvent';
import EventBind from './components/eventBind';
import ParentComponent from './components/parentComponent';

function App() {
  return (
    <div className="App">
      {/* < FonctionalComponent />
      <FonctionalComponent111/> */}
      {/* <ClassComponent />
      <Hello /> */}
      {/* <Props1 name="Sachin"/> */}
       
       
      {/* <State message = "Subscribe Me!"></State> */}
      {/* <Counter></Counter> */}
      {/* <FunctionEvent></FunctionEvent> 
       <ClassEvent></ClassEvent> */}
        {/* <EventBind></EventBind>  */}
    <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
