import React from 'react';
import { render } from '@testing-library/react-native';
import MainViewContainer from './MainViewContainer';

jest.mock('../../components/MainView', () => () => <></>);

describe('MainViewContainer', () => {
  it('renders the MainView component', () => {
    const navigation = {};
    const { getByTestId } = render(<MainViewContainer navigation={navigation} />);
    expect(getByTestId('main-view')).toBeTruthy();
  });
});
