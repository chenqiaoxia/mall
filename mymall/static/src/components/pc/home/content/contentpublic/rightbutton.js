import React from 'react';
import '../../../../../style/content_public.css'
export default class Common extends React.Component{
	render(){
		return (
			<div className="c_b_r">
		        {/*中间内容的右下角的两个小块*/}
				<div className="c_b_r_top">
				   <div className="c_b_r_title">
				    <p>小白摄像机</p>
				    <p style={{color:'#ff6700'}}>399元</p>
				   </div>
				   <div className="c_b_r_img">
				      <img src="https://i1.mifile.cn/a1/pms_1468806372.46368911!220x220.jpg"/>
				   </div>
				</div>
				
				<div className="c_b_r_top">
				   <div className="c_b_r_title">
				    <p>小白摄像机</p>
				    <p style={{color:'#ff6700'}}>399元</p>
				   </div>
				   <div className="c_b_r_img">
				      <img src="./src/images/jiantou.jpg"/>
				   </div>
				</div>
			</div>
		);
	}
}