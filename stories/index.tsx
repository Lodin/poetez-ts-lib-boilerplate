import * as React from 'react';

import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';

import Example from '../src/Example';

storiesOf('<img />', module)
  .add('with a image', () => (
    <Example/>
  ));

storiesOf('Button', module)
  .add('with some emoji', () => <button onClick={action('clicked')}>😀 😎 👍 💯</button>);
