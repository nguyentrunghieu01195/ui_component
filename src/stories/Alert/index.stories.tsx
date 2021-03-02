/**
 * @description 
 * @since Monday, 3 1st 2021, 16:17:51 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */

import { Story, Meta } from '@storybook/react/types-6-0';

import Alert, {PropsAlert} from '../../components/Alert';

export default {
	title: 'Alert',
	component: Alert,
	argTypes: {
		show: {
			description: 'Trạng thái hiển thị'
		},
		type: {
			description: 'Loại alert'
		},
		title: {
			description: 'Tiêu đề'
		},
		text: {
			description: 'Nội dung'
		},
		hideIcon: {
			description: "Hiển thị icon ẩn alert"
		},
		onHide: {
			table: {
				category: 'Events'
			}
		}

	}
} as Meta;

const Template: Story<PropsAlert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
	show: true,
	type: 'success',
	title: 'Tiêu đề alert',
	text: 'Nội dung alert',
	hideIcon: true,
	onHide: () => alert('onHide')
};