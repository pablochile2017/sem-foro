import React from 'react';
import './semaforo.css';

export default class Semaforo extends React.Component{
		constructor(props) {
    	super(props);
    	this.state = { fondo: null };
  		}

render(){

			let rojo = " ";
				let amarillo = " ";
				let verde = " ";
				if(this.state.fondo == "rojo"){
					rojo = "selec"
				}else if(this.state.fondo == "amarillo"){
					amarillo = "selec"
				}else if(this.state.fondo == "verde"){
					verde = "selec"
				}


	return (
			<div className="container">
			{console.log(this.state)}
				<div className="negro"></div>
				<div className="caja">
					<div id="rojo" className={"rojo " + rojo }onClick={ ()=> this.setState({fondo: "rojo"}) }></div>
					<div id="amarillo" className={"amarillo " + amarillo } onClick={ ()=> this.setState({fondo: "amarillo"}) }></div>
					<div id="verde" className={"verde " + verde } onClick={ ()=> this.setState({fondo: "verde"}) }></div>
				</div>
			</div>
			)
	}	
}