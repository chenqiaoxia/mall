import React from 'react';
import '../../../../style/content_head.css'
import { Icon } from 'antd';

export default class Common extends React.Component{
  constructor(){
    super();
    this.state={
      index:0
    }
  }
	render(){
    var than=this
    var info=this.props.data.list.length==0?<div className="xm-controls xm-controls-line-small xm-carousel-controls">
                      <a className="control-prev iconfont" onClick={this.prev.bind(this)}><Icon type="left" /></a>
                      <a className="control-next iconfont control-disabled" onClick={this.next.bind(this)}><Icon type="right" /></a>
                   </div>
                   :
                    this.props.data.list.map((item,index)=>{
                      var color=index==this.state.index?"#f00":"#5B5B5B"
                     return (
                        <div className="head_title" key={index} onMouseOver={this.over(index)} style={{color:color}}>{item}</div>
                      );
                   })
                  
		return (
			<div>
				<div className="box-hd">
                <h2 className="title">{this.props.data.title}</h2>
                <div className="more">
                   {info}
                </div>
            </div>
			</div>
		);
	}
  over(index){
    var that=this;

    return function(){
      that.setState({
      index:index
    })
        that.props.changefater(index);
    }
  }
  prev(){
    var count=1;
    this.props.operation(count);
  }
  next(){
    var count=2;
    this.props.operation(count);
  }
}