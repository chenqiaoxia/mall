import React from 'react';

export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			num:1
		}
	}
	render(){
		return (
			<div className="addCartNum">
                <span className="part-note-msg">数量</span>
                <div className="quantity-wrapper">
                    <a onTouchStart={this.clickjian.bind(this)}>-</a>
                    <input type="text" value={this.state.num}/>
                    <a onTouchStart={this.clickadd.bind(this)}>+</a>
                </div>
            </div>
		);
	}
	clickadd(){
		var number=this.state.num+1;
		this.setState({
			num:number
		})
	}
	clickjian(){
		var number=this.state.num<=1?1:this.state.num-1;
		this.setState({
			num:number
		})
	}
}