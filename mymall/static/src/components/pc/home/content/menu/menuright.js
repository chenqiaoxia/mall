import React from 'react';
require('../../../../../style/menu.css');
import { Spin,Carousel } from 'antd';



export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			arr1:[]
		}
	}
	componentDidMount(){
		var that=this;
		fetch('http://localhost:3000/data/lunbotu')
        .then(function(response) {
          return response.json()
        }).then(function(json) {
        	that.setState({
        		arr1:json
        	})
        })

	}

	render(){
		var datu=this.state.arr1.length>0?this.state.arr1.map((item,index)=>{
			return (
					<div key={index}><img src={item.img}/></div>
				);
		}):<Spin />;
		return (
			<div className="menuright">
			    <Carousel autoplay>
                  {datu}
                </Carousel>
			</div>
		);
	}
}