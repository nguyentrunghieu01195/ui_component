/**
 * @description 
 * @since Monday, 3 1st 2021, 16:28:04 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */

import { Story, Meta } from '@storybook/react/types-6-0';

import {Breadcrumb, PropsBreadcrumb} from '../../components';

export default {
	title: 'Breadcrumb',
	component: Breadcrumb,
	argTypes: {
		data: {
			description: 'Dữ liệu',
			control: 'object',
			table: {
				defaultValue: {
					summary: JSON.stringify([{
						text: 'Text hiển thị',
						link: 'Link',
						icon: 'Icon trước text'
					}])
				}
			}
		}
	}
} as Meta;

const Template: Story<PropsBreadcrumb> = (args) => <Breadcrumb {...args} />

export const Default = Template.bind({});
Default.args = {
	data: [
		{
			text: 'Trang chủ',
			link: 'trangchu'
		},
		{
			text: 'Danh sách',
			link: 'danh sach'
		}
	]
};

export const Icon = Template.bind({});
Icon.args = {
	data: [
		{
			text: 'Trang chủ',
			link: 'trangchu',
			icon: 'fa fa-home'
		},
		{
			text: 'Danh sách',
			link: 'danh sach',
			icon: ''
		}
	]
};

