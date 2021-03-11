/**
 * @description   
 * @since         Wednesday, 3 10th 2021, 14:56:49 pm
 * @author        Tú Trần <tutv@getflycrm.com>
 * @copyright     Copyright (c) 2021, Getfly VN TECH.,JSC, Inc.
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, PropsInput } from '../../components';

export default {
	title: 'Input',
	component: Input,
	argTypes: {
		onChange: {
			table: {
				category: 'Events'
			}
		},
		onBlur: {
			table: {
				category: 'Events'
			}
		},
		onKeyDown: {
			table: {
				category: 'Events'
			}
		}

	},
} as Meta;

const Template: Story<PropsInput> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
	type: 'text',
	inputFocus: false,
	placeholder: 'Placeholder',
	disabled: false,
	value: '',
	onChange: (e: any) => console.log('onChange', e.target.value),
	onBlur: (e: any) => console.log('onBlur', e.target.value),
	onKeyDown: (e: any) => console.log('onKeyDown', e.key),
};