import React from 'react';
import Header from '../home/header/index.js';
import Footer from '../home/footer/index.js';
import Content from './content.js';

export default class Common extends React.Component{
	render(){
		console.log(this.props.match.params.id)
		return (
			<div>
			    {/*头部*/}
			    <Header/>
			    {/*中间部分*/}
			    <Content productid={this.props.match.params.id}/>
			    {/*尾部*/}
			    <Footer/>
			</div>
		);
	}
}