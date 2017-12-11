import * as React from 'react';
import * as styles from './Test.css';

export interface TestProps {
  children: string;
}

export default class Test extends React.PureComponent<TestProps> {
  public render(): JSX.Element {
    const {children} = this.props;

    return (
      <div className={styles.container}>
        {children}
      </div>
    );
  }
}
