import {sum} from './sum';

describe('Function "sum"', () => {
  it('should sum two numbers', () => {
    expect(sum(4, 1)).toEqual(5);
  });
});
