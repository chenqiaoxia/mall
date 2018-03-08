import React from 'react';
import Contenthead from '../content_head.js'
import Item from '../item.js'
import '../../../../../style/recommend.css'
import '../../../../../style/content_public.css'
import { Spin } from 'antd';

export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			datas:[]
		}
	}
	componentDidMount(){
		var that=this;
		fetch("http://localhost:3000/data/recommend")
		.then(function(response) {
          return response.json()
        }).then(function(json) {
        	that.setState({
        		datas:json
        	})
        })

	}
	render(){
		var head={"title":"为你推荐","list":[]}
		var arr=this.state.datas.length>0?this.state.datas.map(function(item, index) {
						return (
								<li className='pbli' key={index}>
			                    	<a href="" className="fl"><img src={item.goodsimg} alt=""></img></a>
			                    	<a href="" className="title11">{item.goodstitle}</a>
			                    	<a href="" className="desc11">{item.goodsdesc}</a>
			                    	<a href="">{item.goodsprice}元</a>
			                    </li>
							);
					}):<Spin />
		return (
			<div className="recommend">
			    <div className="wrap">
			       <Contenthead data={head}/>
			       <ul className="bll re_ul">{arr}</ul>

			    </div>
				
			</div>
		);
	}
}