import React from 'react';
import {Link} from 'react-router-dom';
export default class Common extends React.Component{
	render(){
		if (this.props.data.length>0) {
			var count=this.props.data[this.props.index].item.length;
			var item=Math.ceil(count/6);
			var width=item*256
			var menu=this.props.data[this.props.index].item.map(function(item,index) {
				return(
				  <Link  key={index} to='/detail/123' style={{color:"#000"}}><li>
                         <img src={item.imgSrc}/>
                         <span>{item.name}</span>
                  </li></Link>
					);
                 
			});	
		};
		return (
			<div style={{display:this.props.show}} className="children_box">
			<div className="children" style={{display:'block'}}>
			    {/*菜单列表*/}
			    <ul className="children-list" style={{width:width}}>
                      {menu}
                </ul>      
			</div>	
			</div>
		);
	}

}