import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from '../../../ui/src/basic-components/Badge';

describe('Badge component', () => {
  it('renders without crashing', () => {
    render(<Badge text="New" />);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Badge text="Test" className="my-class" />);
    expect(screen.getByText('Test')).toHaveClass('my-class');
  });
});
