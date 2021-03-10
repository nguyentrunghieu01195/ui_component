/**
 * @description   
 * @since         Monday, 3 8th 2021, 16:36:22 pm
 * @author        Tú Trần <tutv@getflycrm.com>
 * @copyright     Copyright (c) 2021, Getfly VN TECH.,JSC, Inc.
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import { Story, Meta } from '@storybook/react/types-6-0';

import { Shadow, PropsShadow } from '../../components';

export default {
	title: 'Shadow',
	component: Shadow
} as Meta;

const Template: Story<PropsShadow> = (args) => <Shadow {...args} />;

export const Default = Template.bind({});
Default.args = {
	type: 'shadow1'
};