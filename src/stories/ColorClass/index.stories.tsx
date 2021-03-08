/**
 * @description 
 * @since Monday, 3 8th 2021, 8:20:25 am
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import { Story, Meta } from '@storybook/react/types-6-0';

import {ColorClass, PropsColorClass} from '../../components';

export default {
	title: 'ColorClass',
	component: ColorClass,
	argTypes: {
		colorSelected: {
			description: "Màu được chọn",
			table: {
				type: {
					detail:
`{
	color: string,
	color_text: string,
	color_bg: string,
	color_fill: string
}`
				}
			}
		},
		colorList: {
			description: "Danh sách màu",
			table: {
				type: {
					detail:
`colorList: Array<Color>,
Color: {
	color: string,
	color_text: string,
	color_bg: string,
	color_fill: string
}`
				}
			}
		},
		col: {
			description: "Số cột trong dropdown"
		}
	}
} as Meta;

const Template: Story<PropsColorClass> = (args) => <ColorClass {...args} />;

export const Default = Template.bind({});
Default.args = {
	type: 'button',
	colorSelected: {
		color: '#3ACCE1',
		color_text: 'color-picker-cl-64',
		color_bg: 'color-picker-bg-64',
		color_fill: 'color-picker-fi-64'
	},
	colorList: [
		{
			color: '#3ACCE1',
			color_text: 'color-picker-cl-64',
			color_bg: 'color-picker-bg-64',
			color_fill: 'color-picker-fi-64'
		},
		{
			color: '#0CAFD2',
			color_text: 'color-picker-cl-65',
			color_bg: 'color-picker-bg-65',
			color_fill: 'color-picker-fi-65'
		},
		{
			color: '#10519F',
			color_text: 'color-picker-cl-66',
			color_bg: 'color-picker-bg-66',
			color_fill: 'color-picker-fi-66'
		},
		{
			color: '#002F6C',
			color_text: 'color-picker-cl-67',
			color_bg: 'color-picker-bg-67',
			color_fill: 'color-picker-fi-67'
		},
		{
			color: '#F58233',
			color_text: 'color-picker-cl-68',
			color_bg: 'color-picker-bg-68',
			color_fill: 'color-picker-fi-68'
		},
		{
			color: '#EF5316',
			color_text: 'color-picker-cl-69',
			color_bg: 'color-picker-bg-69',
			color_fill: 'color-picker-fi-69'
		},
		{
			color: '#E84459',
			color_text: 'color-picker-cl-70',
			color_bg: 'color-picker-bg-70',
			color_fill: 'color-picker-fi-70'
		},
		{
			color: '#BE2E2E',
			color_text: 'color-picker-cl-71',
			color_bg: 'color-picker-bg-71',
			color_fill: 'color-picker-fi-71'
		},
		{
			color: '#E9AF0F',
			color_text: 'color-picker-cl-72',
			color_bg: 'color-picker-bg-72',
			color_fill: 'color-picker-fi-72'
		},
		{
			color: '#FFCC00',
			color_text: 'color-picker-cl-73',
			color_bg: 'color-picker-bg-73',
			color_fill: 'color-picker-fi-73'
		}
	],
	text: 'Màu',
	changeColor: color => console.log(color),
	col: 3
};