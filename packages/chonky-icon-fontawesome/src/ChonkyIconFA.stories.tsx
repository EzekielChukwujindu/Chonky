import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChonkyIconFA } from "./ChonkyIconFA";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ChonkyIcon',
  component: ChonkyIconFA,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ChonkyIconFA>;

const Template: ComponentStory<typeof ChonkyIconFA> = (args) => <ChonkyIconFA {...args} />;

export const Default = Template.bind({});