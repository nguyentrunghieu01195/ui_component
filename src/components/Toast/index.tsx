/**
 * @description   
 * @since         Tuesday, 3 16th 2021, 14:51:36 pm
 * @author        Tú Trần <tutv@getflycrm.com>
 * @copyright     Copyright (c) 2021, Getfly VN TECH.,JSC, Inc.
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import { Toast } from 'react-bootstrap';
import './Toast.css';

export interface PropsCoToast {
	type: 'blue' | 'success' | 'warning' | 'danger',
	animation?: boolean,
	autohide?: boolean,
	delay?: number,
	onClose?: Function,
	show: boolean,
	closeButton?: boolean,
	textStrong?: string,
	textSmall?: string,
	textBody?: string,
}

class CoToast extends Component<PropsCoToast> {
	render() {
		const {
			animation, autohide, delay, onClose, show, closeButton, textStrong, textSmall, textBody, type
		} = this.props;
		return (
			<Toast show={show} delay={delay} animation={animation} autohide={autohide}>
				<Toast.Header className={`p-2 text-white bg-${type}`} closeButton={false}>
					<img
						src="holder.js/20x20?text=%20"
						className="rounded mr-2"
						alt=""
					/>
					<strong className="mr-auto">{textStrong}</strong>
					<small>{textSmall}</small>
					{
						closeButton &&
						<i aria-label="Close" className="fa fa-close pl-1" onClick={() => onClose && onClose()} />
					}
				</Toast.Header>
				<Toast.Body>{textBody}</Toast.Body>
			</Toast>
		)
	}
}

export default CoToast;
