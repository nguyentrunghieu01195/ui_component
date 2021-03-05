/**
 * @description 
 * @since Friday, 3 5th 2021, 8:26:07 am
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */

/**
 * @description 
 * @since Monday, 3 1st 2021, 15:13:39 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */

import { Story, Meta } from '@storybook/react/types-6-0';

import {Button, ButtonGroup, PropsButtonGroup} from '../../components';

export default {
	title: 'ButtonGroup',
	component: ButtonGroup,
	argTypes: {
		className: {
			description: 'Class ext'
		}
	}
} as Meta;

const TemplateDefault: Story<PropsButtonGroup> = (args) => <ButtonGroup {...args}>
	<Button type="primary">Btn 1</Button>
	<Button type="primary">Btn 2</Button>
	<Button type="primary">Btn 3</Button>
</ButtonGroup>;

export const Default = TemplateDefault.bind({});
Default.args = {
};

const TemplateMixed: Story<PropsButtonGroup> = (args) => <ButtonGroup {...args}>
	<Button type="danger">Btn 1</Button>
	<Button type="success">Btn 2</Button>
	<Button type="warning">Btn 3</Button>
</ButtonGroup>;

export const Mixed = TemplateMixed.bind({});
Default.args = {
};

const TemplateOutline: Story<PropsButtonGroup> = (args) => <ButtonGroup {...args}>
	<Button type="outline">Btn 1</Button>
	<Button type="outline">Btn 2</Button>
	<Button type="outline">Btn 3</Button>
</ButtonGroup>;

export const Outline = TemplateOutline.bind({});
Default.args = {
};

const TemplateOutlineSecond: Story<PropsButtonGroup> = (args) => <ButtonGroup {...args}>
	<Button type="outline-secondary">Btn 1</Button>
	<Button type="outline-secondary">Btn 2</Button>
	<Button type="outline-secondary">Btn 3</Button>
</ButtonGroup>;

export const OutlineSecond = TemplateOutlineSecond.bind({});
Default.args = {
};
