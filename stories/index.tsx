import * as React from 'react';

import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react';

storiesOf('<img />', module)
  .add('with a image', () => (
    <img src="https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg" alt="covfefe" />
  ));

storiesOf('Button', module)
  .add('with some emoji', () => <button onClick={action('clicked')}>😀 😎 👍 💯</button>);
