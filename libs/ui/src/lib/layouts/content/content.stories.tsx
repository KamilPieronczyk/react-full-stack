import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Content } from './content';

const Story: ComponentMeta<typeof Content> = {
  component: Content,
  title: 'Content',
};
export default Story;

const Template: ComponentStory<typeof Content> = (args) => <Content {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
