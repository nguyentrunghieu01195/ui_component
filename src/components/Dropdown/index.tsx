/**
 * @description 
 * @since Friday, 3 5th 2021, 11:22:04 am
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import {Button, ButtonGroup} from '../index';

export interface PropsDropdown {
	id?: string,
	type?: 'primary' | 'primary-hover' | 'primary-focus' | 'success' | 'danger' | 'warning' | 'light' | 'outline' | 'outline-hover' | 'outline-focus' | 'outline-secondary' | 'link',
	position?: 'up' | 'right' | 'down' | 'left',
	text: string,
	[propName: string]: any
};

class Dropdown extends Component<PropsDropdown> {
	render(){
		const {id, type, position, text, ...props} = this.props;
		return (
			<ButtonGroup className={position ? `drop${position}` : ''}>
				<Button className="dropdown-toggle" type={type ? type : 'primary'} data-toggle="dropdown" {...props}>
					{text}
				</Button>
				<div className="dropdown-menu">
					{this.props.children}
				</div>
			</ButtonGroup>
		);
	}
}

export default Dropdown;
