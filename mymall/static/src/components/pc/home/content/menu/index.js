import React from 'react';
import MenuLeft from './menuleft.js';
import MenuRight from './menuright.js';
import { Row, Col } from 'antd';
require('../../../../../style/menu.css');

export default class Common extends React.Component{
	render(){
		return (
			<div className="menu">
				
                  <div  className="menucontent">
                     {/*轮播图*/}
                      <MenuRight/>
                    {/*左侧菜单栏*/}
                     <MenuLeft/>
                     
                  </div>
                  
			</div>
		);
	}
}