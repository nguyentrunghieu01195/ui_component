/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * @description 
 * @since Wednesday, 3 3rd 2021, 14:57:31 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import {changeTabActive, changeDropdownActive} from '../../utils/NavHelper';
import './Nav.css';

interface Child {
	title: string,
	href?: string,
	className?: string,
	[propName: string]: any
}

interface Item {
	title: string,
	type?: 'tab' | 'dropdown',
	id?: string,
	href?: string,
	childs?: Array<Child>,
	className?: string,
	[propName: string]: any
}

export interface PropsNav {
	data: Array<Item>,
	className?: string,
	id: string,
	activeTab: string,
	[propName: string]: any
}

class Nav extends Component<PropsNav>{
	render(){
		const {data, className, id, activeTab, ...props} = this.props;
		return(
			<ul className={`nav nav-tabs gf-tab ${className ? className : ''}`} id={id} {...props} role="tablist">
				{data.length > 0 &&
					data.map((item: Item, idx: number) => <React.Fragment key={idx}>
						{item.type === 'dropdown' ?
							<li className={`nav-item ${item.className ? item.className : ''}`}>
								<a className={`nav-link dropdown-toggle color-blue ${activeTab === item.href || (item.childs && item.childs.findIndex(i => i.href === `${activeTab}`) >= 0) ? 'active' : ''}`}
								tabIndex={-1} id={item.id ? item.id : ''} data-toggle="dropdown">{item.title}</a>
								<div className="dropdown-menu">
									{item.childs && item.childs.length > 0 &&
										item.childs.map((child, index) => <a key={index} className={`dropdown-item tab-child ${child.className ? child.className : ''}${activeTab === child.href ? 'active' : ''}`}
											data-toggle="tab"
											href={`#${child.href ? child.href : ''}`}
											onClick={() => {
												changeDropdownActive({ tab_id: child.href, parent: item.id, id_ul: id });
												child.onClick && child.onClick(child);
											}}
										>
											{child.title}
										</a>)
									}
									
								</div>
							</li>
							:
							<li className={`nav-item ${item.className ? item.className : ''}`}>
								<a className={`nav-link ${activeTab === item.href ? 'active' : ''}`} id={item.id ? item.id : ''} data-toggle="tab" href={`#${item.href ? item.href : ''}`}
									onClick={() => {
										changeTabActive({ tab_id: item.href });
										item.onClick && item.onClick(item);
									}}
								>
									{item.title}
								</a>
							</li>
						}
					</React.Fragment>)
				}
			</ul>
		);
	}
}

export default Nav;
