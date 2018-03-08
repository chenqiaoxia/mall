import React from 'react';
import { Row, Col,Icon,Cascader,Checkbox,Spin,Pagination } from 'antd';
import "../../../style/list.css";
import Gooditem from './content/gooditem.js'
import Goods from './content/goods.js'
import Brand from './content/brand.js'
import Chicun from './content/chicun.js'
import Senior from './content/senior.js'
import Leftlist from './content/leftlist.js'
import Filter from './content/filter.js'
import {Link} from 'react-router-dom';
var datas={
    "brand":{
        "seltitle":"品牌",
        "selimgtwo":[
            "https://img20.360buyimg.com/popshop/jfs/t5662/36/8888655583/7806/1c629c01/598033b4Nd6055897.jpg",
            "https://img20.360buyimg.com/popshop/jfs/t2989/240/151377693/3895/30ad9044/574d36dbN262ef26d.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t7084/169/439244907/4647/724c7958/598042c9N6e4e79e5.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t2701/34/484677369/7439/ee13e8fa/5716e2c4Nc925baf3.jpg",
            "",
            "https://img20.360buyimg.com/popshop/jfs/t2458/318/1092287831/5774/b7b4ff89/563b3484N9ba68e13.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t3511/131/31887105/4943/48f83fa9/57fdf4b8N6e95624d.jpg",
            "https://img20.360buyimg.com/popshop/jfs/t2398/233/975959106/6263/a786f5b8/563b33ffN9c288c6c.jpg",
            "https://img20.360buyimg.com/popshop/jfs/t2119/133/2264148064/4303/b8ab3755/56b2f385N8e4eb051.jpg",
            "https://img20.360buyimg.com/popshop/jfs/t5182/149/2437584670/15334/2e1ebf3/591aa1abN602ebecf.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t2572/102/189476501/7717/16cc5814/563b33d4N6c59780c.jpg",
            "https://img20.360buyimg.com/popshop/jfs/t1954/102/907711365/5487/9f26868f/5631ccdeNe8df5efb.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t3553/225/1930378991/5787/c2ebdd72/5836e479N88a98abb.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t2101/155/882410684/3730/b24b14db/5631cd12N7548352d.jpg",
            "https://img20.360buyimg.com/popshop/jfs/t2413/204/2928322939/11997/1a757fce/56fc94e0Nc4581b2a.jpg",
            "https://img20.360buyimg.com/popshop/jfs/t2704/26/3871123383/2969/4cb7c45f/579eb5dcN684f85fe.jpg",
            "https://img20.360buyimg.com/popshop/jfs/t2521/347/883897149/3732/91c917ec/5670cf96Ncffa2ae6.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t2551/271/1317227522/3284/7419745e/56a855a3Ne38ee719.jpg"
            ],
        "selimg":[
            "https://img20.360buyimg.com/popshop/jfs/t5662/36/8888655583/7806/1c629c01/598033b4Nd6055897.jpg",
            "https://img20.360buyimg.com/popshop/jfs/t2989/240/151377693/3895/30ad9044/574d36dbN262ef26d.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t7084/169/439244907/4647/724c7958/598042c9N6e4e79e5.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t2701/34/484677369/7439/ee13e8fa/5716e2c4Nc925baf3.jpg",
            "",
            "https://img20.360buyimg.com/popshop/jfs/t2458/318/1092287831/5774/b7b4ff89/563b3484N9ba68e13.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t3511/131/31887105/4943/48f83fa9/57fdf4b8N6e95624d.jpg",
            "https://img20.360buyimg.com/popshop/jfs/t2398/233/975959106/6263/a786f5b8/563b33ffN9c288c6c.jpg",
            "https://img20.360buyimg.com/popshop/jfs/t2119/133/2264148064/4303/b8ab3755/56b2f385N8e4eb051.jpg",
            "https://img20.360buyimg.com/popshop/jfs/t5182/149/2437584670/15334/2e1ebf3/591aa1abN602ebecf.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t2572/102/189476501/7717/16cc5814/563b33d4N6c59780c.jpg",
            "https://img20.360buyimg.com/popshop/jfs/t1954/102/907711365/5487/9f26868f/5631ccdeNe8df5efb.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t3553/225/1930378991/5787/c2ebdd72/5836e479N88a98abb.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t2101/155/882410684/3730/b24b14db/5631cd12N7548352d.jpg",
            "https://img20.360buyimg.com/popshop/jfs/t2413/204/2928322939/11997/1a757fce/56fc94e0Nc4581b2a.jpg",
            "https://img20.360buyimg.com/popshop/jfs/t2704/26/3871123383/2969/4cb7c45f/579eb5dcN684f85fe.jpg",
            "https://img20.360buyimg.com/popshop/jfs/t2521/347/883897149/3732/91c917ec/5670cf96Ncffa2ae6.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t2551/271/1317227522/3284/7419745e/56a855a3Ne38ee719.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t2560/279/23813773/3854/d4c5c191/5632c1dbN7a1def70.jpg",
            "",
            "https://img30.360buyimg.com/popshop/jfs/t2815/64/1277517721/2672/ece33803/57396d92N3e802994.png",
            "https://img30.360buyimg.com/popshop/jfs/t4975/56/2050623832/5785/44fc3a55/58f74d5aN23fc1dff.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t661/253/1423421688/3172/97b24a13/54dab3ccNd4aec44d.jpg",
            "https://img20.360buyimg.com/popshop/g15/M0A/1E/19/rBEhWVK6vesIAAAAAAAG7MDQSzsAAHOQQLGKpQAAAcE062.png",
            "https://img30.360buyimg.com/popshop/jfs/t4759/158/117484384/5124/74c314d7/58db2764N71d59f1b.png",
            "https://img30.360buyimg.com/popshop/jfs/t3682/304/2306896695/2803/98cf752c/58491febN6694b0a8.jpg",
            "https://img20.360buyimg.com/popshop/g14/M00/09/10/rBEhV1K6uOwIAAAAAAAGxx0kTvQAAHWYwPIloIAAAbf434.png",
            "https://img20.360buyimg.com/popshop/jfs/t8812/41/1745658365/7482/edca3c29/59c89c68N7f5527f9.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t2500/94/1639638599/22578/814ed39b/5668f2afN632b91c6.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t7672/5/613320372/3853/5bcb2027/59956bc5Na0e765cd.png",
            "https://img20.360buyimg.com/popshop/jfs/t1333/215/832954255/3544/50913407/55a8d840Nd3b95a32.png",
            "https://img30.360buyimg.com/popshop/jfs/t6799/74/1348425607/15774/bc286188/59804c98N1944175e.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t2335/273/1452782667/12466/b57b94e1/56a82fc0N787b0b09.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t2830/42/1246856630/3519/736447b0/5739678aN679faf0d.jpg",
            "https://img20.360buyimg.com/popshop/jfs/t5503/40/156083984/16880/5a948827/58f9af44N72f78dbd.jpg",
            "https://img30.360buyimg.com/popshop/jfs/t5836/31/951952716/2427/77f5df19/5922ce08N0ec247a1.png"
        ],
        "selname":[
            "华为（HUAWEI）",
            "Apple",
            "小米（MI）",
            "三星（SAMSUNG）",
            "苹果（APPLE）",
            "vivo",
            "魅族（MEIZU）",
            "一加",
            "OPPO",
            "360",
            "诺基亚（NOKIA）",
            "锤子（smartisan）",
            "美图（meitu）",
            "努比亚（nubia）",
            "金立（Gionee）",
            "索尼（SONY）",
            "酷派（Coolpad）",
            "中兴（ZTE）",
            "HTC",
            "荣耀",
            "黑莓（BlackBerry）",
            "飞利浦（PHILIPS）",
            "摩托罗拉（Motorola）",
            "夏普（SHARP）",
            "天语（K-Touch）",
            "守护宝",
            "乐视TV（Letv）",
            "小辣椒",
            "YOTA",
            "纽曼（Newman）",
            "AGM",
            "21KE",
            "联想（Lenovo）",
            "海信（Hisense）",
            "迪美（DIM）",
            "LG",
            "长虹（CHANGHONG）",
            "谷歌（Google）",
            "VERTU"
        ]
    },
    "senior":{
        "seltitle":"高级选项",
        "selitem":[
            {
                "selitemname":"机身内存",
                "itemm":[
                    "8GB及以下",
                    "8GB",
                    "16GB",
                    "32GB",
                    "64GB",
                    "128GB",
                    "256GB",
                    "支持内存卡"
                ]
            },
            {
                "selitemname":"电池容量",
                "itemm":[
                    "1200mAh及以下",
                    "1200mAh-1999mAh",
                    "2000mAh-2999mAh",
                    "3000mAh-3999mAh",
                    "4000mAh-5999mAh",
                    "6000mAh及以上"
                ]
            },
            {
                "selitemname":"系统",
                "itemm":[
                    "基础功能机系统",
                    "安卓（Android）",
                    "苹果（IOS）",
                    "其他"
                ]
            },
            {
                "selitemname":"大家说",
                "itemm":[
                    "机身薄",
                    "照相不错",
                    "系统流畅",
                    "待机时间",
                    "长通话",
                    "质量好",
                    "配置高",
                    "软件也不错",
                    "适合老人用",
                    "分辨率高",
                    "功能齐全",
                    "价格便宜",
                    "外观不错",
                    "字体大",
                    "屏幕大",
                    "反应快"
                ]
            },
            {
                "selitemname":"CPU核数",
                "itemm":[
                    "八核",
                    "功能机",
                    "十核",
                    "单核",
                    "双四核",
                    "双核",
                    "四核",
                    "其他"
                ]
            }
        ]
    },
    "other":[
        {
            "seltitle":"屏幕尺寸",
            "selitem":[
                "3.0英寸及以下",
                "4.5-3.1英寸",
                "5.0-4.6英寸",
                "5.5-5.1英寸",
                "5.6英寸及以上"
            ]
        },
        {
            "seltitle":"运行内存",
            "selitem":[
                "2GB及以下",
                "2GB",
                "3GB",
                "4GB",
                "6GB",
                "8GB"
            ]
        },
        {
            "seltitle":"网络",
            "selitem":[
                "2G网络",
                "双卡单4G",
                "双卡双4G",
                "电信4G",
                "移动4G",
                "移动4G+",
                "移动4G/联通4G",
                "移动4G/联通4G/电信4G",
                "联通4G",
                "双卡"
            ]
        }
    ]
}
export default class Common extends React.Component{
  constructor(){
    super();
    this.state={
      datas:[],
      selimg:[],
      selname:[],
      selimgtwo:[],
      goods:[]
    }
  }
  componentDidMount(){
    var that=this;
    fetch('http://p0679v0m2.bkt.clouddn.com/detailchoose.json')
        .then(function(response) {
          return response.json()
        }).then(function(json) {
          that.setState({
            datas:json,
          })
        })
    fetch('http://localhost:3000/data/goods')
        .then(function(response) {
          return response.json()
        }).then(function(json) {
          that.setState({
            goods:json,
          })
        })
  }
	render(){
    var brand=<Brand data={datas}/>;
    var chicun=<Chicun data={datas}/>;
    var senior=<Senior data={datas}/>;
    var selsql=this.state.goods.length>0?this.state.goods.map((item,index)=>{
        var url="/detail/"+this.state.goods[index].product_id
        return (
                <Link  key={index} to={url} style={{color:"#000"}}><Goods datas={item} /></Link>
            );
    }):<Spin />;
		return (
			<div>
			    <Row>
                  <Col span={2}></Col>
                  <Col span={20}>
                        {/*产品选择项*/}
                        <div className="product_type">
                             {/*品牌项*/}
                             {brand}
                             {/*屏幕尺寸~网络*/}
                             {chicun}
                             {/*高级选项*/}
                             {senior}
                        </div>
                        <Row style={{marginTop:50}}>
                          <Col span={4}>
                            {/*左侧商品列表*/}
                            <Leftlist/>
                          </Col>
                          <Col span={20}>
                              <div className="list_content_rigth">
                                {/*中间上面综合、销量、评论数、新品等选项*/}
                                <Filter/>
                                {/*商品列表*/}
                                {selsql}
                              	<Gooditem/>
                              	<Gooditem/>
                              	<Gooditem/>
                              	<Gooditem/>
                              	<Gooditem/>
                              	<Gooditem/>
                              	<Gooditem/>
                                <Gooditem/>
                                <Gooditem/>
                                <Gooditem/>
                                <Gooditem/>
                                <Gooditem/>
                                <Gooditem/>
                                <Gooditem/>
                                <Gooditem/>
                                <Gooditem/>
                                <Gooditem/>
                                <Gooditem/>
                                <Gooditem/>
                                <Gooditem/>
                                <Gooditem/>
                                <Gooditem/>
                                <Gooditem/>
				             </div>
                                 <div style={{marginTop:50,textAlign:"center"}}><Pagination showQuickJumper defaultCurrent={2} total={500} /></div>
                          </Col>
                        </Row>
                  </Col>
                  <Col span={2}></Col>
          </Row>
				
			</div>
		);
	}

}