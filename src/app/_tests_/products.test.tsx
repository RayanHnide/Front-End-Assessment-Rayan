/// <reference types="@testing-library/jest-dom" />
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Products from '../sections/Products';
import '@testing-library/jest-dom/extend-expect';

 global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, title: 'Product 1', price: 100 },
      { id: 2, title: 'Product 2', price: 200 },
    ]),
  })
) as jest.Mock;

describe('Products Component', () => {
  it('renders the Products component and displays products', async () => {
    render(<Products />);

     expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Best Selling Products')).toBeInTheDocument();

     await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.getByText('Product 2')).toBeInTheDocument();
    });

     expect(screen.getAllByText('View All Products')).toHaveLength(2);
  });
});