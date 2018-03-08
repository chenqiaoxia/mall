import React from 'react';
import "../../../../style/list.css"
export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			index:-1
		}
	}
	render(){
		
		var imgone= new Array(); //定义一数组 
		var imgtwo= new Array(); //定义一数组 
        imgone=this.props.datas.xsimg.split(";"); //字符分割 
        imgtwo=this.props.datas.xsmimg.split(";"); //字符分割 
			var image=imgone.map((item,index)=>{
				var border=this.state.index==index?"1px solid red":"1px solid #ddd";
				return (
					<img src={item} key={index} onMouseOver={this.over(index)} style={{border:border}}/>
					);
			})
			var aa=this.state.index==-1?0:this.state.index
		return (

			
				<div className="list_item">
      			   <div className="l_i_img"><img src={imgtwo[aa]}/></div>
      			   <div className="goods_type_item">
      			      {image}
      			   </div>
      			   <p className="p_list mt8">¥{this.props.datas.price}</p>
      			   <p className="list_desc1 mb8">{this.props.datas.title}</p>
      			   <p className="mb8">已有<span style={{color:"red"}}>{this.props.datas.evaluation}</span>人评价</p>
      			   <p style={{color:"#ffaa71"}}>{this.props.datas.store}</p>
      			</div>
			
		);
	}
	over(index){
		var that=this;
		return function(){
			that.setState({
				index:index
			})
		}
	}
}