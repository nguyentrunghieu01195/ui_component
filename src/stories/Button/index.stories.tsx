/**
 * @description 
 * @since Monday, 3 1st 2021, 15:13:39 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */

import { Story, Meta } from '@storybook/react/types-6-0';

import Button, {PropsButton} from '../../components/Button';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		innerText: {
			description: 'Text hiển thị'
		},
		type: {
			description: 'Loại button',
			// table: {
			// 	type: { 
			// 		summary: 'something short', 
			// 		detail: 'something really really long' 
			// 	},
			// }
		},
		size: {
			description: 'Kích cỡ'
		},
		icon: {
			description: 'Icon font-awesome. VD: fa fa-plus'
		},
		onClick: {
			table: {
				category: 'Events'
			}
		}

	},
	// parameters: {
	// 	docs: {
	// 		source: {
	// 		type: 'code'
	// 		}
	// 	}
	// }
} as Meta;

const Template: Story<PropsButton> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	type: 'primary',
	innerText: 'Default',
	onClick: (e) => alert('onClick'),
	'data-toggle': "bbbbb",
	'title': "Title"
};