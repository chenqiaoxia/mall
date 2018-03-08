import React from 'react';
import { Icon } from 'antd';
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import Topsearch from './topsearch.js'
var alert = Modal.alert;
export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			display:"block"
		}
	}
	render(){
		var hot=["充电宝","加湿器","茶叶","多功能仰卧板","按摩器","铝合金门窗","电热水器","拼装模型","花生油","炒锅"]
		var recently=["华为","荣耀","iphone","小米","锤子","魅族","手机","笔记本电脑","数码产品"]
		var ht=hot.map((item,index)=>{
			return (
					<li key={index}>{item}</li>
				);
		})
		var ry=recently.map((item,index)=>{
			return (
				<li key={index}>{item}</li>
				);
		})
		return (
			<div className="mosearch">
				<Topsearch/>
				<div className="sea_it" style={{display:this.state.display}}>
				   <h3 className="sea_i_p">
				      <span>最近搜索</span>
				      <Icon type="delete" onClick={() => alert('', '确定要清空吗？', [
                        { text: '取消', onPress: () => console.log('cancel') },
                        { text: '确定', onPress:this.sure.bind(this) },
                      ])}/>
                    </h3>
				    <ul className="sea_i">
				     {ry}
				    </ul>
				</div>
				<div className="sea_it">
				    <h3 className="sea_i_p">热门搜索</h3>
				    <ul className="sea_i">
				     {ht}
				    </ul>
				</div>
			</div>
		);
	}
	sure(){
		this.setState({
			display:"none"
		})
	}
}