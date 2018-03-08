import React from 'react';
import Header from '../home/header/index.js'
import Footer from '../home/footer/index.js'
import Content from './content.js'

export default class Common extends React.Component{
	render(){
		return (
			<div>
		        {/*头部*/}
				<Header/>
			    {/*购物车*/}
			    <Content/>
		        {/*尾部*/}
				<Footer/>
			</div>
		);
	}
}