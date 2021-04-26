import { render, screen } from '@testing-library/react';
import Doughnutchart from './Doughnutchart';

test('renders learn react link', () => {
  render(<Doughnutchart />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
