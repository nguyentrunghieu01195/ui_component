/**
 * @description 
 * @since Wednesday, 3 3rd 2021, 13:58:25 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import { Story, Meta } from '@storybook/react/types-6-0';

import {Error, PropsError} from '../../components';

export default {
	title: 'Error',
	component: Error,
	argTypes: {
		type: {
			description: 'Loại',
			control: 'select'
		},
		locale: {
			description: 'Ngôn ngữ',
			control: 'select'
		},
		img_type: {
			description: 'Ảnh lỗi',
			control: 'select'
		}
	}
} as Meta;

const Template: Story<PropsError> = (args) => <Error {...args} />;

export const Default = Template.bind({});
Default.args = {
	type: 'not_found',
	img_type: 1
};