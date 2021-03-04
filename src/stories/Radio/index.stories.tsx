/**
 * @description 
 * @since Thursday, 3 4th 2021, 9:23:44 am
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import { Story, Meta } from '@storybook/react/types-6-0';

import {Radio, PropsRadio} from '../../components';

export default {
	title: 'Radio',
	component: Radio
} as Meta;

const Template: Story<PropsRadio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: 'radio_1',
	name: 'radio',
	label: 'Label',
	checked: true,
	inline: true,
	onChange: (e) => console.log(e)
};