import React from 'react';
import { render } from '@testing-library/react';
import Hero from './index';

describe('Hero component', () => {
  it('renders correctly', () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });
});
