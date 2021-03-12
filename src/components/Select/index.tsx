/**
 * @description   
 * @since         Friday, 3 12th 2021, 13:57:52 pm
 * @author        Tú Trần <tutv@getflycrm.com>
 * @copyright     Copyright (c) 2021, Getfly VN TECH.,JSC, Inc.
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import React, { Component } from 'react';
import Select from 'react-select';

export interface PropsSelect {
	value: any,
	styles?: Function,
	getOptionLabel?: Function,
	getOptionValue?: Function,
	formatGroupLabel?: Function,
	formatOptionLabel?: Function,
	options?: Object[],
	isClearable?: boolean,
	placeholder?: string,
	isLoading?: boolean,
	loadingMessage?: Function,
	noOptionsMessage?: Function,
	components?: any,
	menuPlacement: 'auto' | 'bottom' | 'top',
	isMulti?: boolean,
	closeMenuOnSelect?: boolean,
	isDisabled?: boolean,
	autoFocus?: boolean,
	hideSelectedOptions?: boolean,
	menuIsOpen?: boolean,
	onChange?: Function,
	onFocus?: Function,
	onBlur?: Function,
	onInputChange?: Function,
	onKeyDown?: Function,
}
type Props = PropsSelect;

class GfSelect extends Component<Props> {
	render() {
		const {
			value, styles, getOptionLabel, getOptionValue, options, formatOptionLabel, formatGroupLabel, autoFocus,
			isClearable, placeholder, onChange, onFocus, isLoading, noOptionsMessage, loadingMessage, components,
			menuPlacement, isMulti, closeMenuOnSelect, isDisabled, onInputChange, onKeyDown, menuIsOpen, onBlur,
			hideSelectedOptions
		} = this.props;
		return (
			<Select
				styles={styles}
				getOptionLabel={getOptionLabel ? (opt: any) => getOptionLabel(opt) : undefined}
				getOptionValue={getOptionValue ? (opt: any) => getOptionValue(opt) : undefined}
				formatOptionLabel={formatOptionLabel ? (data: any) => formatOptionLabel(data) : undefined}
				formatGroupLabel={formatGroupLabel ? (data: any) => formatGroupLabel(data) : undefined}
				options={options}
				isClearable={isClearable}
				isMulti={isMulti}
				isDisabled={isDisabled}
				placeholder={placeholder}
				value={value}
				onChange={(e:any) => onChange && onChange(e)}
				onFocus={(e:any) => onFocus && onFocus(e)}
				onInputChange={(e:any) => onInputChange && onInputChange(e)}
				onKeyDown={(e:any) => onKeyDown && onKeyDown(e)}
				onBlur={(e:any) => onBlur && onBlur(e)}
				isLoading={isLoading}
				loadingMessage={loadingMessage}
				noOptionsMessage={noOptionsMessage}
				components={components}
				menuPlacement={menuPlacement}
				closeMenuOnSelect={closeMenuOnSelect}
				hideSelectedOptions={hideSelectedOptions}
				menuIsOpen={menuIsOpen}
				autoFocus={autoFocus}
			/>
		);
	}
}

export default GfSelect;
