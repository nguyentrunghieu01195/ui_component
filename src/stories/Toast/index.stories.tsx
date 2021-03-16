/**
 * @description   
 * @since         Tuesday, 3 16th 2021, 14:52:20 pm
 * @author        Tú Trần <tutv@getflycrm.com>
 * @copyright     Copyright (c) 2021, Getfly VN TECH.,JSC, Inc.
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import { Story, Meta } from '@storybook/react/types-6-0';

import { Toast, PropsToast } from '../../components';

export default {
	title: 'Toast',
	component: Toast
} as Meta;

const Template: Story<PropsToast> = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
	type: 'blue',
	animation: true,
	delay: 3000,
	show: true,
	closeButton: true,
	textStrong: 'Bootstrap',
	textSmall: '10 minutes ago',
	textBody: 'Hello, world! This is a toast message.',
};