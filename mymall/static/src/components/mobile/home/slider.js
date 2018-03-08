import React from 'react';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
var datas=[
		"https://img13.360buyimg.com/jshopm/s640x260_jfs/t18298/155/200631074/72890/59b4651b/5a6304c4N5d1dcf16.jpg!q70.jpg",
		"https://img12.360buyimg.com/jshopm/s640x260_jfs/t14596/288/2190301644/169511/392e5267/5a72ec6fNce4226d9.jpg!q70.jpg",
		"https://img11.360buyimg.com/jshopm/s640x260_jfs/t19597/73/291889572/129099/a4861e48/5a6878c2N3000cad6.jpg!q70.jpg",
		"https://img12.360buyimg.com/jshopm/s640x260_jfs/t16333/232/1404104224/181757/3e3e0cf5/5a55d42dNec94d632.jpg!q70.jpg"
		]
export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			data: datas,
            imgHeight: 176,
            slideIndex: 0,
		}
	}
	render(){
		//轮播图
		return (
			<div className="mt bgc">
			<WhiteSpace size="sm" />
			<WingBlank size="lg">
				<Carousel
                  autoplay={true}
                  infinite
                  selectedIndex={1}
                >
                  {this.state.data.map(val => (
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
                          // fire window resize event to change height
                          window.dispatchEvent(new Event('resize'));
                          this.setState({ imgHeight: 'auto' });
                        }}
                      />
                    </a>
                  ))}
                </Carousel>
                </WingBlank>
                <WhiteSpace size="sm" />
			</div>
		);
	}
}