import React from 'react';
import '../../../../../style/staritem.css'
import Contenthead from '../content_head.js'
import { Spin } from 'antd';
export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			clname:'staritem_ul',
			datas:[],
		}
	}
	componentDidMount(){
		var that=this;
		fetch('http://localhost:3000/data/staritem')
        .then(function(response) {
          return response.json()
        }).then(function(json) {
        	that.setState({
        		datas:json
        	})
        })

	}
	render(){
		var head={"title":"明星单品","list":[]}
		var data=this.state.datas.length>0?this.state.datas.map((item,index)=>{
			var bt="1px solid"+item.goodscoltop
			return (
				<li className="rainbow-item-1" key={index} style={{borderTop:bt}}>
				       <img src={item.goodsimg} className='thumb'/>
				       <h3 className="ti">{item.goodstitle}</h3>
				       <p className="dsc">{item.goodsdec}</p>
				       <p className="pri" style={{color:"#ff6709"}}>{item.goodsprice}</p>
				</li>
			);
		}):<Spin />
		return (
			<div className="wrap staritem">
			    <Contenthead data={head} operation={this.opera.bind(this)}/>
				<ul className={this.state.clname}>
				   {data}
				</ul>
				
			</div>
		);
	}
	opera(count){
		var claname=count==1?'staritem_ul_right':'staritem_ul_left'
		this.setState({
			clname:claname
		})
	}
}