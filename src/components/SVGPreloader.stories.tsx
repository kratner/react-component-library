import React from 'react';
import { Story, Meta } from '@storybook/react';

import SVGPreloader, { SVGPreloaderProps } from './SVGPreloader';

export default {
  title: 'Components/SVGPreloader',
  component: SVGPreloader,
  argTypes: {
    indeterminate: { control: 'boolean' },
    indeterminateAnimationDuration: { control: 'text' },
    circleColor: { control: 'color' },
    strokeWidth: { control: 'number' },
    containerClassName: { control: 'text' },
    wrapperClassName: { control: 'text' },
  },
} as Meta;

const Template: Story<SVGPreloaderProps> = (args) => <SVGPreloader {...args} />;

export const Default = Template.bind({});

const Example = Template.bind({});
Example.args = {
    containerBackgroundCSS : '#000',
    indeterminateAnimationDuration: '1s',
    strokeWidth: 400
}