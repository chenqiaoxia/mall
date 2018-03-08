import React from 'react';
import {  Row, Col,Popover,NavBar, Icon,SearchBar,Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import '../../../style/mobilecss/home.css'
import MoHeader from './header.js'
import Slider from './slider.js'
import Grids from './grids.js'
import Tabbar from './tabbar.js'
import Newgood from './newgood.js'
import Moitem from './moitem.js'
var imgs=["https://img14.360buyimg.com/jshopm/jfs/t17755/14/275808843/141605/9fa78a37/5a676752Ne5dba485.jpg!q70.jpg",
"https://img11.360buyimg.com/jshopm/jfs/t17470/313/196234541/113391/ed5d6f99/5a6305c6Naee6238e.jpg!q70.jpg",
"https://img13.360buyimg.com/jshopm/jfs/t17290/258/159842519/161556/dd35a091/5a60aecbN37c1c795.jpg!q70.jpg",
"https://img11.360buyimg.com/jshopm/jfs/t17821/11/333513872/201149/dd6737c2/5a6ac954Nf000bc22.jpg!q70.jpg",
"https://img10.360buyimg.com/jshopm/jfs/t14962/141/2148510913/176572/2b716a7e/5a730882Ndd407f88.jpg!q70.jpg",
"https://img10.360buyimg.com/jshopm/jfs/t14599/79/1923405156/102598/423a4f00/5a60b021N0a814cf7.jpg!q70.jpg",
"https://img12.360buyimg.com/jshopm/jfs/t17911/184/157269129/124719/9bf2476c/5a60b04eN50309f76.jpg!q70.jpg",
"https://img11.360buyimg.com/jshopm/jfs/t15454/55/1928993005/127124/71857671/5a60b072Nd0af67e9.jpg!q70.jpg",
"https://img13.360buyimg.com/jshopm/jfs/t16735/353/300331936/143833/dc3a16bb/5a6ac954Nd438cb9b.jpg!q70.jpg",
"https://img11.360buyimg.com/jshopm/jfs/t17821/11/333513872/201149/dd6737c2/5a6ac954Nf000bc22.jpg!q70.jpg",
"https://img14.360buyimg.com/jshopm/jfs/t14926/222/2088523111/106798/35deb5f9/5a6ac954Nc15cb858.jpg!q70.jpg",
"https://img11.360buyimg.com/jshopm/jfs/t17794/8/310388348/235430/f486d93c/5a6ac954N98f13c2d.jpg!q70.jpg",
"https://img14.360buyimg.com/jshopm/jfs/t16327/281/1915486533/90729/97083727/5a6ac954Neec8d1ca.jpg!q70.jpg"
]
export default class Common extends React.Component{
  render(){
    var good=imgs.map((item,index)=>{
      return (
          <Newgood data={item} key={index}/>
        );
    })
    return (
      <div className="modiv">
          {/*头部搜索框*/}
          <MoHeader/>
          {/*轮播图*/}
          <Slider/>
          {/*手机、电脑等分类网格*/}
          <Grids/>
          {/*新品推荐*/}
          {good}
          {/*产品项*/}
          <Moitem/>
          {/*底部标签栏*/}
          <Tabbar/>
      </div>
    );
  }
}