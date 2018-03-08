import React from 'react';

export default class Common extends React.Component{
	render(){
		return (
             <div>
				<div className='p-choose sensuo'>
                                 <div className="dt">{this.props.datas.title}</div>
                                 <div className='dd sensuo'>
                                    <a className="sensuo">
                                         <img src={this.props.datas.img}/>
                                         <i>{this.props.datas.option}</i>
                                     </a>  
                                  </div>
                            </div>
			</div>
		);
	}
}