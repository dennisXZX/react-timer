import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends Component {
	render() {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">React Timer App</li>
						<li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink></li>
						<li><Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link></li>
					</ul>
				</div>
				<div className="top-bar-right">
					<ul className="menu">
						<li className="menu-text">
							Created by <a href="http://www.dennisxiao.com" target="_blank">Dennis Xiao</a>
						</li>
					</ul>					
					<span></span>
				</div>				
			</div>
		)
	}
}

export default Nav;