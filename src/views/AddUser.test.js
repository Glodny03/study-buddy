import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from 'helpers/renderWithProviders';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Form Field', () => {
  it('Adds new user to the list', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>,
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Zbyszek' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.2' } });
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Zbyszek');
  });

  it('Prevennts adding new user if the consent is not checked', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>,
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Zbyszek' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.2' } });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Zbyszek');
    expect(newUser).not.toBeInTheDocument();
  });
});
