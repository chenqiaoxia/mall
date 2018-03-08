import React from 'react';
export default class Common extends React.Component{
	render(){
		return (
			<li className="fore3">
				<div><img src={this.props.data.img}/></div>
				<p>{this.props.data.dec}</p>
				<p className="color_red">￥{this.props.data.price}</p>
			</li>
		);
	}
}