import React from 'react';
import { Icon } from 'antd';
export default class Common extends React.Component{
	constructor(){
      super();
      this.state={
        gaojikuai:"none",
        gaojiindex:-1,
        num:0,
        gaofa:true,
        gaoch:true
      }
    }
	render(){
		   //遍历高级选项
    var gaoji=this.props.data.senior.selitem.map((item,index)=>{
      var classs=this.state.gaojiindex==index?"sel-li sel-li-select":"sel-li";
      var bb=this.state.gaofa&&this.state.gaoch?"1px solid #ccc":"medium none";
      return (
         <li key={index} className={classs} style={{borderBottom:bb}} onMouseOver={this.gaojiover(index)} onMouseLeave={this.gaojileave.bind(this)}>{item.selitemname}<Icon type="down"/></li>
        );
    })
    //鼠标划过高级选项时对应不同项的显示
    var gaojichild=this.props.data.senior.selitem[this.state.num].itemm.map((item,index)=>{
      return (
            <li key={index}>{item}</li>
        );

    })
    var isgaojishow=this.state.gaofa&&this.state.gaoch?"none":"block";
		return (
			<div>
			  <div className="J_selectorLine">
		      {/*高级选项*/}
                  <div className="sl-key">
                     {this.props.data.senior.seltitle}
                  </div>
                  <div className="sl-value">
                    <ul className="valueList">
                      {gaoji}
                    </ul>
                  </div>
              </div>
              <div className="sel-gaoji-other" style={{display:isgaojishow}} onMouseLeave={this.gaojichildleave.bind(this)} onMouseOver={this.gaojichildover.bind(this)}>
                 <ul>
                    {gaojichild}
                 </ul>
              </div>
            </div>
		);
	}
	gaojiover(index){
      var that=this;
      return function(){
        that.setState({
            gaojikuai:"block",
            gaojiindex:index,
            num:index,
            gaofa:false
        })
      }
      
    }
    gaojileave(){
      this.setState({
            gaofa:true
        })
    }
    gaojichildover(){
      this.setState({
            gaoch:false
        })
    }

    gaojichildleave(){
      this.setState({
            gaoch:true
        })
    }
}
