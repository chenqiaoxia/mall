import React from 'react';
require('../../../../style/header.css');
import {Link} from 'react-router-dom';
import Login from './login.js'
import Registered from './registered.js'
import { Row, Col,Button,Modal,Tabs,Input,Menu, Dropdown, Icon } from 'antd';
var TabPane = Tabs.TabPane;
var Search = Input.Search;
var menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">搜手机</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">搜电脑</a>
    </Menu.Item>
  </Menu>
);
var data=["手机","平板","电视","平板","路由器","盒子","服务","社区"]
const menu1 = (		
                      <Menu className="children-list11 wrap W100">
                        <Menu.Item>
                           <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png" className="si_img"/>
			               <p className="si_title">小米MAI2</p>
			               <p className="si_price">3299元</p>
                        </Menu.Item>

                         <Menu.Item>
                           <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png" className="si_img"/>
			               <p className="si_title">小米MAI2</p>
			               <p className="si_price">3299元</p>
                        </Menu.Item>
                         <Menu.Item>
                           <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mix2320-220.png" className="si_img"/>
			               <p className="si_title">小米MAI2</p>
			               <p className="si_price">3299元</p>
                        </Menu.Item>
                      </Menu>
                    );
export default class Header extends React.Component{
	constructor(){
		super();
		this.state = { 
			visible: false,
			login:false,
			username:'',
			 }
	}
	render(){
		var sp=this.props.sp?2:3;
		var arr=data.map((item,index)=>{
			return (
					<li key={index}>
						<Dropdown overlay={menu1}>
					    <a className="ant-dropdown-link itel" href="#">
                                {item}
                        </a>
                         </Dropdown>
					</li>
					
				);

		})
		var login=this.state.username==""?<div className="lore"><p onClick={this.clicks.bind(this)}>登录</p>
								<p>注册</p></div>:<div className="lore"><p>亲爱的{this.state.username},您好</p><p onClick={this.out.bind(this)}>退出</p></div>
	    
		return (
			<div className="header">
				<div className="site_bn_bar"></div>
			    {/*顶部导航栏*/}
				<div className="site-topbar">
					
						<div className="wrap content">
							<div className="left">
								<ul className="topbar-nav">
									<li><Link to='/'>小米商城</Link></li>
									<li><a>MIUI</a></li>
									<li><a>IoT</a></li>
									<li><a>云服务</a></li>
									<li><a>水滴</a></li>
									<li><a>金融</a></li>
									<li><a>有品</a></li>
									<li><a>Select Region</a></li>
								</ul>
							</div>
							<div className="right">
								{login}
								<p style={{marginRight:20}}>消息通知</p>
								<Link to='/shopchar/123'><Button 
									style={{height:40}} type="danger" icon="shopping-cart">购物车(7)</Button></Link>
							</div>
							</div>		
				</div>
			    {/*商城logo和下拉选项和搜索框*/}
				<div className="wrap ser">
				    <Row className="serch_select">
                      <Col span={17} className="mall_head_left">
                       {/*下拉框*/}
                           {/*商城logo*/}
                           <div className="mall_logo">
                                <img src="./src/images/dianzi.png"/>
                           </div>
                           {/*下拉选项*/}
                           <div className="mall_select_item">
                           
                               <ul>
                                   {arr}
                               </ul>
                            

                             
                           </div>
                      </Col>
                      <Col span={7}>
                      {/*搜索框*/}
                      		<div className="sou">
                   		     <Search
                                placeholder="input search text"
                                onSearch={value => console.log(value)}
                                enterButton
                              />
                              <Dropdown overlay={menu} className="lala">
                                <a className="ant-dropdown-link" href="#">
                                  搜商品<Icon type="down" />
                                </a>
                              </Dropdown>
                           </div>
                      </Col>
                    </Row>
				</div>
				
				{/*点击登录和注册时弹出的模态窗口*/}
				<Modal
                  visible={this.state.visible}
                  onOk={this.handleOk.bind(this)}
                  onCancel={this.handleCancel.bind(this)}
                  footer=''
                >
                        <Tabs defaultActiveKey="1">
 				            <TabPane tab="登录" key="1"><Login changefater={this.loginsuccess.bind(this)}/></TabPane>
 				            <TabPane tab="注册" key="2"><Registered/></TabPane>
 				        </Tabs>
                </Modal>
			</div>
		);
	}
	clicks(){
		this.setState({
			visible: true
		})
	}
	handleOk(){
		this.setState({
			visible: false
		})
	}
	handleCancel(){
		this.setState({
			visible: false
		})
	}
	loginsuccess(resulte,username){
		var name=username
		if (resulte) {
			this.setState({
			visible: false, 
			login: true,
			username:name
		})
		};
		
	}
	out(){
		this.setState({
			login: false,
			username:''
		})
	}
}