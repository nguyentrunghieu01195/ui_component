/**
 * @description 
 * @since Thursday, 3 4th 2021, 11:23:27 am
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import { Story, Meta } from '@storybook/react/types-6-0';

import {Checkbox, PropsCheckbox} from '../../components';

export default {
	title: 'Checkbox',
	component: Checkbox
} as Meta;

const Template: Story<PropsCheckbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
	id: 'checkbox_1',
	value: 'value',
	label: '<div><img src="/assets/dist/js/v5/3XpzeP4.png" width="25" height="25" class="border-radius">&nbsp;Chưa có người phụ trách </div>',
	checked: true,
	inline: true,
	onChange: (e) => console.log(e)
};