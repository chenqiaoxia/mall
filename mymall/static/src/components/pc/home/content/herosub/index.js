import React from 'react';
require('../../../../../style/herosub.css');
import { Icon } from 'antd';
export default class Common extends React.Component{

	render(){
		var data=[{"icom":"mobile","title":"选购手机"},{"icom":"gift ","title":"企业团购"},{"icom":"form","title":"F码通道"},{"icom":"wallet","title":"米粉卡"},{"icom":"usb","title":"以旧换新"},{"icom":"save","title":"花费充值"}];
		var datas=data.map(function(item,index) {
			return (
				<li className="exposure" key={index}>
				      <Icon type={item.icom} style={{ fontSize:24, color: 'rgba(255,255,255,0.7)' }} className="icon"/>
				      <span>{item.title}</span>
				   </li>
				);
		})
		var img=["https://res.vmallres.com/pimages//sale/2017-12/20171231215818745.png","https://i1.mifile.cn/a4/xmad_15142932350007_dNpbu.jpg","https://i1.mifile.cn/a4/xmad_15065269205274_ENtuP.jpg"]
		var imgs=img.map(function(item,index) {
			return (
				<img src={item} key={index}/>
				);
		})
		return (
			<div className="wrap aa">
				<div className='span4'>
				   <ul className="home-channel-list">
				   {datas}
				   </ul>
				</div>
				 {imgs}
			</div>
		);
	}
}