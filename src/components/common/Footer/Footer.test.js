import React from 'react';
import { render } from '@testing-library/react';

import Footer from './index';

describe('Test Footer', () => {
  test('it displays default nav footer items', () => {
    const { getByTestId } = render(<Footer />);
    const navItems = getByTestId('nav-footer');
    expect(navItems.children.length).toBe(3);
  });
});
