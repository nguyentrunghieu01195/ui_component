/**
 * @description 
 * @since Monday, 3 1st 2021, 16:53:44 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import { Story, Meta } from '@storybook/react/types-6-0';
import {Container, Row, Col, PropsContainer} from '../../components';

export default {
	title: 'Layout/Container',
	component: Container,
	argTypes: {
		className: {
			description: 'Class'
		},
		fluid: {},
		inner: {
			description: 'Inner Html'
		},
		style: {
			description: 'Inline css',
			control: 'object'
		}
	}
} as Meta;

const TemplateContainer: Story<PropsContainer> = (args) => <Container {...args}>
	<Row>
		<Col
			xl={12}
			lg={12}
			md={12}
			sm={12}
			xs={12}
			className="border"
			style={{height: 100}}
			inner={'Container'}
		>Default</Col>
	</Row>
</Container>

export const Default = TemplateContainer.bind({});
Default.args = {};