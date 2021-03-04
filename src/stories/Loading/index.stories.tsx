/**
 * @description 
 * @since Monday, 3 1st 2021, 15:57:40 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */

 
import { Story, Meta } from '@storybook/react/types-6-0';

import {Loading, PropsLoading} from '../../components';

export default {
	title: 'Loading',
	component: Loading,
	argTypes: {
		type: {
			description: 'Loại loading'
		},
		title: {
			description: 'Text hiển thị',
			// table: {
			// 	type: { 
			// 		summary: 'something short', 
			// 		detail: 'something really really long' 
			// 	},
			// }
		},
		loading: {
			description: 'Trạng thái'
		}

	},
} as Meta;

const Template: Story<PropsLoading> = (args) => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'Đang xử lý',
	loading: true
};