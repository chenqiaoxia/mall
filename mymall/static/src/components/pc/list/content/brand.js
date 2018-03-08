import React from 'react';
import { Icon } from 'antd';
export default class Common extends React.Component{
	constructor(){
      super();
      this.state={
        isclickmore:false,
        brandindex:-1,
      }
    }
	render(){
	var brand=this.state.isclickmore?this.props.data.brand.selimg.map((item,index)=>{
       var ishowname=this.state.brandindex==index?"block":"none";
       var ishowimg=this.state.brandindex==index?"none":"block";
       var img=item!=""?<img src={item} style={{display:ishowimg}}/>:<span>{this.props.data.brand.selname[index]}</span>;
      return (
        <li key={index} onMouseOver={this.selover(index)}>
          {img}
          <span style={{display:ishowname}}>{this.props.data.brand.selname[index]}</span>
         </li> 
        );
    }):this.props.data.brand.selimgtwo.map((item,index)=>{
      var ishowname=this.state.brandindex==index?"block":"none";
      var ishowimg=this.state.brandindex==index?"none":"block";
      var img=item!=""?<img src={item} style={{display:ishowimg}}/>:<span>{this.props.data.brand.selname[index]}</span>;
      return (
        <li key={index} onMouseOver={this.selover(index)}>
          {img}
          <span style={{display:ishowname}}>{this.props.data.brand.selname[index]}</span>
         </li> 
        );
    })
		return (
			<div className="J_selectorLine">
		    {/*循环遍历分类中的各个品牌*/}
                <div className="sl-key">
                   品牌：
                </div>
                <div className="sl-value">
                   <ul className="J_valueList">
                     {brand}
                   </ul>
                   <div className="sl-ext mt10">
                     <a className="sl-e-more" onClick={this.clickmore.bind(this)}>更多<Icon type="down"/></a>
                     <a className="sl-e-more"><Icon type="plus"/>多选</a>
                   </div>
                </div>  
            </div>
		);
	}
	clickmore(){
		//点击更多时加载更多的品牌或者收起更多品牌
      var click=!this.state.isclickmore;
      this.setState({
          isclickmore:click
      })
    }
    selover(index){
    	// 获得鼠标划过时的对应品牌的下标,设置给brandindex
       var that=this;
        return function(){
          that.setState({
            brandindex:index
        })
        }
        
    }
}