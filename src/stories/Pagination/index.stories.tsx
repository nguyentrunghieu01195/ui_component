/**
 * @description 
 * @since Tuesday, 3 2nd 2021, 17:02:34 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import { Story, Meta } from '@storybook/react/types-6-0';

import {Pagination, PropsPagination} from '../../components';

export default {
	title: 'Pagination',
	component: Pagination
} as unknown as Meta;

const Template: Story<PropsPagination> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
	totalPage: 10,
	totalRecord: 100,
	page: 1,
	limit: 10,
	perPage: [10, 50, 100, 200, 500],
	// showPerPage: true,
	// showTotalRecord: true,

};