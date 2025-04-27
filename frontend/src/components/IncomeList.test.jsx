<reference types="vitest"/>
import { render, screen } from '@testing-library/react';
import IncomeList from './IncomeList';

describe('IncomeList component', () => {
  it('renders incomes correctly', () => {
    const items = [
      { id: 1, name: 'Palkka', amount: 2500, date: '2025-04-15' },
      { id: 2, name: 'Sivutyö', amount: 500, date: '2025-04-20' },
    ];

    render(<IncomeList items={items} onDelete={() => {}} />);

    // Tarkistetaan että molemmat nimet näkyvät
    expect(screen.getByText('Palkka')).toBeInTheDocument();
    expect(screen.getByText('Sivutyö')).toBeInTheDocument();

    // Tarkistetaan että summat näkyvät
    expect(screen.getByText('2500')).toBeInTheDocument();
    expect(screen.getByText('500')).toBeInTheDocument();
  });
});
