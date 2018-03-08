import React from 'react';
import { Row, Col ,Input ,Button } from 'antd';
import '../../../../style/login.css'
export default class Common extends React.Component{
	render(){
		return (
			<div className='login'>
              <div className="login_box">
              <Row>
                <Col span={6}>用户名：</Col>
                <Col span={18}>
                    <Input placeholder="请输入用户名" />
                </Col>
              </Row>
              </div>
              <div className="login_box">
              <Row>
                <Col span={6}>密码：</Col>
                <Col span={18}><Input placeholder="请输入密码" /></Col>
              </Row>
              </div>
               <div className="login_box">
              <Row>
                <Col span={6}>确认密码：</Col>
                <Col span={18}><Input placeholder="确认密码" /></Col>
              </Row>
              </div>
              <div className="login_box">
              <Row>
                <Col span={6}>手机号：</Col>
                <Col span={18}><Input placeholder="请输入手机号" /></Col>
              </Row>
              </div>
              <div className="login_box">
              <Row>
                <Col span={6}>验证码：</Col>
                <Col span={12}><Input placeholder="验证码" /></Col>
                <Col span={6}><Button type="primary">获取验证码</Button></Col>
              </Row>
              </div>
              <div className="login_box">
              <Row>
                <Col span={24}><Button type="primary" className="login_btn">注册</Button></Col>
              </Row>
              </div>
            </div>
		);
	}
}