import React from 'react';
import { Row, Col ,Input ,Button } from 'antd';
import '../../../../style/login.css'
export default class Common extends React.Component{
  constructor(){
      super();
      this.state={
        username:'',
        userpwd:''
      }
    }
  render(){
    return (
      <div className='login'>
        <div className="login_box">
        <Row>
          <Col span={4}>用户名：</Col>
          <Col span={20}>
              <Input placeholder="请输入用户名" value={this.state.username} onChange={this.username.bind(this)}/>
          </Col>
        </Row>
        </div>
        <div className="login_box">
        <Row>
          <Col span={4}>密码：</Col>
          <Col span={20}><Input placeholder="请输入密码" type="password" value={this.state.userpwd} onChange={this.userpwd.bind(this)}/></Col>
        </Row>
        </div>
        <div className="login_box">
        <Row>
          <Col span={24}><Button type="primary" className="login_btn" onClick={this.login.bind(this)}>登录</Button></Col>
        </Row>
        </div>
      </div>
    );
  }
  login(){ 
      var that=this;
      fetch("http://localhost:3000/data//userlogin/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "username="+this.state.username+"&userpwd="+this.state.userpwd
      }).then(function(response) {
        return response.json()
      }).then(function(json) {
          if(json.resultcode){
            that.props.changefater(json.resultcode,that.state.username);
          }else{
            alert('输入的用户名或密码错误！')
          }
      });

      
  }
  username(e){
       var name=e.target.value;
       this.setState({
        username:name
       })
  }
  userpwd(e){
       var pwd=e.target.value;
       this.setState({
        userpwd:pwd
       })
  }
}