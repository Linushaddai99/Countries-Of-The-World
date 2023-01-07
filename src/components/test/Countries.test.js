import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configStore';
import getCountries from '../../redux/api';

import ContriesHomepage from '../ContriesHomepage';

describe('displays all the countries from the api', () => {
  it('should display all the countries', () => {
    const { container } = render(
      <Provider store={store}>
        <ContriesHomepage />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});

describe('Countries reducers', () => {
  jest.setTimeout(30000);
  it('should fetch items', async () => {
    await store.dispatch(getCountries());
    expect(store.getState().countries.countries.length).toEqual(250);
  });
});
