import React from 'react';
import {  Icon } from 'antd-mobile';
import {Link} from 'react-router-dom';
export default class Common extends React.Component{
	render(){ //头部搜索框
		return (
			<div className="header-content">
               <div className="header-search">
                  <Icon type="search" size='md' style={{position:"absolute",top:"0.5rem",left:"0.5rem",color:"rgba(255,255,255,0.5)"}}/>
                   <Link  to='/search/' style={{color:"#000"}}><input type="text" placeholder="搜索商品"/></Link>
               </div>
               <div className="header-menu">
               </div>
            </div>
		);
	}
}