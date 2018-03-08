import React from 'react';
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
		fetch('http://p0679v0m2.bkt.clouddn.com/listleft.json')
        .then(function(response) {
          return response.json()
        }).then(function(json) {
        	that.setState({
        		datas:json
        	})
        })

	}
	render(){
    //循环遍历左侧那一列
		var lis=this.state.datas.length>0?this.state.datas.map((item,index)=>{
			return (
				<li key={index}>
      			   <img src={item.img}/>
      			   <p className="dec">{item.dec}</p>
      			   <p className="prie">￥{item.pri}</p>
      			   <p>已有{item.eval}人评价</p>
      			</li>
				);
		}):<Spin />;
		return (
			<div className="list_content_left">
      		    <ul style={{border:'1px solid #ddd'}}>
      		       {lis}
      		    </ul>
			</div>
		);
	}
}