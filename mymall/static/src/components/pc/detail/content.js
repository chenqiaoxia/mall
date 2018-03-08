import React from 'react';
import { Row, Col,Spin,Tabs,Button,Icon } from 'antd';
import '../../../style/detail.css'
import Options from './options.js'
import Optiono from './option.js'
import Detitem from './detitem.js'
import Access from './access.js'
import Delitem from './delitem.js'


var TabPane = Tabs.TabPane;

export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			datas:[],
			index:0,
			display:'none',
			left:0,
			top:0,
			x:0,
			y:0,
      goodsdata:[]
		}
	}
	componentDidMount(){
		var that=this;
    var url='http://localhost:3000/data/pcdetail?product_id='+this.props.productid;
		fetch('http://p0679v0m2.bkt.clouddn.com/fdj.json')
        .then(function(response) {
          return response.json()
        }).then(function(json) {
        	that.setState({
        		datas:json
        	})
        })
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
    
    // 购物时的分类选项
		var data=[{"title":"选择颜色","option":["银色","深空灰色"],"img":["https://img12.360buyimg.com/n9/s40x40_jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg","https://img14.360buyimg.com/n9/s40x40_jfs/t10690/249/1626659345/69516/b3643998/59e4279aNff3d63ac.jpg"]},
    {"title":"选择版本","option":["公开版","原厂原保版","保险套餐版","分期用"],"img":[]},
    {"title":"选择内存","option":["64GB","256GB"],"img":[]},
    {"title":"购买方式","option":["官方标配","移动优惠购","电信优惠购","联通优惠购"],"img":[]},
    {"title":"选择套装","option":["优惠套装一","优惠套装二","优惠套装三","优惠套装四","优惠套装五"],"img":[]}]
    // 人气配件数据
    var accessories=[
    {"img":"https://img10.360buyimg.com/n4/jfs/t16531/235/1420060667/362181/b3140f46/5a53606bN758577df.jpg","dec":"【2片装】骆尊 荣耀7X钢化膜荣耀V10/华为畅享7S全屏覆盖防爆手机贴膜 荣耀7X-全屏覆盖钢化膜-黑色【2片装】","price":"23.90"},
    {"img":"https://img10.360buyimg.com/n4/jfs/t11377/330/2150658781/569635/b45b1741/5a124c05N12ca0a5f.jpg","dec":"KOLA 荣耀畅玩7X手机壳 TPU软壳保护套 适用于华为荣耀畅玩7X","price":"16.90"},
    {"img":"https://img10.360buyimg.com/n4/jfs/t7372/306/1471242084/83337/80d0d7e4/599d415dN9d46a4b9.jpg","dec":"荣耀移动电源10000mAh充电宝快充宝双向快充18W功率TypeC 与Micro USB双输入快充版AP08Q(黑色)","price":"139.00"},
    {"img":"https://img12.360buyimg.com/n4/jfs/t12841/219/2510343957/254927/6f836faa/5a4334ccNe33211e5.jpg","dec":"倍思（Baseus）苹果/Type-c/安卓数据线三合一快充手机充电线 iPhoneX/7/8plus 小米6华为p10电源线 1.2米 红色","price":"22.90"},
    {"img":"https://img10.360buyimg.com/n4/jfs/t14266/41/467698349/162929/6b9937f4/5a2e3ea2Nbb4e43ec.jpg","dec":"奥睿科 (ORICO）多口USB充电器 苹果手机充电器头2A快充头iPhoneX/8/7plus/6s三星小米华为手机平板 白","price":"19.90"}
    ]
    // 达人选购数据
    var daren=[{"img":"https://img13.360buyimg.com/n1/s180x180_jfs/t10222/98/2103861682/432190/e80aec0a/59ee996bN8824ee40.jpg","dec":"华为（HUAWEI） 荣耀7X 畅玩7X 全面屏手机 铂光金 全网通","price":"1399.00"},
   {"img":"https://img13.360buyimg.com/n1/s180x180_jfs/t16048/233/453912846/116820/60dcfe6c/5a38ca0eNaa120db6.jpg","dec":"华为（HUAWEI） 荣耀 畅玩7X 全面屏 手机 幻夜黑 全网通(4G+64G)","price":"1699.00"},
   {"img":"https://img10.360buyimg.com/n1/s180x180_jfs/t5956/162/2427386953/316038/775a27ed/593e4f99N81634495.jpg","dec":"荣耀9 全网通 高配版 6GB+64GB 魅海蓝 移动联通电信4G手机 双卡","price":"2699.00"},
   {"img":"https://img14.360buyimg.com/n1/s180x180_jfs/t7429/172/4161578964/238154/ff7707d0/59ee9931N20ef1211.jpg","dec":"华为（HUAWEI） 荣耀7x 畅玩7X 手机 铂光金 全网通(4G ","price":"1999.00"},
   {"img":"https://img12.360buyimg.com/n1/s180x180_jfs/t2905/300/3847999660/312900/a9fb3e68/579b201cNed7566f1.jpg","dec":"荣耀 NOTE 8 4GB+64GB 全网通4G手机 铂光金","price":"1999.00"}]
    // 看了又看数据
    var kanle=[{"img":"https://img12.360buyimg.com/n1/s180x180_jfs/t7822/127/3244662484/429341/44648470/59ee996eN76481859.jpg","dec":"华为（HUAWEI） 荣耀7X 畅玩7X 全面屏手机 极光蓝 全网通","price":"1699.00"},
   {"img":"https://img14.360buyimg.com/n1/s180x180_jfs/t9082/256/1635073647/389282/59881773/59bf3c47N91d65c73.jpg","dec":"荣耀8 4GB+64GB 全网通4G手机 魅海蓝","price":"1699.00"},
   {"img":"https://img11.360buyimg.com/n1/s180x180_jfs/t7954/295/2739318795/324650/5eb51634/59dc6704N7c82222c.jpg","dec":"华为 HUAWEI 麦芒 6 全网通 4GB+64GB版 曜石黑 移动联通电信","price":"2199.00"},
   {"img":"https://img10.360buyimg.com/n1/s180x180_jfs/t12085/99/425177400/304199/245a8c8c/5a25ffa1N67c69208.jpg","dec":"华为 HUAWEI nova 2S 全面屏四摄 4GB +64GB 银钻灰 移动联通电信","price":"2699.00"}]
    // 配件每一项的循环
    var acc=accessories.map((item,index)=>{
      return (
        <Access data={item} key={index}/>
        );
    })
    //购物时各个选项
    var arr=data.map((item,index)=>{
      var content=index==0?<Optiono datas={item}/>:<Options datas={item}/>
      return (
          <Options datas={item} key={index}/>
        );
    })
    //左侧达人选购每一项循环
    var darenxuangou=daren.map((item,index)=>{
      return (
        <Delitem data={item} key={index}/>
        );
    })
    //左侧看了又看每一项循环
    var seeandaee=kanle.map((item,index)=>{
      return (
        <Delitem data={item} key={index}/>
        );
    })
    if (this.state.goodsdata.length>0) {
      var bigimg= new Array(); 
      bigimg=this.state.goodsdata[0].norimg.split(";"); 
      var smallimg= new Array(); 
      smallimg=this.state.goodsdata[0].smaimg.split(";"); 
      var lageimg= new Array();  
      lageimg=this.state.goodsdata[0].bigimg.split(";"); 
      var name=this.state.goodsdata[0].title;
      var price=this.state.goodsdata[0].price;
      var dec= new Array(); 
      dec=this.state.goodsdata[0].imgdec.split(";"); 
      var spec=this.state.goodsdata[0].spec;
      var service=this.state.goodsdata[0].service;
    };
   var productname=this.state.goodsdata.length>0?name:<Spin />;
   var productprice=this.state.goodsdata.length>0?price:<Spin />;
   var imgdec=this.state.goodsdata.length>0?dec.map((item,index)=>{
     return (
      <img src={item} key={index}/>
      );
   }):<Spin />;
   var productspec=this.state.goodsdata.length>0?<img src={spec} />:<Spin />;
   var productservice=this.state.goodsdata.length>0?<img src={service} />:<Spin />;
		var big_img=this.state.goodsdata.length>0?<img src={bigimg[this.state.index]}/>:<Spin />;
		// 把每张小图都循环出来并绑定点击事件
    var small_img=this.state.goodsdata.length>0?smallimg.map((item,index)=>{
			return (
				<li key={index} onMouseOver={this.over(index)}>
				   <img src={item}/>
				</li>
				);
		}):<Spin />;
		var lage_img=this.state.goodsdata.length>0?<img src={lageimg[this.state.index]} style={{left:this.state.x,top:this.state.y}}/>:<Spin />;
		return (
			<div>
			<Row>
              <Col span={3}></Col>
              <Col span={18}>
              {/*左边图片和购买选项*/}
              <div className="shangpinmiaoshu">
                 {/*图详情*/}
                 <div className='left_img'>
                 	     <div className='big_img'>
                 	     <div style={{zIndex:1,width:450,height:450,position:'absolute',left:0,top:0}}  onMouseMove={this.move.bind(this)} onMouseOut={this.out.bind(this)}></div>
                 	     <div className='smark' style={{display:this.state.display,left:this.state.left,top:this.state.top}}></div>
                 		 {big_img}
                 	     </div>
                 	     <div className='small_img'>
                 	  <img className="icon" src="https://static.360buyimg.com/item/default/1.0.37/components/preview/i/disabled-prev.png"/>
                 	  <ul>
                 	  	{small_img}
                 	  </ul>
                 	  <img className="icon" src='https://static.360buyimg.com/item/default/1.0.37/components/preview/i/disabled-next.png'/>
                 	     </div>
                 	     <div className='lage_img' style={{display:this.state.display,zIndex:'100'}}>
                 	     	      {lage_img}
                 	     </div>
                 </div>
                 {/*文字描述*/}
                 <div className='desc'>
                 		<div className="sku-name">{productname}</div>
                 		{/*介绍*/}
                 		<div className="news">
                            <div className="item hide">购买可获得原厂2年整机保修(含电池)，和多达2次意外损坏的保修服务。<a href="https://sale.jd.com/act/8yaD0qZuE6VFk.html" target="_blank">购买勾选：保障服务、原厂保2年。</a></div>
                            <div className="item hide">选择下方购买方式的【移动】【电信】【联通】优惠购，套餐有优惠，还有话费返还！</div>
                        </div>
                        {/*灰色框*/}
                        <div className='summary'>
                             <div className="summary-price">
                             	   <div className="dt mt5">京 东 价</div>
                             	   <div className="price">¥{productprice}</div>
                             	   <a className='notice'>降价通知</a>
                             </div>
                             <div className="summary-promotion bb">
                                    <div className="dt">促　　销</div>
                                    <div className="dd">
                                       <div className="huan">
                                       <span className="hon">换购</span>
                                       <span>购买1件可优惠换购热销商品 立即换购 >></span>
                                       </div>
                                       <div className='man'>
                                       <span className="hon">满购</span>
                                       <span>满19元即赠热销商品，赠完即止 详情 >></span>
                                       </div>
                                    </div> 
                             </div>
                             <div className="comment-count">
                                    <p className="comment">累计评价</p>
                                    <a className="count">17万+</a>
                             </div>
                        </div>
                        {/*增值业务*/}
                        <div className='p-choose-wrap'>
                        	<div className="dt">增值业务</div>
                        	<div className="">
                        	    <ul className='choose-support'>
                        	        <li>
                        	           <a data-title="免费提供闲置物品回收服务，完成回收后可获得京东E卡或现金。" className="sa">
                        	             <i className="sprite-old2new" style={{backgroundPosition:'-32px 0'}}></i>
                        	             <span className="sprite-sp">以旧换新，回收旧机</span>
                        	           </a>
                        	        </li>
                        	         <li>
                        	           <a data-title="告别营业厅排队等待，在线变更套餐更快捷更方便。还可享受赠话费、赠流量活动，点击查看详情。" className="sa">
                        	             <i className="sprite-old2new" style={{backgroundPosition: '-16px -32px'}}></i>
                        	             <span className="sprite-sp">4G套餐18元起</span>
                        	           </a>
                        	        </li>
                        	         <li>
                        	           <a data-title="可为商品选择京东定制礼品包装和贺卡后下单" className="sa">
                        	             <i className="sprite-old2new" style={{backgroundPosition:'-16px 0'}}></i>
                        	             <span className="sprite-sp">礼品包装</span>
                        	           </a>
                        	        </li>
                        	    </ul>
                        	</div>
                        </div>
                        {/*配送至*/}
                        <div className='summary-stock'>
                            <div className="dt">配 送 至</div>
                            <div className='store'>
                                <div className='stock-address'>
                                    <span className="text">北京  请选择 </span>
                                	<img src='https://static.360buyimg.com/item/default/1.0.37/components/common/i/arr-close.png'/>
                                </div>                            
                            </div>
                            <div className="store-prompt">
                                 有货
                            </div>
                            <div className='promise-icon'>
                                 支持
                            </div>
                            <div className="icon-list">
                                 <div className='line1'>
                                     <a className='free_delivery_zhong'>
                                        99元免基础运费(20kg内)
                                     </a>
                                     <a className='free_delivery_zhong'>
                                        货到付款
                                     </a>
                                     <a className='free_delivery_zhong'>
                                        京准达
                                     </a>
                                     <a className='free_delivery_zhong noborder'>
                                        211限时达
                                     </a>
                                 </div>
                            </div>
                        </div>
                        <div className="summary-service"> 
                                       由<span className="hl_red">京东</span> 
                                       发货, 并提供售后服务. 11:10前下单,预计
                                       <b>今天(12月31日)</b>送达
                        </div>
                        {/*重量*/}
                        <div className="li">
                            <div className="dt">重　　量</div>
                            <div className="dd">0.47kg</div>
                        </div>
                        <div className="mt20">
                        <div>
                        {arr}
                          </div>
                            
                            {/*增值保障*/}
                            <div className='p-choose sensuo'>
                                 <div className="dt">增值保障</div>
                                 <div className='dd sensuo'>
                                      <div className="yb-item">
                                          <img className="ic" src="https://img11.360buyimg.com//fuwu/jfs/t5431/52/1153921527/1119/b6e6fbf5/590c0c85N460e4552.png"/>
                                          <span className="na">原厂保2年</span>
                                          <span className="pr">￥1288</span>
                                          <i className="arrow-icon"></i>
                                      </div>
                                      <div className="yb-item">
                                          <img className="ic" src="https://img11.360buyimg.com//fuwu/jfs/t5431/52/1153921527/1119/b6e6fbf5/590c0c85N460e4552.png"/>
                                          <span className="na">原厂保2年</span>
                                          <span className="pr">￥1288</span>
                                          <i className="arrow-icon"></i>
                                      </div>
                                 </div>
                            </div>
                            {/*白条分期*/}
                            <div className='p-choose sensuo bbt'>
                                 <div className="dt">白条分期</div>
                                 <div className='dd sensuo'>
                                      <div className="itemm">
                                          <a className='itemm_txt'>
                                             <i>金色</i>
                                          </a>
                                       </div>
                                       <div className="itemm">
                                          <a className='itemm_txt'>
                                             <i>金色</i>
                                          </a>
                                       </div>
                                 </div>
                            </div>
                            {/*立即购买*/}
                            <div className='choose-btns sensuo'>
                                <div className="choose-amount ">
                                    <div className="wrap-input">
                                        <input className="text buy-num"/>
                                        <a className="btn-reduce disabled">-</a>
                                        <a className="btn-add">+</a>
                                    </div>
                                </div>
                                <a className='btn-special1'>加入购物车</a>
                            </div>
                        </div>
                 </div>
              </div>
              {/*详细介绍*/}
              <div className="xiangximiaoshu">
                 {/*人气配件*/}
                 <Tabs defaultActiveKey="1">
                   <TabPane tab="人气配件" key="1">
                       <div className="tab-con">
                           {/*手机项*/}
                           <Detitem/>
                           {/*加号*/}
                           <div className="plus"></div>
                           {/*前一项*/}
                           <a className="xxms_prev"></a>
                           {/*每一个配件项*/}
                           {acc}
                           {/*后一项*/}
                           <a className="xxms_next"></a>
                           {/*等于号*/}
                           <div className="equal"></div>
                           {/*组合价格*/}
                           <div className="infos">
                            <p className="mb5">已选择了0个配件</p>
                            <p className="zuhejia mb5">组合价<span>¥1990.0</span></p>
                             <Button className="mb5">立即购买</Button>
                             <Button className="mb5">配件选购中心</Button>
                           </div>
                       </div>
                   </TabPane>
                   <TabPane tab="手机贴膜" key="2">Tab 2</TabPane>
                   <TabPane tab="手机壳" key="3">Tab 3</TabPane>
                   <TabPane tab="移动电源" key="4">Tab 3</TabPane>
                   <TabPane tab="数据线" key="5">Tab 3</TabPane>
                   <TabPane tab="充电器" key="6">Tab 3</TabPane>
                   <TabPane tab="更多" key="7">Tab 3</TabPane>
                 </Tabs>
                 {/*详细介绍*/}
                 <Row type="flex" justify="start">
                     {/*店铺名称 达人选购*/}
                     <Col span={4}>
                            <div className="popbox">
                           {/*店铺名称*/}
                           <div className="mt">
                            荣耀京东自营旗舰店<Icon type="customer-service"/>
                           </div>
                           <div className="mc">
                            <a className="enter-shop">
                            <Icon type="home" style={{color:"#df3033"}}/>
                            进店逛逛
                            </a>
                            <a className="enter-shop">
                            <Icon type="star-o" style={{color:"#df3033"}}/>
                            关注店铺
                            </a>
                           </div>
                            </div>
                            {/*达人选购*/}
                            <div className="popbox">
                           {/*名称*/}
                           <div className="mt">
                            达人选购
                           </div>
                           <ul className="plist">
                              {darenxuangou}
                           </ul>
                            </div>
                            {/*看了又看*/}
                            <div className="popbox">
                           {/*名称*/}
                           <div className="mt">
                            看了又看
                           </div>
                           <ul className="plist">
                              {seeandaee}
                           </ul>
                            </div>
                     </Col>
                     {/*商品介绍*/}
                     <Col span={20}>
                            <div className="spjs">
                                <Tabs defaultActiveKey="1">
                                  <TabPane tab="商品介绍" key="1" className="spjs_img">
                                    {imgdec}
                                  </TabPane>
                                  <TabPane tab="规格与包装" key="2">{productspec}</TabPane>
                                  <TabPane tab="售后保障" key="3">{productservice}</TabPane>
                                  <TabPane tab="商品评价" key="4">Tab 3</TabPane>
                                  <TabPane tab="手机社区" key="5">Tab 3</TabPane>
                                </Tabs>
                            </div>
                     </Col>
                 </Row>
              </div>
              </Col>
              <Col span={3}></Col>
            </Row>
				
			</div>
		);
	}
	over(index){
		return ()=>{
			this.setState({
			index:index
		})
		}
		
	}
	move(e){
		var ofX=e.nativeEvent.offsetX;
		var ofY=e.nativeEvent.offsetY;
		var left;
		var top;
		if (ofX-151<=0) {
			left=0
		}else if(ofX>=300){
			left=147
		}else{
			left=ofX-151;
		};
		if (ofY-151<=0) {
			top=0
		}else if(ofY>=300){
			top=147
		}else{
			top=ofY-151;
		};
		this.setState({
			display:'block',
			left:left,
			top:top,
			x:-ofX*(600/450),
			y:-ofY*(600/450)
		})
	}
	out(){
		this.setState({
			display:'none'
		})
	}
}