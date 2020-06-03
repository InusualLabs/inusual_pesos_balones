import React,{ Component } from 'react';
import logo from './logo.svg';
//import 'firebase/firestore'
//import 'firebase/database';
//var admin = require("firebase-admin");
import './Alta.css';
import firebase from './fb';
import * as firebas from 'firebase'


class Alta extends Component {
	
  	
	
  constructor({match},{props})
  {

	  super(props);
	  this.state = {

	  }
	  this.writeUserData = this.writeUserData.bind(this);

	  this.peso = match.params.peso;
	  this.id = match.params.id;
  }  
		
  componentDidMount()
  {
	  this.writeUserData()
  }
  		
  componentWillMount()
  {
	  
  }
		
  render() 
  {
    return (	
		<div className="Alta">
			Alta peso {this.peso} desde id {this.id}
		</div>
	  );
  }
  
  writeUserData() {
	  firebase.database().ref('T_PESOS/').push({
		PESO: this.peso,
		TSTAMP: firebas.database.ServerValue.TIMESTAMP,
		ID:this.id
	  });
	}
}

export default Alta;
