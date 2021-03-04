/**
 * @description 
 * @since Thursday, 3 4th 2021, 14:17:31 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import { Story, Meta } from '@storybook/react/types-6-0';

import {Switch, PropsSwitch} from '../../components';

export default {
	title: 'Switch',
	component: Switch
} as Meta;

const Template: Story<PropsSwitch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
	active: true,
	onClick: (e) => console.log(e)
};
