import React from "react";
import GoogleAnalytics, { GoogleAnalyticsProps } from "./GoogleAnalytics";

export default {
  title: "Components/Google Analytics",
  component: GoogleAnalytics,
  argTypes: {
    measurementId: { control: "text" },
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    measurementId: "YOUR_MEASUREMENT_ID",
  } as GoogleAnalyticsProps, // Adding type assertion here
};

const Template: React.FC<GoogleAnalyticsProps> = (args) => (
  <GoogleAnalytics {...args} />
);

export const Default = Template.bind({});
