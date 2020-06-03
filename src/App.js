import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Alta from './Alta';
import App2 from './App2';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



class App extends Component {
  constructor(match, props)
  {
	  super(props);
	  this.state = {

	  }


  }  
		
  componentDidMount()
  {

  }
		
  render() 
  {
    return (	
		<div className="App">

			  <Router>
				<div>
				  <Route path="/alta/:peso/:id" component={Alta}/>
				  <Route path="/app" component={App2}/>
				</div>
			  </Router>
		  
		</div>
	  );
  }
}

export default App;
