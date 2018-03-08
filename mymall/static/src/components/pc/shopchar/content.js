import React from 'react';
import { Tabs,Row,Col,Table,Checkbox } from 'antd';
import "../../../style/shopcart.css"
var TabPane = Tabs.TabPane;
export default class Common extends React.Component{
	render(){
		const dataSource = [{
                             check:<Checkbox></Checkbox>,
                             goods: 
                             <div className='p-goods'>
                                   <img src='https://img10.360buyimg.com/cms/s80x80_jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg'/>
                                   <div className="goods_dec">
                                   	    <a className="decc">Apple iPhone 7 Plus (A1661) 32G 黑色 移动联通电信4G手机</a>
                                   	    <span className="promise return-y">
                                   	       <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                   	       <a className="ftx-08">支持7天无理由退货</a>
                                   	    </span>
                                   	    <span className="promise return-y">
                                   	       <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                   	       <a className="ftx-08">选包装</a>
                                   	    </span>
                                   </div>
                                   <div className="p-props-new">
									                       <div className="props-txt" >颜色：黑色</div>
									                       <div className="props-txt" >尺码：公开版</div>
								                   </div>
                              </div>,
                             price:666666,
                             count: 6666,
                             total: 6666,
                             operation:'删除'
                           },{
                             check:<Checkbox></Checkbox>,
                             goods: 
                             <div className='p-goods'>
                                   <img src='https://img10.360buyimg.com/cms/s80x80_jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg'/>
                                   <div className="goods_dec">
                                        <a className="decc">Apple iPhone 7 Plus (A1661) 32G 黑色 移动联通电信4G手机</a>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">支持7天无理由退货</a>
                                        </span>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">选包装</a>
                                        </span>
                                   </div>
                                   <div className="p-props-new">
                                         <div className="props-txt" >颜色：黑色</div>
                                         <div className="props-txt" >尺码：公开版</div>
                                   </div>
                              </div>,
                             price:666666,
                             count: 6666,
                             total: 6666,
                             operation:'删除'
                           },{
                             check:<Checkbox></Checkbox>,
                             goods: 
                             <div className='p-goods'>
                                   <img src='https://img10.360buyimg.com/cms/s80x80_jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg'/>
                                   <div className="goods_dec">
                                        <a className="decc">Apple iPhone 7 Plus (A1661) 32G 黑色 移动联通电信4G手机</a>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">支持7天无理由退货</a>
                                        </span>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">选包装</a>
                                        </span>
                                   </div>
                                   <div className="p-props-new">
                                         <div className="props-txt" >颜色：黑色</div>
                                         <div className="props-txt" >尺码：公开版</div>
                                   </div>
                              </div>,
                             price:666666,
                             count: 6666,
                             total: 6666,
                             operation:'删除'
                           },{
                             check:<Checkbox></Checkbox>,
                             goods: 
                             <div className='p-goods'>
                                   <img src='https://img10.360buyimg.com/cms/s80x80_jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg'/>
                                   <div className="goods_dec">
                                        <a className="decc">Apple iPhone 7 Plus (A1661) 32G 黑色 移动联通电信4G手机</a>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">支持7天无理由退货</a>
                                        </span>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">选包装</a>
                                        </span>
                                   </div>
                                   <div className="p-props-new">
                                         <div className="props-txt" >颜色：黑色</div>
                                         <div className="props-txt" >尺码：公开版</div>
                                   </div>
                              </div>,
                             price:666666,
                             count: 6666,
                             total: 6666,
                             operation:'删除'
                           },{
                             check:<Checkbox></Checkbox>,
                             goods: 
                             <div className='p-goods'>
                                   <img src='https://img10.360buyimg.com/cms/s80x80_jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg'/>
                                   <div className="goods_dec">
                                        <a className="decc">Apple iPhone 7 Plus (A1661) 32G 黑色 移动联通电信4G手机</a>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">支持7天无理由退货</a>
                                        </span>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">选包装</a>
                                        </span>
                                   </div>
                                   <div className="p-props-new">
                                         <div className="props-txt" >颜色：黑色</div>
                                         <div className="props-txt" >尺码：公开版</div>
                                   </div>
                              </div>,
                             price:666666,
                             count: 6666,
                             total: 6666,
                             operation:'删除'
                           },{
                             check:<Checkbox></Checkbox>,
                             goods: 
                             <div className='p-goods'>
                                   <img src='https://img10.360buyimg.com/cms/s80x80_jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg'/>
                                   <div className="goods_dec">
                                        <a className="decc">Apple iPhone 7 Plus (A1661) 32G 黑色 移动联通电信4G手机</a>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">支持7天无理由退货</a>
                                        </span>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">选包装</a>
                                        </span>
                                   </div>
                                   <div className="p-props-new">
                                         <div className="props-txt" >颜色：黑色</div>
                                         <div className="props-txt" >尺码：公开版</div>
                                   </div>
                              </div>,
                             price:666666,
                             count: 6666,
                             total: 6666,
                             operation:'删除'
                           },{
                             check:<Checkbox></Checkbox>,
                             goods: 
                             <div className='p-goods'>
                                   <img src='https://img10.360buyimg.com/cms/s80x80_jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg'/>
                                   <div className="goods_dec">
                                        <a className="decc">Apple iPhone 7 Plus (A1661) 32G 黑色 移动联通电信4G手机</a>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">支持7天无理由退货</a>
                                        </span>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">选包装</a>
                                        </span>
                                   </div>
                                   <div className="p-props-new">
                                         <div className="props-txt" >颜色：黑色</div>
                                         <div className="props-txt" >尺码：公开版</div>
                                   </div>
                              </div>,
                             price:666666,
                             count: 6666,
                             total: 6666,
                             operation:'删除'
                           },{
                             check:<Checkbox></Checkbox>,
                             goods: 
                             <div className='p-goods'>
                                   <img src='https://img10.360buyimg.com/cms/s80x80_jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg'/>
                                   <div className="goods_dec">
                                        <a className="decc">Apple iPhone 7 Plus (A1661) 32G 黑色 移动联通电信4G手机</a>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">支持7天无理由退货</a>
                                        </span>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">选包装</a>
                                        </span>
                                   </div>
                                   <div className="p-props-new">
                                         <div className="props-txt" >颜色：黑色</div>
                                         <div className="props-txt" >尺码：公开版</div>
                                   </div>
                              </div>,
                             price:666666,
                             count: 6666,
                             total: 6666,
                             operation:'删除'
                           },{
                             check:<Checkbox></Checkbox>,
                             goods: 
                             <div className='p-goods'>
                                   <img src='https://img10.360buyimg.com/cms/s80x80_jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg'/>
                                   <div className="goods_dec">
                                        <a className="decc">Apple iPhone 7 Plus (A1661) 32G 黑色 移动联通电信4G手机</a>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">支持7天无理由退货</a>
                                        </span>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">选包装</a>
                                        </span>
                                   </div>
                                   <div className="p-props-new">
                                         <div className="props-txt" >颜色：黑色</div>
                                         <div className="props-txt" >尺码：公开版</div>
                                   </div>
                              </div>,
                             price:666666,
                             count: 6666,
                             total: 6666,
                             operation:'删除'
                           },{
                             check:<Checkbox></Checkbox>,
                             goods: 
                             <div className='p-goods'>
                                   <img src='https://img10.360buyimg.com/cms/s80x80_jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg'/>
                                   <div className="goods_dec">
                                        <a className="decc">Apple iPhone 7 Plus (A1661) 32G 黑色 移动联通电信4G手机</a>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">支持7天无理由退货</a>
                                        </span>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">选包装</a>
                                        </span>
                                   </div>
                                   <div className="p-props-new">
                                         <div className="props-txt" >颜色：黑色</div>
                                         <div className="props-txt" >尺码：公开版</div>
                                   </div>
                              </div>,
                             price:666666,
                             count: 6666,
                             total: 6666,
                             operation:'删除'
                           },{
                             check:<Checkbox></Checkbox>,
                             goods: 
                             <div className='p-goods'>
                                   <img src='https://img10.360buyimg.com/cms/s80x80_jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg'/>
                                   <div className="goods_dec">
                                        <a className="decc">Apple iPhone 7 Plus (A1661) 32G 黑色 移动联通电信4G手机</a>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">支持7天无理由退货</a>
                                        </span>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">选包装</a>
                                        </span>
                                   </div>
                                   <div className="p-props-new">
                                         <div className="props-txt" >颜色：黑色</div>
                                         <div className="props-txt" >尺码：公开版</div>
                                   </div>
                              </div>,
                             price:666666,
                             count: 6666,
                             total: 6666,
                             operation:'删除'
                           },{
                             check:<Checkbox></Checkbox>,
                             goods: 
                             <div className='p-goods'>
                                   <img src='https://img10.360buyimg.com/cms/s80x80_jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg'/>
                                   <div className="goods_dec">
                                        <a className="decc">Apple iPhone 7 Plus (A1661) 32G 黑色 移动联通电信4G手机</a>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">支持7天无理由退货</a>
                                        </span>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">选包装</a>
                                        </span>
                                   </div>
                                   <div className="p-props-new">
                                         <div className="props-txt" >颜色：黑色</div>
                                         <div className="props-txt" >尺码：公开版</div>
                                   </div>
                              </div>,
                             price:666666,
                             count: 6666,
                             total: 6666,
                             operation:'删除'
                           },{
                             check:<Checkbox></Checkbox>,
                             goods: 
                             <div className='p-goods'>
                                   <img src='https://img10.360buyimg.com/cms/s80x80_jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg'/>
                                   <div className="goods_dec">
                                        <a className="decc">Apple iPhone 7 Plus (A1661) 32G 黑色 移动联通电信4G手机</a>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">支持7天无理由退货</a>
                                        </span>
                                        <span className="promise return-y">
                                           <i className="return-y-icon" style={{backgroundPosition:'-54px -23px'}}></i>
                                           <a className="ftx-08">选包装</a>
                                        </span>
                                   </div>
                                   <div className="p-props-new">
                                         <div className="props-txt" >颜色：黑色</div>
                                         <div className="props-txt" >尺码：公开版</div>
                                   </div>
                              </div>,
                             price:666666,
                             count: 6666,
                             total: 6666,
                             operation:'删除'
                           }];
                      
        const columns = [{
                          title:<Checkbox>全选</Checkbox>,
                          dataIndex: 'check',
                          key: 'check',
                        }, {
                          title: '商品',
                          dataIndex: 'goods',
                          key: 'goods',
                        }, {
                          title: '单价',
                          dataIndex: 'price',
                          key: 'price',
                        }, {
                          title: '数量',
                          dataIndex: 'count',
                          key: 'count',
                        }, {
                          title: '小计',
                          dataIndex: 'total',
                          key: 'total',
                        }, {
                          title: '操作',
                          dataIndex: 'operation',
                          key: 'operation',
                        }];
		return (
			<Row>
              <Col span={3}></Col>
              <Col span={18}>
                  <div id='whdioa'>
			      	  <Tabs defaultActiveKey="1">
                        <TabPane tabBarStyle={{color:'red'}} tab="全部商品" key="1" className='tit_all_goods'>
                         <Table dataSource={dataSource} columns={columns} />
                        </TabPane>
                        <TabPane tab="京东大药房" key="2">京东大药房</TabPane>
                      </Tabs>
			      </div>
              </Col>
              <Col span={3}></Col>
            </Row>
			
		);
	}
}