import React from 'react';
import { Icon } from 'antd';
export default class Common extends React.Component{
	render(){
	//遍历屏幕尺寸到网络类别各个项
    var chicun=this.props.data.other.map((item,index)=>{
      //遍历每一个类中一个小模块
      var chicun_li=item.selitem.map((val,ind)=>{
        return (
          <li key={ind}>{val}</li>
          );
      })
      return (
        <div className="J_selectorLine" key={index}>
              <div className="sl-key">
                 {item.seltitle}：
              </div>
              <div className="sl-value">
                <ul className="valueList">
                  {chicun_li}
                </ul>
                <div className="sl-ext mt3">
                    <a className="sl-e-more"><Icon type="plus"/>多选</a>
                </div>
              </div>  
        </div>
        );
    })
		return (
			<div>
				{chicun}
			</div>
		);
	}
}