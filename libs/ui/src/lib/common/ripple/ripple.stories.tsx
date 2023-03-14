import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Content } from '../../layouts';
import Card from '../card/card';
import { Ripple } from './ripple';

const Story: ComponentMeta<typeof Ripple> = {
  component: Ripple,
  title: 'Ripple',
};
export default Story;

const Template: ComponentStory<typeof Ripple> = (args) => (
  <Card>
    <Ripple>
      <Content>Test</Content>
    </Ripple>
  </Card>
);

export const Primary = Template.bind({});
Primary.args = {};
