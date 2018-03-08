import React from 'react';
import List from './list.js';
import { Row, Col } from 'antd';
require('../../../../../style/menu.css');
import {Link} from 'react-router-dom';

export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			datas:[],
			index:0,
			display:'none'
		}
	}
	componentDidMount(){
		var that=this;
		fetch('http://p084rxa96.bkt.clouddn.com/MI.json')
        .then(function(response) {
          return response.json()
        }).then(function(json) {
        	that.setState({
        		datas:json
        	})

        })

	}
	render(){
		var arr=this.state.datas.map((item,index)=>{
			return (
					<li className="category-item" key={index} onMouseOver={this.over(index)}><Link to='/list/123' style={{color:"#fff"}}>{item.title}</Link></li>
				);
		})
		return (
			<div className="menuleft_box">
			    <div className="menuleft" onMouseLeave={this.leave.bind(this)}>
			    	<ul className="site-category-list">
			    		{arr}
			    	</ul>
			    	<List index={this.state.index} data={this.state.datas} com={this.componentDidMount} show={this.state.display}/>
			    	
			    </div>
			</div>
		);
	}
	
	over(index){
		var that=this;
		return function(){
			that.setState({
        		index:index,
        		display:'block'
        	})
		}
	}
	leave(){
		this.setState({
        		display:'none'
        	})
	}
}