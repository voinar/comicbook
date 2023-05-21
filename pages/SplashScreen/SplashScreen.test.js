import React from 'react';
import renderer from 'react-test-renderer';
import SplashScreen from '.';

test('renders correctly', () => {
  const tree = renderer.create(<SplashScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
