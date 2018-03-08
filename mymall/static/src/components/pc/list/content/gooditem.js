import React from 'react';
import "../../../../style/list.css"
export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			index:-1
		}
	}
	render(){
		var imgs=[
			{"big":"https://img12.360buyimg.com/n7/jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg","small":"https://img12.360buyimg.com/n9/jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg"},
			{"big":"https://img11.360buyimg.com/n7/jfs/t3073/196/1629389764/137495/265ddb40/57d11b9cNad700eeb.jpg","small":"https://img11.360buyimg.com/n9/jfs/t3073/196/1629389764/137495/265ddb40/57d11b9cNad700eeb.jpg"},
			{"big":"https://img13.360buyimg.com/n7/jfs/t3235/100/1618018440/139400/44fd706e/57d11c33N5cd57490.jpg","small":"https://img13.360buyimg.com/n9/jfs/t3235/100/1618018440/139400/44fd706e/57d11c33N5cd57490.jpg"},
			{"big":"https://img10.360buyimg.com/n7/jfs/t4276/257/2416766721/125228/ba72a107/58d1d078N20e18b62.jpg","small":"https://img10.360buyimg.com/n9/jfs/t4276/257/2416766721/125228/ba72a107/58d1d078N20e18b62.jpg"}
			]
			var image=imgs.map((item,index)=>{
				var border=this.state.index==index?"1px solid red":"1px solid #ddd";
				return (
					<img src={item.small} key={index} onMouseOver={this.over(index)} style={{border:border}}/>
					);
			})
			var aa=this.state.index==-1?0:this.state.index
		return (

			
				<div className="list_item">
      			   <div className="l_i_img"><img src={imgs[aa].big}/></div>
      			   <div className="goods_type_item">
      			      {image}
      			   </div>
      			   <p className="p_list mt8">¥6099.00</p>
      			   <p className="list_desc1 mb8">Apple iPhone X (A1865) 64GB 深空灰色 移动联通电信4G<span>勾选[保障服务][原厂保2年]获得AppleCare+全方位服务，原厂延保更安心。2018焕新机，Apple产品更多活动请点击！</span></p>
      			   <p className="mb8">已有103351人评价</p>
      			   <p>小米官方旗舰店</p>
      			</div>
			
		);
	}
	over(index){
		var that=this;
		return function(){
			that.setState({
				index:index
			})
		}
	}
}