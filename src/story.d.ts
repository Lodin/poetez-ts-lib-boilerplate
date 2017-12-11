// tslint:disable:export-name

declare module '*.md' {
  const readme: string;
  export default readme;
}

declare module '@storybook/react';
declare module 'storybook-readme/with-readme';
declare module 'storybook-addon-jsx';
