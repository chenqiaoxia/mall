import React from 'react';

export default class About extends React.Component{
	render(){
		var imgSrcs = ['truste.png','v-logo-2.png','v-logo-1.png','v-logo-3.png','tr.png'];
		var rightImgs = imgSrcs.map((item,index)=>{
			var style = {height:28,width:'auto'};
			var src = './src/images/' + item;
			return (
				<img key={index} style={style} src={src}/>
			);
		});
		var flexRowCenter = {
			display:'flex',
			flexDirection:'row',
			alignItems:'center'
		};
		return (
			<div style={{
				display:'flex',
				flexDirection:'row',
				justifyContent:'space-between'
			}}>
				<div style={flexRowCenter}>
					<div><img src='./src/images/logo.png'/></div>
					<div style={{
						marginLeft:5
					}}>
						<p style={{
							marginBottom:0
						}}>小米商城|MIUI|米家|米聊|多看|路由器|米粉卡|小米天猫店|隐私政策|问题反馈|Select Region</p>
						<p style={{
							marginBottom:0
						}}>©mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2014]0059-0009号 </p>
						<p style={{
							marginBottom:0
						}}>违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
					</div>
				</div>
				<div style={flexRowCenter}>{rightImgs}</div>
			</div>
		);
	}
}