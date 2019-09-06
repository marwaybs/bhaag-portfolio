import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import Contacts from '../index';

describe('<ContactsPage />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <ContactsPage />
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});
