import React,{ Component } from 'react';
import logo from './logo.svg';
import './App2.css';
import balon from './images/balon.png';
import inulogo from './images/inulogo.svg';

import firebase from './fb';
import * as firebas from 'firebase'


class App extends Component {
  constructor(match, props)
  {
	  super(props);
	  this.state = {
		currentWeight1: 0,
		currentWeight2: 0,
		currentWeight3: 0
	  }

	
  }  

  componentDidMount()
  {
	    var that = this;

		this.updateDb.orderByChild("TSTAMP").limitToLast(1).on("child_added", function(snapshot) {
			if (snapshot.val().ID == 1)
				that.setState({ currentWeight1: snapshot.val().PESO });
			else if (snapshot.val().ID == 2)
				that.setState({ currentWeight2: snapshot.val().PESO });
			else if (snapshot.val().ID == 3)
				that.setState({ currentWeight3: snapshot.val().PESO });
		});
  }
  
  componentWillMount()
  {
	    this.updateDb = firebase.database().ref("T_PESOS/");	
		var that = this;
		
		// Para recuperar un valor debería ser on("value"), pero con child_added coge el último insertado
		// Es decir, no es necesario, aunque lo parezca, que ocurra el evento "añadir hijo"
		this.listener1 = this.updateDb.orderByChild("ID").equalTo("1").on("child_added", function(snapshot) {
				that.setState({ currentWeight1: snapshot.val().PESO });
				that.updateDb.off("child_added", that.listener1)
		});
		this.listener2 = this.updateDb.orderByChild("ID").equalTo("2").on("child_added", function(snapshot) {
				that.setState({ currentWeight2: snapshot.val().PESO });
				that.updateDb.off("child_added", that.listener2)
		});
		this.listener3 = this.updateDb.orderByChild("ID").equalTo("3").on("child_added", function(snapshot) {
				that.setState({ currentWeight3: snapshot.val().PESO });
				that.updateDb.off("child_added", that.listener3)
		});
		
  }
		
  render() 
  {
	  this.valor1 = "-";
	  if (this.state.currentWeight1!=0)
		 this.valor1 = Number(this.state.currentWeight1).toFixed();
	  this.valor2 = "-";
	  if (this.state.currentWeight2!=0)
		 this.valor2 = Number(this.state.currentWeight2).toFixed();
	  this.valor3 = "-";
	  if (this.state.currentWeight3!=0)
		 this.valor3 = Number(this.state.currentWeight3).toFixed();
	  

	  return (	
		<div className="App">
			<br/>
			<img src={balon} className="balon"/><br/>
			<img src={inulogo} className="inulogo"/>
			<center>
			<table border="1" cellspacing="0" cellpadding="10">
			  <thead>
			  </thead>
			  <tbody>
					<tr>
					  <td>H1</td>
					  <td>{this.valor1} g</td>
					</tr>
					<tr>
					  <td>H2</td>
					  <td>{this.valor2} g</td>
					</tr>
					<tr>
					  <td>H3</td>
					  <td>{this.valor3} g</td>
					</tr>
				</tbody>
			</table>
			</center>
		</div>
	  );

  }
}

export default App;
