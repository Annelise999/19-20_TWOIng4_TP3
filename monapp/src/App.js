import React from 'react';
import logo from './logo.svg';
import './App.css';

import Maison from "./Composants/Maison/Maison";

class Hello extends React.Component{
render(){
return (
<div>
 <Maison name="Victor"/>
 <Maison name= "Thomas"/>
 <Maison name= "Pierre"/>
 <Maison name= "Clara"/>
</div>

);

}

}

export default App;
