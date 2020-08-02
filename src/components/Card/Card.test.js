import React from 'react';
import { render } from '@testing-library/react';

import Card from './index';

describe('Test Card', () => {
  test('it display all props', () => {
    const person = {
      id: 1,
      name: 'Kanye West',
      picture: 'kanye',
      category: 'Entertainment',
      description:
        'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aeanean eu velit libero.',
      thumbsUp: 64,
      thumbsDown: 36,
    };
    const { getByTestId } = render(<Card person={person} />);

    expect(getByTestId('person-name')).toHaveTextContent(person.name);
    expect(getByTestId('person-category')).toBeInTheDocument(person.category);
    expect(getByTestId('person-description')).toHaveTextContent(person.description);
  });
});
