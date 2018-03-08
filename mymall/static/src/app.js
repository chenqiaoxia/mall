import React from 'react';
import ReactDOM from 'react-dom';
//引入ant design所需的样式
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';

// 加载所需的模块

import PC from './components/pc/router.js';
import Mobile from './components/mobile/router.js';
// 加载所需的react中的媒体查询模块
import MediaQuery from 'react-responsive';

class App extends React.Component{
	render(){
		return (
			<div id="mall">
				<MediaQuery query="(min-device-width: 980px)">
					<PC />
				</MediaQuery>
				<MediaQuery query="(max-device-width: 980px)">
					<Mobile />
				</MediaQuery>
			</div>
		);
	}
}
ReactDOM.render(<App />,document.getElementById('app'));