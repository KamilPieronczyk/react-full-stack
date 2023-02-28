import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './button';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Button',
  argTypes: {
    children: {
      defaultValue: 'Click Me',
      name: 'text',
      type: 'string',
    },
    color: {
      control: {
        options: ['primary', 'secondary', 'text'],
      },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};
