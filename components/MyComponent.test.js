import React from 'react';
import {mount} from 'enzyme';
import MyComponent from './MyComponent';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('renders correctly', () => {
  const component = mount(<MyComponent />).html();
  expect(component).toMatchSnapshot();
});










test('enter name and says hello', () => {
  const component = mount(<MyComponent />);

  component.find('input')
    .simulate('change', {
      target: {value: 'Richard'}
    });

  component.find('button').simulate('click');

  expect(component.text()).toContain('Hello Richard');
  expect(component.state('name')).toBe('Richard');
});