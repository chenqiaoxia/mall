import React from 'react';

import Index from './home/index.js'
import Classification from './classification/index.js'
import Shopchar from './shopchar/index.js'
import My from './my/index.js'
import Detail from './detail/index.js'
import Search from './search/index.js'
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
			        <Route path="/class/" component={Classification}/>
			        <Route path="/my/:id" component={My}/>
			        <Route path="/search/" component={Search}/>
			      </Switch>
		        </HashRouter>
			</div>
		);
	}
}