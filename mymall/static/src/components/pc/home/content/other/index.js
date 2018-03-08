import React from 'react';
import '../../../../../style/other.css'
import Otheritem from './otheritem.js'


export default class Common extends React.Component{
	render(){
		var data=[1,1,1,1]
	    var arr=data.map((item,index)=>{
	    	return (
	    		 
	    			        <Otheritem key={index}/>
	    			     
	    		);
	    })
	    	return (
			<div className="other wrap">
	    		    
	    			     <h2 className='oth_title'>
	    			        内容
	    			     </h2>
	    			     <div className="othercontent">
	    			     {arr}
	    			     </div>
	    			    
	    	</div>
		);
	}
	
}