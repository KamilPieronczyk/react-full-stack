import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppBar } from './app-bar';

const Story: ComponentMeta<typeof AppBar> = {
  component: AppBar,
  title: 'AppBar',
  argTypes: {
    onBackClick: { action: 'onBackClick executed!' },
    onAvatarClick: { action: 'onAvatarClick executed!' },
  },
};
export default Story;

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Home',
  avatarSrc: 'https://mui.com/static/images/avatar/1.jpg',
};

export const WithoutBackButton = Template.bind({});
WithoutBackButton.args = {
  title: 'Home',
  avatarSrc: 'https://mui.com/static/images/avatar/1.jpg',
  onBackClick: undefined,
};
