import React from 'react';

export default class Common extends React.Component{
	render(){
		// 手机、平板等分类网格
		return (
			<div className="grids bgc">
				<div className="grimg"><img src="https://img10.360buyimg.com/jshopm/jfs/t12523/15/243613659/10283/46cb4e44/5a06b60fN80df7565.jpg!q70.jpg"/></div>
				<div className="grimg"><img src="https://img13.360buyimg.com/jshopm/jfs/t12586/139/253570847/12098/aad6e157/5a06b626Nae6f1408.jpg!q70.jpg"/></div>
				<div className="grimg"><img src="https://img12.360buyimg.com/jshopm/jfs/t13141/203/238164598/12173/2c96d788/5a06b630N9dbf79f8.jpg!q70.jpg"/></div>
				<div className="grimg"><img src="https://img11.360buyimg.com/jshopm/jfs/t12553/66/243786687/14445/1c3d6380/5a06b950Nc18a2818.jpg!q70.jpg"/></div>
			</div>
		);
	}
}