import { render, screen } from '@testing-library/react';
import Barchart from './Barchart';

test('renders learn react link', () => {
  render(<Barchart />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
