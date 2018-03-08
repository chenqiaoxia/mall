import React from 'react';
import Topsearch from '../search/topsearch.js'
import { Spin } from 'antd';
import '../../../style/mobilecss/classification.css'
export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			num:0,
			data:[],
		}
	}
	componentDidMount(){
		var that=this;
        var url="http://p0679v0m2.bkt.clouddn.com/mobileclass.txt";
            fetch(url)
            .then(function(response) {
              return response.json()
            }).then(function(json) {
                that.setState({
                   data:json
                })
            })
	}
	render(){
	    var lis=this.state.data.length>0?this.state.data.map((value,index)=>{
	    	var fontcolor=this.state.num==index?"#f00":"#000"
	    	return (
	    		<li key={index} onClick={this.clickclass(index)} style={{color:fontcolor}}>{value.name}</li>
	    		);
	    }):<Spin />;
	    var goods=this.state.data.length>0?this.state.data[this.state.num].name:<Spin />;
		var ulli=this.state.data.length>0?this.state.data[this.state.num].nameclass.map((value,index)=>{
			return (
				       <li key={index}>
				         <img src={value.img}/>
				         <p className="cuti">{value.imgname}</p>
				       </li>
				);
		}):<Spin />;
		return (
			<div>
				<Topsearch style={{position:"fixed",top:0,left:0}}/>
				<div className="classleft">
				  <ul className="calti">
				     {lis}
				  </ul>
				</div>
				<div className="classright">
				  <div className="crimg"><img src="https://img20.360buyimg.com/mcoss/jfs/t16273/143/46476745/45673/cba0840c/5a28ef10N82ab81d3.jpg"/></div>
				  <div className="category">
				     <div className="crtitle">{goods}</div>
				     <ul className="category-ul">
				       {ulli}
				     </ul>
				  </div>
				</div>
			</div>
		);
	}
	clickclass(index){
		var that=this;
		return function(){
			that.setState({
        		num:index,
        	})
	    }
	}
}