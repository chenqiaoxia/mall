import React from 'react';
import { NavBar, Tabs, WhiteSpace, Badge,Carousel, WingBlank} from 'antd-mobile';
var tabs = [
  { title: "商品介绍" },
  { title: "规格参数" },
  { title: "包装售后"},
];
export default class Common extends React.Component{
	render(){
		var img=["https://img30.360buyimg.com/sku/jfs/t7318/9/2892741390/339473/d27b6ce6/59b63b74N5d74665b.jpg",
		"https://img30.360buyimg.com/sku/jfs/t7591/306/2887288028/75524/a60d84ac/59b63b7fNb229fc9d.jpg","https://img30.360buyimg.com/sku/jfs/t8809/339/1197195247/302699/11fafde2/59b63b80N6c3b96cd.jpg","https://img30.360buyimg.com/sku/jfs/t7363/180/3027654978/304649/723553a3/59b936efNc10b7c15.jpg"]
		var imgs=img.map((item,index)=>{
			return (
				<img src={item} key={index} style={{width:"100%"}}/>
				);
		})
		return (
			<div>
			<Tabs tabs={tabs}
            initialPage={0}
            style={{width:'40%',position:"fixed",top:"0",left:"0"}}
            tabBarUnderlineStyle={{color:"red"}}
            swipeable={false}
          >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
              <div className="ssd-module-wrap">
                 {imgs}
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
              222
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
              333333333333
            </div>
      </Tabs>
				
			</div>
		);
	}
}