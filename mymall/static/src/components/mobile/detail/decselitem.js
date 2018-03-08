import React from 'react';

export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			clickindex:-1,
		}
	}
	render(){
		 var item= new Array(); 
         item=this.props.data.split(";");
		 var items=item.map((item,index)=>{
			var border=this.state.clickindex==index?"1px solid #f00":"1px solid #aaa"
			var color=this.state.clickindex==index?"#f00":"#aaa"
			return(
					<a className="a-item" key={index} style={{border:border,color:color}} onClick={this.clickstyle(index)}>{item}</a>
				);
		})
		return (
			<div className="nature-container">
				<span className="part-msg"> 颜色 </span>
				<p className="nc-ite">
                  {items}
				</p>
			</div>
		);
	}
	clickstyle(index){
		var that=this;
		return function(){
			that.setState({
        		clickindex:index,
        	})
	    }
	}
}