 import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Category from '../sections/Category';
import '@testing-library/jest-dom/extend-expect';

 
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, name: 'Category 1', image: 'https://i.imgur.com/KeqG6r4.jpeg' },
      { id: 2, name: 'Category 2', image: 'https://i.imgur.com/KeqG6r4.jpeg' },
    ]),
  })
) as jest.Mock;

describe('Category Component', () => {
  it('renders the header section', async () => {
    render(<Category />);
    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByText('Browse By Category')).toBeInTheDocument();
  });

  it('fetches and displays categories', async () => {
    render(<Category />);
    
    await waitFor(() => {
      expect(screen.getByText('Category 1')).toBeInTheDocument();
      expect(screen.getByText('Category 2')).toBeInTheDocument();
    });
  });

  it('renders the "View All Products" button', () => {
    render(<Category />);
    expect(screen.getByText('View All Products')).toBeInTheDocument();
  });
});