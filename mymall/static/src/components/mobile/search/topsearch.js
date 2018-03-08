import React from 'react';
import {Link} from 'react-router-dom';
import { Icon } from 'antd-mobile';
export default class Common extends React.Component{
	render(){
		return (
			<div className="seatop" style={{position:"fixed",top:0,left:0,width:"100%",zIndex:"100"}}>
				   <Link  to='/' style={{color:"#aaa"}}><Icon type='left' size='lg'/></Link>
				   <input type="text"/>
				   <p>搜索</p>
			</div>
		);
	}
}