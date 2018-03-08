import React from 'react';
import '../../../../../style/hotproduct.css'
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
		fetch('http://p0679v0m2.bkt.clouddn.com/hotproduct.json')
        .then(function(response) {
          return response.json()
        }).then(function(json) {
        	that.setState({
        		datas:json
        	})

        })

	}
	render(){
        
        var arr=this.state.datas.length>0?this.state.datas.map((item,index)=>{
        	return (
        		<li className='hpli' key={index}>
					   <img src={item.img} className="hpimg"/>
					   <p className='hpp'>{item.dec}</p>
					   <p className="author"> 来自于 {item.eva} 的评价</p>
					   <div className="hpinfo">
					      <h3 className="hpinfoh3">{item.tit}</h3>
					      <span className="sep">|</span>
					      <p className="hpinfop">{item.pri}元</p>
					   </div>
					</li>
        		);
        }):<Spin />
		return (
			<div className='hotproduct wrap'>
				<h2 className='h_title'>
				   热评产品
				</h2>
				<ul>
				{arr}
				</ul>
			</div>
		);
	}
}