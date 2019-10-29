import React , {Component } from 'react';

class Maison extends Component{
render(){

    const name= this.props.name;

return (
<div>
 <p> Hello {name} ! </p>
</div>


);

}

}

export default Maison;
