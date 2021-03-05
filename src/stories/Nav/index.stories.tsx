/**
 * @description 
 * @since Wednesday, 3 3rd 2021, 16:24:45 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import { Story, Meta } from '@storybook/react/types-6-0';

import {Nav, PropsNav, TabContent, TabPane} from '../../components';

export default {
	title: 'Nav',
	component: Nav,
	argTypes: {
		data: {
			description: 'Data Nav',
			table: {
				type: {
					detail: `
data: {
	data: Array<Item>,
	className?: string,
	id: string,
	id_content: string,
	[propName: string]: any
}
Item: {
	title: string,
	type?: 'tab' | 'dropdown',
	id?: string, href?: string,
	childs?: Array<Child>,
	className?: string,
	[propName: string]: any
}
Child: {
	title: string,
	href?: string,
	className?: string,
	[propName: string]: any
}`
				}
			}
		}
	}
} as Meta;

const Template: Story<PropsNav> = (args) => <>
	<Nav {...args} />
	<TabContent id="nav_example_content">
		<TabPane className="show active" id="discussion">
			Tab trao đổi
		</TabPane>
		<TabPane id="feedback">
			Tab phản hồi
		</TabPane>
		<TabPane id="report">
			Tab thống kê
		</TabPane>
		<TabPane id="liabilities">
			Tab Công nợ
		</TabPane>
	</TabContent>
</>;

export const Default = Template.bind({});
Default.args = {
	id: 'nav_example',
	id_content: 'nav_example_content',
	activeTab: 'discussion',
	data: [
		{
			title: 'Trao đổi',
			type: 'tab',
			id: 'discussion-tab',
			href: 'discussion',
			onClick: (e: object) => console.log('onClick discussion', e)
		},
		{
			title: 'Phản hồi',
			type: 'tab',
			id: 'feedback-tab',
			href: 'feedback',
			onClick: (e: object) => console.log('onClick feedback', e)
		},
		{
			title: 'Giao dịch',
			type: 'dropdown',
			id: 'trade-tab',
			href: 'trade',
			childs: [
				{
					title: 'Thống kê',
					href: 'report',
					onClick: (e: object) => console.log('onClick report', e)
				},
				{
					title: 'Công nợ',
					href: 'liabilities',
					onClick: (e: object) => console.log('onClick liabilities', e)
				}
			]
		}
	]
};
