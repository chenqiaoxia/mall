import React from 'react';
import { Modal, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { Icon } from 'antd';
import Decselitem from './decselitem.js'
import Addcartnum from './addcartnum.js'
export default class Common extends React.Component{
	render(){
		return (
			<div className="addcart">
				<Modal
                  popup
                  visible={this.props.show}
                  animationType="slide-up"
                  style={{overflow: 'visible'}}
                >
                  <div className="spec-menu">
                     <div className="spec-menu-top">
                        <div className="spec-first-pic">
                          <img src={this.props.data[0].smalimg}/>
                        </div>
                        <div className="spec-price">
                           <span className="yang-pic">{this.props.data[0].price}</span>
                           <span className="spec-weight">重量：0.42KG</span>
                        </div>
                        <Icon type="close" style={{position:"absolute",right:'1rem',top:'1rem',fontSize:"2rem"}} onClick={this.Close.bind(this)}/>
                     </div>
                     <div className="spec-menu-cen">
                      <Decselitem data={this.props.data[0].color}/>
                     	<Decselitem data={this.props.data[0].type}/>
                     	<Addcartnum/>
                     </div>
                  </div>
                  <div className="flick-menu-btn">
                     	   <div className="yellow-cart">加入购物车</div>
                     	   <div className="red-directordert">立即购买</div>
                     	</div>
                </Modal>
			</div>
		);
	}
	Close(){
   		var show=false;
        this.props.changefater(show);
  }
}