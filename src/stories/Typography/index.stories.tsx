/**
 * @description   
 * @since         Monday, 3 8th 2021, 15:02:07 pm
 * @author        Tú Trần <tutv@getflycrm.com>
 * @copyright     Copyright (c) 2021, Getfly VN TECH.,JSC, Inc.
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import { Story, Meta } from '@storybook/react/types-6-0';

import { Typography, PropsTypography } from '../../components';

export default {
	title: 'Typography',
	component: Typography
} as Meta;

const Template: Story<PropsTypography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
	text: 'Regular 01',
	size: 14
};