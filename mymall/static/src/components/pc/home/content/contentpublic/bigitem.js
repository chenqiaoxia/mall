import React from 'react';
//头部模块
import Contenthead from '../content_head.js'
//每个商品小块
import Item from '../item.js'
//右边下半部分
import Rightbutton from './rightbutton.js'
export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			index:0
		}
	}
	render(){
				var head={"title":this.props.data.title,"list":this.props.data.list}
			var arr=this.props.data.gooditem[this.state.index].map(function(item, index) {
						return (
								<Item data={item} key={index}/>
							);
					})	
		return (
			<div className="box1">
						<Contenthead data={head} changefater={this.navChange.bind(this)}/>
						     <div className="left fl">
				   			    <img src={this.props.data.bigimg} className="left_big"></img>
						     </div>
						     <div className="right1 fl">
					              <ul>
								  	{arr}
								  </ul>
					              <Rightbutton/>
				             </div>
			</div>
		);
	}
	navChange(index){
		this.setState({
			index:index
		})
	}
}