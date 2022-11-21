import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChonkyIconFA } from './ChonkyIconFA';
import { ChonkyIconName } from 'chonky-custom';

type SizeProp =
  | "xs"
  | "lg"
  | "sm"
  | "1x"
  | "2x"
  | "3x"
  | "4x"
  | "5x"
  | "6x"
  | "7x"
  | "8x"
  | "9x"
  | "10x";

const Icons: React.FC<{ iconList: string[], size: SizeProp, showName: boolean }> = ({ iconList, size = "xs", showName = false }) => {
  return (
    <>
      {iconList.map((icon: string, index: number) => (
        <span className="icon" key={icon + index}>
          <ChonkyIconFA icon={icon} size={size} />
          <span className="icon-name">{showName ? icon : ''}</span>
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
  iconList: Object.keys(ChonkyIconName)
};

export const IconSize2x = Template.bind({});
IconSize2x.args = {
  iconList: Object.keys(ChonkyIconName),
  size: '2x'
};

export const IconWithName = Template.bind({});
IconWithName.args = {
  iconList: Object.keys(ChonkyIconName),
  size: '1x',
  showName: true
};

export const IconSize6x = Template.bind({});
IconSize6x.args = {
  iconList: Object.keys(ChonkyIconName),
  size: '6x'
};
