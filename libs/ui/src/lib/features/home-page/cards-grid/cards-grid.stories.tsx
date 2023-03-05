import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Blue } from '../progress-card/progress-card.stories';
import { CardsGrid } from './cards-grid';

const Story: ComponentMeta<typeof CardsGrid> = {
  component: CardsGrid,
  title: 'CardsGrid',
  args: {
    children: <Blue completed={10} newTasks={0} title="Books" total={20} icon="books"></Blue>,
  },
};
export default Story;

const Template: ComponentStory<typeof CardsGrid> = (args) => <CardsGrid>{args.children}</CardsGrid>;

export const OneChild = Template.bind({});
OneChild.args = {
  children: <Blue completed={10} newTasks={0} title="Books" total={20} icon="books"></Blue>,
};

export const FourChildren = Template.bind({});
FourChildren.args = {
  children: (
    <React.Fragment>
      <Blue completed={10} newTasks={0} title="Books" total={20} icon="books"></Blue>
      <Blue completed={10} newTasks={0} title="Books" total={20} icon="books"></Blue>
      <Blue completed={10} newTasks={0} title="Books" total={20} icon="books"></Blue>
      <Blue completed={10} newTasks={0} title="Books" total={20} icon="books"></Blue>
    </React.Fragment>
  ),
};
