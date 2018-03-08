import React from 'react';
import { Carousel, WhiteSpace, WingBlank,Modal,Toast } from 'antd-mobile';
import { Icon } from 'antd';
import Baitiao from './baitiao.js'
import Yixuan from './yixuan.js'
import Songzhi from './songzhi.js'
import Dianpu from './dianpu.js'

export default class Common extends React.Component{
  constructor(){
    super();
    this.state={
       data: ['https://m.360buyimg.com/n12/jfs/t12343/314/1631437021/429830/441294f8/5a24ab84N6763aec1.jpg!q70.jpg', 'https://m.360buyimg.com/n12/jfs/t13354/198/1583577607/401617/cb6681b4/5a24ab8aN7f2a023b.jpg!q70.jpg', 'https://m.360buyimg.com/n12/s828x828_jfs/t14488/36/132288908/346632/820089ae/5a24ab88Nfd829ffe.jpg!q70.jpg'],
       imgHeight: 176,
       slideIndex: 0,
       like:true,
       modal1: false,
    }
  }
  render(){
    var decimg= new Array(); 
      decimg=this.props.data[0].decimg.split(";");
    var heart=this.state.like?"heart-o":"heart"
    return (
      <div style={{width:'100%',backgroundColor:'rgb(240, 242, 245)',marginBottom:'5rem'}}>
         <Carousel
          autoplay={false}
          infinite
          selectedIndex={0}
          style={{borderBottom:'1px solid #ccc'}}
        >
          {decimg.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <div className="modeltitle bgc">
           <span className="modeltitledec">{this.props.data[0].dec}</span>
           <span className="modeltitlelik"><Icon type={heart} style={{color:"red",fontSize: "1.4rem"}} onClick={this.iconclick.bind(this)}/>关注</span>
        </div>
        <div className="modeltitled bgc">
        {this.props.data[0].dec1}<span style={{color:'red',textDecoration:'underline'}}>{this.props.data[0].dec2}</span>
        </div>
        <div className="normalPrice bgc">
            <div className="mldelprice">
            ¥<span>{this.props.data[0].price}</span>.00
            </div>
            <div 
            className="depre"
            onClick={this.showModal.bind(this)}
            >
            降价通知
            </div>   
        </div>
        <Baitiao/>
        <Yixuan/>
        <Songzhi/>
        <Dianpu/>
        <Modal
        visible={this.state.modal1}
        transparent
        maskClosable={false}
        footer={[
          { text: '取消', onPress: () => {  this.onClose(); } },
          { text: '确定', onPress: () => {  this.onClose(); } },
          ]}
        > 
          <div className="depreciate-inform-title">降价通知</div>
          <div className="depreciate-inform-title2">若商品30天内降价，手机短信会通知您</div>
          <input type="text" placeholder="请输入期望价格" className="input-box"/>
          <input type="text" placeholder="请输入手机号码" className="input-box"/>
        </Modal>
      </div>
    );
  }
  iconclick(){
    var islike=!this.state.like
    this.setState({
      like:islike
    })
  }
  showModal(){
    this.setState({
      modal1:true
    })
  }
  onClose(){
    this.setState({
      modal1:false
    })
  }
}