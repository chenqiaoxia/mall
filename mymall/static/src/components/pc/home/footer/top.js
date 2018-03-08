import React from 'react';

import { Row, Col} from 'antd';

export default class Top extends React.Component{
	render(){
		var list = [
		 "预约维修服务",
		 "7天无理由退货",
		 "15天免费换货",
		 "满150元包邮",
		 "520余家售后网点"
		];
		var tips = list.map((item,index)=>{
			var borderRight = (index==list.length-1)?'':'1px solid #e0e0e0';
			return (
				<p key={index}
				style={{
					flex:1,
					textAlign:'center',
					borderRight:borderRight,
					fontSize:16
				}}>{item}</p>
			);
		});
		return (
			<div className="top" style={{borderBottom:'1px solid #e0e0e0',height:80,display:'flex',flexDirection:'row',alignItems:'center'}}>
				{tips}
			</div>
		);
	}
}