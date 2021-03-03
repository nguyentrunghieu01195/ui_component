/**
 * @description 
 * @since Wednesday, 3 3rd 2021, 11:08:03 am
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import { Story, Meta } from '@storybook/react/types-6-0';

import EmptyState, {PropsEmptyState} from '../../components/EmptyState';

export default {
	title: 'EmptyState',
	component: EmptyState,
	argTypes: {
		type: {
			description: 'Loại',
			control: 'select'
		},
		locale: {
			description: 'Ngôn ngữ',
			control: 'select'
		}
	}
} as Meta;

const Template: Story<PropsEmptyState> = (args) => <EmptyState {...args} />;

export const Default = Template.bind({});
Default.args = {
	type: 'data'
};