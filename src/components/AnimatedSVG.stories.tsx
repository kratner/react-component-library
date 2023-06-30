import { ComponentStory, ComponentMeta } from '@storybook/react';
import AnimatedSVG, { AnimatedSVGProps } from './AnimatedSVG';

export default {
  title: 'Components/AnimatedSVG',
  component: AnimatedSVG,
} as ComponentMeta<typeof AnimatedSVG>;

const Template: ComponentStory<typeof AnimatedSVG> = (args) => <AnimatedSVG {...args} />;

export const Example = Template.bind({});
Example.args = {
  containerBackgroundStyle: '#ccc',
  svgPath: 'https://kratner.github.io/portfolio-site/images/moeba-white.svg',
  targetElements: ['path'],
  fadeInDuration: '.1ms',
  fadeOutDuration: '.1ms',
  captionTitle: '“Moeba”',
  captionDescription: '&copy; Keith Ratner 2023',
};
