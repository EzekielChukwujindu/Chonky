import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChonkyIconFA } from './ChonkyIconFA';

const Icons: React.FC<{ iconList: string[] }> = ({ iconList }) => {
  return (
    <>
      {iconList.map((icon: string) => (
        <span className="icon">
          <ChonkyIconFA icon={icon} />
        </span>
      ))}
    </>
  );
};

export default {
  title: 'ChonkyIcon',
  component: Icons,
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = (args) => <Icons {...args}></Icons>;

export const Default = Template.bind({});
Default.args = {
  iconList: ['', 'pdf'],
};
