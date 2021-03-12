/**
 * @description   
 * @since         Friday, 3 12th 2021, 14:00:33 pm
 * @author        Tú Trần <tutv@getflycrm.com>
 * @copyright     Copyright (c) 2021, Getfly VN TECH.,JSC, Inc.
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import { Story, Meta } from '@storybook/react/types-6-0'; 

import { Select, PropsSelect } from '../../components';

export default {
	title: 'Select',
	component: Select,
	argTypes: {
		styles: {
			description: 'Style css'
		},
		getOptionLabel: {
			description: 'Tiêu đề'
		},
		getOptionValue: {
			description: 'Giá trị'
		},
		formatGroupLabel: {
			description: 'Định dạng nhóm'
		},
		formatOptionLabel: {
			description: 'Định dạng option'
		},
		options: {
			description: 'Danh sách option'
		},
		isClearable: {
			description: 'Cho phép giá trị rỗng'
		},
		placeholder: {
			description: 'Hiển thị khi chưa có giá trị'
		},
		isLoading: {
			description: 'Đang tải'
		},
		loadingMessage: {
			description: 'Hiển thị khi đang tải'
		},
		noOptionsMessage: {
			description: 'Hiển khi không có option'
		},
		components: {
			description: 'https://react-select.com/components'
		},
		menuPlacement: {
			description: 'Vị trí hiển thị menu option'
		},
		isMulti: {
			description: 'Cho phép chọn nhiều giá trị'
		},
		closeMenuOnSelect: {
			description: 'Đóng menu option khi chọn'
		},
		isDisabled: {
			description: 'Vô hiệu hóa'
		},
		autoFocus: {
			description: 'Tự động focus'
		},
		hideSelectedOptions: {
			description: 'Ẩn các option đã chọn khỏi menu'
		},
		menuIsOpen: {
			description: 'Menu option mở'
		},
		onChange: {
			table: {
				category: 'Events'
			}
		},
		onFocus: {
			table: {
				category: 'Events'
			}
		},
		onBlur: {
			table: {
				category: 'Events'
			}
		},
		onInputChange: {
			table: {
				category: 'Events'
			}
		},
		onKeyDown: {
			table: {
				category: 'Events'
			}
		},
	},
} as Meta;

const Template: Story<PropsSelect> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
	isClearable: false,
	isLoading: false,
	menuPlacement: 'auto',
	isMulti: false,
	closeMenuOnSelect: true,
	isDisabled: false,
	autoFocus: false,
	options: [
		{ label: 'Label1', value: 1 },
		{ label: 'Label2', value: 2 },
		{ label: 'Label3', value: 3 },
	],
};