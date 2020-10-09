import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import SeriesView from './Components/SeriesView/SeriesView';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/series" component={SeriesView} />
			</Switch>
		</Router>
	);
}

export default App;