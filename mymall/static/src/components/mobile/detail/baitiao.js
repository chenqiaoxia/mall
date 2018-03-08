import React from 'react';
import { Icon } from 'antd';
import { Modal, Toast } from 'antd-mobile';
export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			modal:false
		}
	}
	render(){
		return (
			<div className="baitiao bgc">
				<div className="whiteBarInfo">
				   <span className="part-note-msg">白条</span>
				   <span className="prod-whitebar-txt">【白条支付】激活白条新用户下单</span>
				</div>
				<div className="prod-promotion">
				   <span className="part-note-msg">促销</span>
				   <div className="arrow-fold">
				        <div className="promotion">
				           <span className="label-text ">满送</span>
				           <span className="promotion-item-text">满19元即赠热销商品，赠完即止</span>
				        </div>
				        <div className="promotion">
				            <span className="label-text ">限制</span>
				            <span className="promotion-item-text">此价格不与套装优惠同时享受</span>
				        </div>
				        <div className="promotion">
				            <span className="label-text ">满额返券</span>
				            <span className="promotion-item-text">购买年货节指定商品，金额满99元即返千元大礼包，送完即止</span>
				        </div>
				   </div>
				   <Icon type="ellipsis" style={{ fontSize: '2rem',marginRight:'1rem' }} onClick={this.clickmore.bind(this)}/>
				</div>
				<Modal
                  popup
                  visible={this.state.modal}
                  animationType="slide-up"
                >
                <div  style={{margin:"1rem 1rem 0rem",height:"30rem"}}>
                <Icon type="close" style={{position:"absolute",right:'1rem',top:'1rem',fontSize:"2rem"}} onClick={this.clickmorehide.bind(this)}/>
                 <div className="baitiaotitle" style={{padding:"1rem 0"}}>促销</div>
                 <div style={{textAlign:"left"}}>
				        <div className="promotion">
				           <span className="label-text ">满送</span>
				           <span className="promotion-item-text">满19元即赠热销商品，赠完即止</span>
				        </div>
				        <div className="promotion">
				            <span className="label-text ">限制</span>
				            <span className="promotion-item-text">此价格不与套装优惠同时享受</span>
				        </div>
				        <div className="promotion">
				            <span className="label-text ">满额返券</span>
				            <span className="promotion-item-text">购买年货节指定商品，金额满99元即返千元大礼包，送完即止</span>
				        </div>
				  </div>
				</div>
                </Modal>
			</div>
		);
	}
	clickmore(){
		 this.setState({
           modal: true,
         });
	}
    clickmorehide(){
    	this.setState({
        modal:false
      })
    }
}