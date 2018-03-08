import React from 'react';

import Index from './home/index.js'
import Detail from './detail/index.js'
import Shopchar from './shopchar/index.js'
import List from './list/index.js'
import {HashRouter, Route, hashHistory, Switch} from 'react-router-dom';

export default class Common extends React.Component{
	render(){
		return (
			<div>
				<HashRouter history={hashHistory}>
		          <Switch>
			        <Route exact path='/' component={Index} />
			        <Route path="/detail/:id" component={Detail}/>
			        <Route path="/shopchar/:id" component={Shopchar}/>
			        <Route path="/list/:id" component={List}/>
			      </Switch>
		        </HashRouter>
			</div>
		);
	}
}