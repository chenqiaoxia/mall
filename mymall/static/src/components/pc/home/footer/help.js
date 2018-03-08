import React from 'react';
import { Button } from 'antd';
export default class Help extends React.Component{
	render(){
		var lists = [
			 {"title":"帮助中心","detail":["账户管理","购物指南","订单操作"]},
			 {"title":"服务支持","detail":["售后政策","自助服务","相关下载"]},
			 {"title":"线下门店","detail":["小米之家","服务网点","零售网点"]},
			 {"title":"关于小米","detail":["了解小米","加入小米","联系我们"]},
			 {"title":"关注我们","detail":["新浪微博","小米部落","官方微信"]},
			 {"title":"特色服务","detail":["F 码通道","礼物码","防伪查询"]}
		];
		var allHelp = lists.map((item,index)=>{
			var lis = item.detail.map((it,id)=>{
				return (
					<li key={id} style={{
						marginTop:10
					}}>{it}</li>
				);
			});
			return (
				<div key={index} style={{flex:1}}>
					<h3 style={{
						fontWeight:'bolder',
						marginBottom:10
					}}>{item.title}</h3>
					<ul>{lis}</ul>
				</div>
			);
		});
		return (
			<div style={{
				display:'flex',
				flexDirection:'row',
				marginTop:30,
				marginBottom:30
			}}>
				<div style={{
					flex:4,
					display:'flex',
					flexDirection:'row',
					borderRight:'1px solid #e0e0e0'
				}}>
					{allHelp}
				</div>
				<div style={{flex:1,textAlign:'center'}}>
					<p style={{
					    marginBottom:5,
					    fontSize: 22,
					    color: "#ff6700",
					}}>400-100-5678</p>
					<p>周一至周日 8:00-18:00</p>
					<p>（仅收市话费）</p>
					<Button style={{
					    color:" #ff6700",
					    borderColor: "#ff6700"
					}}>24小时在线客服</Button>
				</div>
			</div>
		);
	}
}