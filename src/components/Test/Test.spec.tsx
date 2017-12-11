import {shallow} from 'enzyme';
import * as React from 'react';
import Test from '.';

describe('Test', () => {
  it('should show message', () => {
    const msg = 'Some testing msg';
    const wrapper = shallow(<Test>{msg}</Test>);
    expect(wrapper.contains(msg)).toBeTruthy();
  });
});
