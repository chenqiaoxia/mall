import React from 'react';
import { Icon } from 'antd';
export default class Common extends React.Component{
	render(){
		return (
			<div className="baitiao bgc" style={{position:'relative'}}>
				<div className="prod">
				   <span className="part-note-msg">已选</span>
				   <div className="prod-spec">
				       <span>黑 6GB 64GB 裸机</span>
				       <span><Icon type="safety" />可选延保</span>
				   </div>
				   <Icon type="ellipsis" style={{position:"absolute",right:'1rem',top:'1rem',fontSize:"2rem"}}/>
				</div>
			</div>
		);
	}
}