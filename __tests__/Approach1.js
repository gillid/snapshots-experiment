import React from 'react';
import { shallow } from 'enzyme';
import Component from './Component';

for (let i = 1; i <= 1000; i++) {
  const getComponent = props => shallow(<Component {...props} />);

  describe(`Component ${i}`, () => {
    it('renders correctly without props', () => {
      expect(getComponent()).toMatchSnapshot();
    });

    it('renders correctly with props', () => {
      expect(getComponent({ prop1: true, prop2: true, prop3: true, prop4: true, prop5: true })).toMatchSnapshot();
    });
  });
}
