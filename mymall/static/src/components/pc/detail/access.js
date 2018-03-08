import React from 'react';
import { Checkbox } from 'antd';

export default class Common extends React.Component{
	render(){
		return (
			<div className="master">
			 {/*配件中的每一项*/}
				<img src={this.props.data.img}/>
				<p>{this.props.data.dec}</p>
				<Checkbox> ￥{this.props.data.price}</Checkbox>
			</div>
		);
	}
}