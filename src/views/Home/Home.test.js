import { render, screen } from '@testing-library/react';
import Home from './Home';

test('render the logo', () => {
  render(<Home />);
  const linkElement = screen.getByText(/OBASE APPAREL/i);
  expect(linkElement).toBeInTheDocument();
});
