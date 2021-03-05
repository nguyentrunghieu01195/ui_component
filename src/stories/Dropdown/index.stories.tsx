/**
 * @description 
 * @since Friday, 3 5th 2021, 11:36:29 am
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import { Story, Meta } from '@storybook/react/types-6-0';

import {Dropdown, PropsDropdown} from '../../components';

export default {
	title: 'Dropdown',
	component: Dropdown,
	argTypes: {
		text: {
			description: 'Text hiển thị'
		},
		type: {
			description: 'Loại Dropdown'
		}
	},
} as Meta;

const Template: Story<PropsDropdown> = (args) => <Dropdown {...args}>
	<a className="dropdown-item" href="href">Action</a>
	<a className="dropdown-item" href="href">Another action</a>
	<a className="dropdown-item" href="href">Something else here</a>
</Dropdown>;

export const Default = Template.bind({});
Default.args = {
	// type: 'primary',
	text: 'Dropdown',
	// position: 'down'
};