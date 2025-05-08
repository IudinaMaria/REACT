import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FurnitureCard from '../src/components/FurnitureCard';

/**
 * Тестирование компонента FurnitureCard..
 */

describe('FurnitureCard Component', () => {
  it('проверка добавления товара в корзину', () => {
    const item = {
      id: 1,
      title: "Диван",
      price: "1000",
      imageUrl: "/image.jpg"
    };

    render(<FurnitureCard {...item} />);

    expect(screen.getByText(/Добавить/)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Добавить/));

    expect(screen.getByText(/1000/)).toBeInTheDocument(); 
  });
});
