import React from 'react';

export default class Common extends React.Component{
	render(){
		
		var arr=this.props.datas.option.map((item, index)=>{
			return (
				<div className="itemm" key={index}>
                                          <a className='itemm_txt'>
                                             <i>{item}</i>
                                          </a>
                                       </div>
				);
		})
		return (
			<div>
		    {/*购物时各个选项*/}
				<div className='p-choose sensuo'>
                                 <div className="dt">{this.props.datas.title}</div>
                                 <div className='dd sensuo'>
                                    {arr}  
                                 </div>
                            </div>
			</div>
		);
	}
}
