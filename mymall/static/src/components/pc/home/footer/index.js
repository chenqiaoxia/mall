import React from 'react';
import { Row, Col,Button } from 'antd';

import Top from './top.js'
import Help from './help.js'
import About from './about.js'
import Other from './other.js'

export default class Footer extends React.Component{
	render(){
		var sp=this.props.sp?2:3;
		return (
			<div>
				<Row>
					<Col span={sp}></Col>
					<Col span={24-sp*2}>
					    <div className="wrap">
						<Top />
						<Help />
						<About />
						<Other />
						</div>
					</Col>
					<Col span={sp}></Col>
				</Row>
			</div>
		);
	}
}