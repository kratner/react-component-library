import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AnimatedSVG, { AnimatedSVGProps } from './AnimatedSVG';

// This is an example story
export default {
  title: 'Components/AnimatedSVG',
  component: AnimatedSVG,
} as ComponentMeta<typeof AnimatedSVG>;

const Template: ComponentStory<typeof AnimatedSVG> = (args: AnimatedSVGProps) => (
  <AnimatedSVG {...args} />
);

// Example story with props
export const Example = Template.bind({});
Example.args = {
  svgPath: 'https://kratner.github.io/portfolio-site/images/moeba-white.svg',
  targetElements: ['path'],
  fadeInDuration: '.1ms',
  fadeOutDuration: '.1ms',
  captionTitle: '“Moeba”',
  captionDescription: '&copy; Keith Ratner 2023',
};
