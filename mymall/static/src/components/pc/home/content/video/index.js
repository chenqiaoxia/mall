import React from 'react';
import '../../../../../style/video.css'
import { Icon,Spin } from 'antd';
export default class Common extends React.Component{
	constructor(){
		super();
		this.state={
			datas:[],
		}
	}
	componentDidMount(){
		var that=this;
		fetch('http://p0679v0m2.bkt.clouddn.com/video.json')
        .then(function(response) {
          return response.json()
        }).then(function(json) {
        	that.setState({
        		datas:json
        	})

        })

	}
	render(){
		var arr=this.state.datas.length>0?this.state.datas.map((item,index)=>{
			return (
					<li key={index} className="video_li">
				           <div className="video_dimg">
				            <img src={item.img}/>
				            <Icon type="play-circle" style={{fontSize:30,position:"absolute",left:20,bottom:20,color:"#fff"}}/>
				           </div>
				           <h3 className="video_name">
				             {item.name}
				           </h3>
				           <p className="video_dec">
				             {item.dec}
				           </p>
				        </li>
				);
		}):<Spin />
		return (
			<div className="video wrap">
		    {/*视频模块*/}
		         {/*标题*/}
		         <div className="video_title">
				     <h2 className='vid_title'>
				        视频
				     </h2>
				     <div className="v_t_rigth">
				       <p>查看全部</p>
				       <Icon type="right-circle" style={{ fontSize: 16, color: '#b0b0b0' }} />
				     </div>
				 </div>
				 {/*视频内容*/}
				 <ul className="video_ul">
				        {arr}
				     </ul>
			</div>
		);
	}
}