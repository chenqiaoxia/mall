import React from 'react';
import '../../../../style/content_public.css'

export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			height:0,
			opacity:0
		}
	}
	render(){
		return (
			<li className='pbli' onMouseOver={this.over.bind(this)} onMouseOut={this.out.bind(this)}>
				<a href="" className="fl"><img src={this.props.data.img} alt=""></img></a>
				<a href="" className="title11">{this.props.data.title}</a>
				<a href="" className="desc11">{this.props.data.desc}</a>
				<a href="">{this.props.data.price}元</a>
				<div className="review-wrapper" style={{height:this.state.height,opacity: this.state.opacity}}>
				    <p className="review_p">
				        <span className="review_p_s">简单易上手  嘿嘿  不错</span>
				        <span className="aut"> 来自于 彭生 的评价 </span>
				    </p>
				</div>
			</li>
		);
	}
	over(){
		var index=0;
		var timer=setInterval(()=>{
			index+=10;
			this.setState({
				height:index,
			    opacity:index
			});
			if (index>=78) {
				this.setState({
				height:78,
			    opacity:1
			});
				clearInterval(timer)
			};
		},10)
	}
	out(){
		var index=78;
		var timer=setInterval(()=>{
			index-=10;
			this.setState({
				height:index,
			    opacity:index
			});
			if (index<=0) {
				this.setState({
				height:0,
			    opacity:0
			});
				clearInterval(timer)
			};
		},10)
	}
}