import { render, screen } from '@testing-library/react';
import Badge from './Badge';

test('renders Badge component', () => {
  render(<Badge label="Test Badge" />);
  expect(screen.getByText('Test Badge')).toBeInTheDocument();
});
