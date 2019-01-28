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
      const component = getComponent({ prop1: true, prop2: true, prop3: true, prop4: true, prop5: true });
      expect(component.contains(<div>prop1</div>)).toBeTruthy();
      expect(component.contains(<div>prop2</div>)).toBeTruthy();
      expect(component.contains(<div>prop3</div>)).toBeTruthy();
      expect(component.contains(<div>prop4</div>)).toBeTruthy();
      expect(component.contains(<div>prop5</div>)).toBeTruthy();
    });
  });
}
