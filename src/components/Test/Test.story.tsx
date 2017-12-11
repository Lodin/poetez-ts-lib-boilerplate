import {storiesOf} from '@storybook/react';
import * as React from 'react';
import withReadme from 'storybook-readme/with-readme';
import Test from '.';
import readme from './README.md';

storiesOf('Testing', module)
  .addDecorator(withReadme(readme))
  .addWithJSX('Test', () => (
    <Test>
      Sleek, intuitive and powerful mobile first front-end framework.
    </Test>
  ));
