import React from 'react';
import '../../../../../style/content_public.css'
import Bigitem from './bigitem.js'
import { Spin } from 'antd'; 
export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			datas:[],
		}
	}
	componentDidMount(){
		var that=this;
		fetch('http://p0679v0m2.bkt.clouddn.com/publicdiv.json')
        .then(function(response) {
          return response.json()
        }).then(function(json) {
        	that.setState({
        		datas:json
        	})
        })

	}
	render(){
		var centeritem=this.state.datas.length>0?this.state.datas.map((item,index)=>{
			return (
					<Bigitem data={item} key={index}/>
				);
		}):<Spin />
		return (
			<div className='public_center' style={{paddingTop:60}}>
			    {centeritem}
			</div>
		);
	}
	
}