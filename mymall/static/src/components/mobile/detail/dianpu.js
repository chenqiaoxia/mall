import React from 'react';
import { Icon } from 'antd';
export default class Common extends React.Component{
	render(){
		return (
			<div className="baitiao bgc">
				<div className="prod pdl2">
				   <div className="s-r">
				        <div className="shop-row1">
				           <img src="https://img12.360buyimg.com/jshopm/jfs/t3151/6/5659791831/8211/1c09f3aa/5875f462Nba0e7880.jpg"/>
				        	  <div className="shop-name">
				        	     <div className="sn-title">小米京东官方自营旗舰店</div><div className="ziying">自营</div>
				        	  	 <div className="shop-slogan">官方授权 手机/电视/笔记本/智能硬件</div>
				        	  </div>
				        </div>
				        <div className="shop-tab">
				           <div className="tabs">
				               <div className="num">567.7万</div>
				               <div className="text">关注人数</div>
				           </div>
				           <div className="tabs">
				           	  <div className="num">136</div>
				               <div className="text">全部商品</div>
				           </div>
				        </div>
				        <div className="shop-footer">
				        	<div className="shop-btn"><Icon type="heart" />已关注的店铺</div>
				        	<div className="shop-btn"><Icon type="shop" />进店逛逛</div>
				        </div>
				   </div>
				</div>
			</div>
		);
	}
}