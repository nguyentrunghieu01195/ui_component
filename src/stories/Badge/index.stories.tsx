/**
 * @description 
 * @since Friday, 3 5th 2021, 14:26:00 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */

import { Story, Meta } from '@storybook/react/types-6-0';

import {Badge, PropsBadge, Button} from '../../components';

export default {
	title: 'Badge',
	component: Badge,
	argTypes: {
		text: {
			description: 'Text hiển thị'
		},
		type: {
			description: 'Loại Dropdown'
		}
	},
} as Meta;

const Template: Story<PropsBadge> = (args) => <Button type="primary" className="position-relative">
	Thông báo
	<Badge {...args} />
</Button>;

export const Default = Template.bind({});
Default.args = {
	type: 'top',
	border: true,
	value: 10,
	// position: 'down'
};
