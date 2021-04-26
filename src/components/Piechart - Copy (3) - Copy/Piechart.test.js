import { render, screen } from '@testing-library/react';
import Piechart from './Piechart';

test('renders learn react link', () => {
  render(<Piechart />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
