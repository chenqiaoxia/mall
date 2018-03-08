import React from 'react';
import {Link} from 'react-router-dom';
export default class Common extends React.Component{
	
	render(){
		return (
	      <div className="tabber bgc">
	        <div className="tbimg">
	          <img src="https://m.360buyimg.com/mobilecms/jfs/t3934/168/1102026163/2214/8cf2a437/5869c6b2Nc370cd1c.png"/>
	        </div>
	        <div className="tbimg">
	          <Link  to='/class/' ><img src="https://m.360buyimg.com/mobilecms/jfs/t3238/349/5252616655/2583/18b62a6/5869c6cdN0a668c5c.png"/></Link>
	        </div>
	        <div className="tbimg">
	          <img src="https://m.360buyimg.com/mobilecms/jfs/t3184/301/5286190398/2598/e88e138f/5869c70fN3d838de1.png"/>
	        </div>
	        <div className="tbimg">
	          <img src="https://m.360buyimg.com/mobilecms/jfs/t3865/194/1070610938/2893/478eab7/5869c721N8ddf4ab4.png"/>
	        </div>
	      </div>
		);
	}
}