import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Badge from '../../../ui/src/basic-components/Badge';

describe('Badge component', () => {
  it('renders without crashing', () => {
    render(<Badge label="New" />);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('applies no-print class when noPrint is true', () => {
    render(<Badge label="Test" noPrint />);
    expect(screen.getByText('Test')).toHaveClass('no-print');
  });
});
