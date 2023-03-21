import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemsCategoriesRadioGroup } from './items-categories-radio-group';

const Story: ComponentMeta<typeof ItemsCategoriesRadioGroup> = {
  component: ItemsCategoriesRadioGroup,
  title: 'ItemsCategoriesRadioGroup',
};
export default Story;

const Template: ComponentStory<typeof ItemsCategoriesRadioGroup> = (args) => <ItemsCategoriesRadioGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
