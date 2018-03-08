import React from 'react';
import { NavBar, Tabs, WhiteSpace, Badge,Carousel, WingBlank} from 'antd-mobile';
import { Icon } from 'antd';
import '../../../style/mobilecss/detail.css'
import Delimg from './delimg.js'
import Deldec from './deldec.js'
import Addcart from './addcart.js'
import {Link} from 'react-router-dom';
var tabs = [
  { title: <div className="ileft"><Link  to='/' style={{color:'#555'}}><Icon type="left" style={{marginRight:'2rem',fontSize:'2rem',marginTop:"1rem"}}/></Link>商品</div> },
  { title: "详情" },
  { title: <div className="ileft">评价<Icon type="bars" style={{marginLeft:'2rem',fontSize:'2rem'}}/></div> },
];
export default class Common extends React.Component{
  constructor(){
    super();
    this.state={
      data: ['https://m.360buyimg.com/n12/jfs/t12343/314/1631437021/429830/441294f8/5a24ab84N6763aec1.jpg!q70.jpg', 'https://m.360buyimg.com/n12/jfs/t13354/198/1583577607/401617/cb6681b4/5a24ab8aN7f2a023b.jpg!q70.jpg', 'https://m.360buyimg.com/n12/jfs/t12712/179/1630172538/49033/bf485bb2/5a24ab8eN87b5d0d3.jpg!q70.jpg'],
      imgHeight: 176,
      slideIndex: 0,
      isshow:false,
      goodsdata:[],
    }
  }
  componentDidMount(){
    var that=this;
    var url='http://localhost:3000/data/modetail?product_id='+this.props.match.params.id;
        fetch(url)
        .then(function(response) {
          return response.json()
        }).then(function(json) {
            that.setState({
               goodsdata:json
            })
        })
  }
	render(){
    var shangpin=this.state.goodsdata.length>0?<Delimg data={this.state.goodsdata}/>:<Icon type="loading" size="lg" />
		var addcarts=this.state.goodsdata.length>0?<Addcart data={this.state.goodsdata} show={this.state.isshow} changefater={this.navChange.bind(this)}/>:<Icon type="loading" size="lg" />
    return (
			<div style={{backgroundColor:'#f0f2f5'}}>  
      <Tabs tabs={tabs}
            initialPage={0}
            style={{width:'40%',position:"fixed",top:"0",left:"0"}}
            tabBarUnderlineStyle={{color:"red"}}
            swipeable={false}
          >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
              {/*商品*/}
              {shangpin}
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
              {/*详情*/}
              <Deldec/>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',  backgroundColor: '#fff' }}>
              这是评论专区
            </div>
      </Tabs>
      <div className="cart-concern-btm-fixed bgc">
          <div className="concern-cart">
              <div className="dong-icn">
                <Icon type="customer-service" style={{fontSize:'1.8rem'}}/>                供应商
              </div>
              <div className="dong-icn">
                <Icon type="shop" style={{fontSize:'1.8rem'}}/>
                进店
              </div>
              <div className="dong-icn">
                <Icon type="shopping-cart" style={{fontSize:'1.8rem'}}/>
                购物车
              </div>
          </div>
          <div className="action-list">
              <div className="add_cart" onClick={this.addcart.bind(this)}>加入购物车</div>
              <div className="directorder">立即购买</div>
          </div>
      </div>
      
			{addcarts}
      </div>
		);
	}
  addcart(){
    this.setState({
      isshow:true
    })
  }
  navChange(show){
    this.setState({
      isshow:show
    })
  }
}