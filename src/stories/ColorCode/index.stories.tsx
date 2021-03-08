/**
 * @description 
 * @since Friday, 3 5th 2021, 17:18:41 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import { Story, Meta } from '@storybook/react/types-6-0';

import {ColorCode, PropsColorCode} from '../../components';

export default {
	title: 'ColorCode',
	component: ColorCode
} as Meta;

const Template: Story<PropsColorCode> = (args) => <ColorCode {...args} />;

export const Default = Template.bind({});
Default.args = {
	colorSelected: '#e8302a',
	colorList: ['#ffffff', '#e8302a', '#7f4a98', '#0f70b7', '#3ba935', '#ffed02', '#f69201'],
	onChange: color => alert(color)
};