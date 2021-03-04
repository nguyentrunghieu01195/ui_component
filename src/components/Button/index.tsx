/**
 * @description 
 * @since Thursday, 2 25th 2021, 14:57:10 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import './Button.css';

export interface PropsButton {
	innerText?: string,
	type?: 'primary' | 'primary-hover' | 'primary-focus' | 'success' | 'danger' | 'warning' | 'outline' | 'outline-hover' | 'outline-focus' | 'link',
	icon?: string,
	size?: 'large' | 'normal',
	className?: string,
	disabled?: boolean,
	[propName: string]: any;
}

class Button extends Component<PropsButton> {

	render() {
		const {innerText, type, icon, size, className, disabled, onClick, ...props} = this.props;
		let class_type = {
			primary: 'btn-color',
			'primary-hover': 'btn-color-orange',
			'primary-focus': 'btn-color btn-color-focus',
			outline: 'btn-color-outline',
			'outline-hover': 'btn-color-outline-orange',
			'outline-focus': 'btn-color-outline btn-color-focus',
			'success': 'btn-success',
			'warning': 'btn-warning text-white',
			'danger': 'btn-danger',
			'link': ''
		};

		if(type === 'link'){
			return(
				<a
					className={`color-blue${className ? ` ${className}` : ''} pointer`}
					tabIndex={-1}
					onClick={e => onClick && !disabled ? onClick(e) : ''}
					{...props}
				>
					{icon &&
						<i className={`fa ${icon}`} />
					}
					{innerText || this.props.children}
				</a>
			);
		}

		return (
			<button
				className={`btn${className ? ` ${className}` : ''}${size === 'large' ? ' button-height' : ''}${type && class_type[type] ? ` ${class_type[type]}` : ''}`}
				disabled={disabled}
				{...props}
			>
				{icon &&
					<i className={`fa ${icon}`} />
				}
				{innerText || this.props.children}
			</button>
		);
	}
}

export default Button;
