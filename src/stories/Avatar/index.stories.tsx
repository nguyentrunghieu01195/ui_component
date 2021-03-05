/**
 * @description 
 * @since Friday, 3 5th 2021, 15:14:44 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */

import { Story, Meta } from '@storybook/react/types-6-0';

import {Avatar, PropsAvatar} from '../../components';
import IMG from './image/90275755_630100207829697_4373608211614269440_n.jpg';

export default {
	title: 'Avatar',
	component: Avatar
} as Meta;

const Template: Story<PropsAvatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
	size: 200,
	src: IMG
};
