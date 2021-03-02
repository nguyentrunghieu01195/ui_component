/**
 * @description 
 * @since Monday, 3 1st 2021, 16:53:44 pm
 * @author Nguyễn Trung Hiếu <nguyentrunghieu@getflycrm.com>
 * @copyright Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write chanelog>
 */


import { Story, Meta } from '@storybook/react/types-6-0';

import ContainerCompoent, {PropsContainer} from '../../components/Layout/Container';
import Row from '../../components/Layout/Row';
import Col from '../../components/Layout/Column';

export default {
	title: 'Layout/Container',
	component: ContainerCompoent,
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

const TemplateContainer: Story<PropsContainer> = (args) => <ContainerCompoent {...args}>
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
</ContainerCompoent>

export const Container = TemplateContainer.bind({});
Container.args = {};