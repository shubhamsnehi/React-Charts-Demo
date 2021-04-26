import { render, screen } from '@testing-library/react';
import Linechart from './Linechart';

test('renders learn react link', () => {
  render(<Linechart />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
