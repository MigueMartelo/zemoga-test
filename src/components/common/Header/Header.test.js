import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './index';

describe('Test Header', () => {
  test('display main title', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(getByTestId('main-title')).toHaveTextContent('Rule of Thumb');
  });
  test('it displays default nav items', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const navItems = getByTestId('nav-items');
    expect(navItems.children.length).toBe(4);
  });
});
