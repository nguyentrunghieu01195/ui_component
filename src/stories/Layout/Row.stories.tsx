/**
 * @description 
 * @since Monday, 3 1st 2021, 22:08:03 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */



import { Story, Meta } from '@storybook/react/types-6-0';
import {Container, Row, Col, PropsRow} from '../../components';

export default {
	title: 'Layout/Row',
	component: Row,
	argTypes: {
		className: {
			description: 'Class'
		},
		align: {
			description: 'Align item'
		},
		justify: {
			description: 'Justify content'
		},
		inner: {
			description: 'Inner Html'
		},
		style: {
			description: 'Inline css',
			control: 'object'
		}
	}
} as Meta;

const TemplateDefault: Story<PropsRow> = (args) => <Container fluid>
	<Row {...args}>
		<Col
			lg={12}
			className="border"
			style={{height: 100}}
		>Default</Col>
	</Row>
</Container>

export const Default = TemplateDefault.bind({});
Default.args = {};

const TemplateAlign: Story<PropsRow> = (args) => <Container fluid>
	<Row {...args}>
		<Col
			lg={12}
			className="border"
			style={{height: 30, background: '#d0ecf2'}}
		>Default</Col>
	</Row>
</Container>

export const Align = TemplateAlign.bind({});
Align.args = {
	className: 'border',
	style:{height: 100},
	align: 'start'
};

const TemplateJustify: Story<PropsRow> = (args) => <Container fluid>
	<Row {...args}>
		<Col
			lg={4}
			className="border"
			style={{height: 30, background: '#d0ecf2'}}
		>justify-content-start</Col>
		<Col
			lg={4}
			className="border"
			style={{height: 30, background: '#d0ecf2'}}
		>justify-content-start</Col>
	</Row>
</Container>

export const Justify = TemplateJustify.bind({});
Justify.args = {
	className: 'border',
	style:{height: 100},
	justify: 'start'
};