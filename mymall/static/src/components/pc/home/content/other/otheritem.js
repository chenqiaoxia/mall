import React from 'react';
import { Icon,Carousel } from 'antd';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
var data=[
	{"title":"哈利·波特与被诅咒的孩子","dec":"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本!","price":"29.37","img":"https://i1.mifile.cn/a4/5e5da924-84e3-4959-9e25-5891cdf30757"},
	{"title":"2222222222222222222222","dec":"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本!","price":"29.37","img":"https://i1.mifile.cn/a4/61e1385e-54de-48f3-8717-5e4f4b1cdd14"},
	{"title":"哈利·波特与被诅咒的孩子","dec":"“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本!","price":"29.37","img":"https://s01.mifile.cn/i/index/more-duokan.jpg"}]
export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			left:0,
			index:0
		}
	}

	render(){
	var arr=data.map(function(item,index) {
		return (
			<div className="oth_li swiper-slide" key={index}>
				        	<h4 className="oth_h4">
				        	{item.title}
				        	</h4>
				        	<p className="oth_dec">
				        	 {item.dec} 
				        	</p>
				        	<p className="oth_pri">{item.price}元</p>
				        	<div className="oth_d_img">
				        	   <img src={item.img}/>
				        	</div>
				             
			</div>
			);
	})
		return (
			 <div className="other_box">
	    			     <div className="oth_box">
	    			         <h2 className="oth_h2">图书</h2>
	    			         <div className="oth">
			                      <div className="swiper-container">
			                         <div className="swiper-wrapper">
                                     {arr}
                                     </div>
                                      <div className="swiper-pagination"></div>
                                      <div className="swiper-button-prev"></div>
			                  	      <div className="swiper-button-next"></div>
                                  </div>
			                  	 
			                  	
			                  </div>
	    			     </div>
	    			     </div>	
		);
	}
	componentDidMount(){
		var mySwiper = new Swiper('.swiper-container', {
        	autoplay: false,//可选选项，自动滑动
        	 navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
             },
             pagination:{
               el: '.swiper-pagination',
               clickable:true
             },
        })
	}
}