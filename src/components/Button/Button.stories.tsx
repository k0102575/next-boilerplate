import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { css } from '@emotion/react';

export default {
  title: 'Sample Component/Button',
  component: Button,
  subcomponents: { Button },
  parameters: { controls: { expanded: true } },
  // argTypes: {
  //   style: { control: 'object' },
  // },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Overview = Template.bind({});
Overview.decorators = [
  () => (
    <div
      css={css`
        display: flex;
        gap: 20px;
        flexwrap: wrap;
        padding: 20px;
      `}
    >
      <Button theme="Default">기본 버튼</Button>
      <Button theme="Next">
        다음
        <br />
        다음!
      </Button>
    </div>
  ),
];
Overview.parameters = {
  // options: { showPanel: false },
  // controls: { disabled: true },
  // actions: { disabled: true },
};
Overview.argTypes = {
  theme: { table: { disable: true } },
  customCss: { table: { disable: true } },
  content: { table: { disable: true } },
};

export const Default = Template.bind({});
Default.args = {
  theme: 'Default',
  content: 'Button',
};

export const test = Template.bind({});
test.args = {
  theme: 'Next',
  content: 'Button',
  customCss: css`
    width: 200px;
  `,
};
test.argTypes = {
  theme: { table: { disable: true } },
  // customCss: { table: { disable: true } },
  content: { table: { disable: true } },
};
