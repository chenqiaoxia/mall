import React from 'react';
import Menu from './menu/index.js';
import HeroSub from './herosub/index.js';
import Staritem from './staritem/index.js';
import Contentpublic from './contentpublic/index.js';
import Recommend from './recommend/index.js';
import Hotproduct from './hotproduct/index.js';
import Other from './other/index.js';
import Video from './video/index.js';


export default class Common extends React.Component{
	render(){
		return (
			<div>
				<Menu/>
				<HeroSub/>
				<Staritem/>
				<div style={{backgroundColor:'#F5F5F5'}}>
				<Contentpublic/>
				<Recommend />
				<Hotproduct/>
				<Other/>
				<Video/>
				</div>
			</div>
		);
	}
}