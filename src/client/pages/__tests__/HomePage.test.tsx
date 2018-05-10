import * as React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../HomePage';
import { ThunkActionCreator } from '../../../types.d';

test('should render HomePage', () => {
  const wrapper = shallow(<HomePage />);
  expect(wrapper).toHaveLength(1);
});
