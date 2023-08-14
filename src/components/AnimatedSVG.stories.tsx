import { Story, ComponentMeta } from '@storybook/react';
import AnimatedSVG, { AnimatedSVGProps } from './AnimatedSVG';
import { CSSProperties } from 'react';

export default {
  title: 'Components/AnimatedSVG',
  component: AnimatedSVG,
} as ComponentMeta<typeof AnimatedSVG>;

const captionStyle: CSSProperties = {
  position: 'absolute',
  left: '15%',
  bottom: '15%',
  background: '#000000b5',
  padding: '1em',
  borderRadius: '1em',
  borderStyle: 'solid',
  borderColor: '#ffffffa3',
  borderWidth: '.1em',
  textShadow: '#000 .1em .1em',
  fontFamily: 'Arial, Helvetica, sans-serif',
  color: '#fff',
};

const captionTitleStyle: CSSProperties = {
  fontWeight: '800',
  fontSize: '1.5em',
};

const captionDescriptionStyle: CSSProperties = {
  fontStyle: 'italic',
};

const Template: Story<AnimatedSVGProps> = (args) => <AnimatedSVG {...args} />;

export const Example = Template.bind({});
Example.args = {
  containerBackgroundCSS: '#000',
  svgPath: 'https://kratner.github.io/portfolio-site/images/moeba-white.svg',
  targetElements: ['path'],
  fadeInDuration: '.1ms',
  fadeOutDuration: '.1ms',
  captionStyle,
  captionTitle: '“Moeba”',
  captionTitleStyle,
  captionDescription: '&copy; Keith Ratner 2023',
  captionDescriptionStyle,
};
