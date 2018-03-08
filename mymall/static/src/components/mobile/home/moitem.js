import React from 'react';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import { Spin, Icon } from 'antd';
import {Link} from 'react-router-dom';
var antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			datas:[]
		}
	}
	componentDidMount(){
		var that=this;
		fetch("http://localhost:3000/data/moitem")
		.then(function(response) {
          return response.json()
        }).then(function(json) {
        	that.setState({
        		datas:json
        	})
        })

	}
	render(){
		var phoneitem=this.state.datas.length>0?this.state.datas.map((item,index)=>{
			var url='/detail/'+item.product_id;
			return (
				<div className="moi" key={index}>
			              <Link  to={url}><img src={item.img}/></Link>
			              <p className="mo-dec">{item.dec}</p>
			              <p className="mo-price">￥{item.price}</p>
			     </div>
				);
		}):<Spin indicator={antIcon} />
		return (
			<div className="moitem bgc">
				<WhiteSpace size="lg" />
			    <WingBlank size="lg">
			       <div className="mo-prodect">
			            {phoneitem}
			            <div className="moi">
			              <img src="https://m.360buyimg.com/n1/s220x220_jfs/t8161/224/1169699991/177635/eb2192c2/59b64641N088dd6ad.jpg!q70.jpg"/>
			              <p className="mo-dec">小米Note3 美颜双摄拍照手机 6GB+64GB 黑色 全网通4G手机 双卡双待</p>
			              <p className="mo-price">￥2299</p>
			            </div>
			            <div className="moi">
			              <img src="https://m.360buyimg.com/n1/s220x220_jfs/t6010/111/3843138696/73795/bf58700d/5959ab7fN154e56b4.jpg!q70.jpg"/>
			              <p className="mo-dec">小米Max2 大屏手机 4GB+64GB 金色 全网通4G手机 双卡双待</p>
			              <p className="mo-price">￥1599</p>
			            </div>
			       </div>
			    </WingBlank>
                <WhiteSpace size="lg" />
			</div>
		);
	}
}