import { render, screen } from '@testing-library/react';
import App from './App';

test('renders teste', () => {
  render(<App />);
  const linkElement = screen.getByText(/teste/i);
  expect(linkElement).toBeInTheDocument();
});
