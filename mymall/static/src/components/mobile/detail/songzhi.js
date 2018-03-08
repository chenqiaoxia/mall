import React from 'react';

export default class Common extends React.Component{
	render(){
		return (
			<div className="baitiao bgc">
				<div className="prod">
				   <span className="part-note-msg">送至</span>
				   <div className="prod-spec">
				       <span>北京 朝阳区 管庄</span>
				       <span style={{color:"red"}}>现货，11:10前下单,预计今天(02月11日)送达</span>
				   </div>
				</div>
				<div className="prod" style={{paddingTop:"0rem"}}>
				   <span className="part-note-msg">重量</span>
				   <div className="prod-spec">
				       <span>0.42KG</span>
				   </div>
				</div>
			</div>
		);
	}
}