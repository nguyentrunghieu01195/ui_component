/**
 * @description 
 * @since Monday, 3 1st 2021, 22:22:19 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import { Story, Meta } from '@storybook/react/types-6-0';

import Container from '../../components/Layout/Container';
import Row from '../../components/Layout/Row';
import Col, {PropsCol} from '../../components/Layout/Column';

export default {
	title: 'Layout/Column',
	component: Col,
	argTypes: {
		className: {
			description: 'Class'
		},
		align: {
			description: 'Align self'
		},
		order: {
			description: 'Order column'
		},
		inner: {
			description: 'Inner Html'
		},
		style: {
			description: 'Inline css',
			control: 'object'
		},
		xl: {
			table: {
				category: 'Col'
			}
		},
		lg: {
			table: {
				category: 'Col'
			}
		},
		md: {
			table: {
				category: 'Col'
			}
		},
		sm: {
			table: {
				category: 'Col'
			}
		},
		xs: {
			table: {
				category: 'Col'
			}
		},
		offsetXl: {
			table: {
				category: 'Offset'
			}
		},
		offsetLg: {
			table: {
				category: 'Offset'
			}
		},
		offsetMd: {
			table: {
				category: 'Offset'
			}
		},
		offsetSm: {
			table: {
				category: 'Offset'
			}
		},
		offsetXs: {
			table: {
				category: 'Offset'
			}
		}
	}
} as Meta;

const TemplateDefault: Story<PropsCol> = (args) => <Container fluid>
	<Row style={{height: 100}} className="border">
		<Col {...args}>Default</Col>
	</Row>
</Container>

export const Default = TemplateDefault.bind({});
Default.args = {
	xl: 12,
	lg: 12,
	md: 12,
	sm: 12,
	xs: 12,
	className: "border",
	onClick: e => alert('on click'),
	style: {height: 30, background: '#d0ecf2'},
	inner: 'xl-12 lg-12 md-12 sm-12 xs-12'
};

const TemplateOffset: Story<PropsCol> = (args) => <Container fluid>
	<Row style={{height: 100}} className="border">
		<Col {...args}>Default</Col>
	</Row>
</Container>

export const Offset = TemplateOffset.bind({});
Offset.args = {
	xl: 6,
	lg: 6,
	md: 6,
	sm: 6,
	xs: 6,
	offsetXl: 3,
	className: "border",
	onClick: e => alert('on click'),
	style: {height: 30, background: '#d0ecf2'},
	inner: 'xl-6 lg-6 md-6 sm-6 xs-6 offset-xl-3'
};

// const TemplateOrder: Story<PropsCol> = (args) => <Container fluid>
// 	<Row style={{height: 100}} className="border">
// 		<Col {...Order.args}>Col 1</Col>
// 		<Col {...Order2.args}>Col 2</Col>
// 	</Row>
// </Container>

// export const Order = TemplateOrder.bind({});
// Order.args = {
// 	lg: 4,
// 	className: "border",
// 	style: {height: 30, background: '#d0ecf2'},
// 	order: 1
// };

// export const Order2 = TemplateOrder.bind({});
// Order2.args = {
// 	lg: 4,
// 	className: "border",
// 	style: {height: 30, background: '#d0ecf2'},
// 	order: 2
// };