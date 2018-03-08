import React from 'react';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
export default class Common extends React.Component{
	render(){

		return (
			<div className="newgood bgc">
				<WhiteSpace size="lg" />
			    <WingBlank size="lg">
			      <div className="ngimg">
			        <img src={this.props.data}/>
			      </div>
			    </WingBlank>
                <WhiteSpace size="lg" />
			</div>
		);
	}
}