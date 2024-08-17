import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AdminLoginForm from '../login/AdminLogin';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock('../../apis/Api', () => ({
  post: jest.fn(),
}));

describe('AdminLoginForm', () => {
  let navigate;

  beforeEach(() => {
    navigate = useNavigate();
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
      },
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the login form', () => {
    render(<AdminLoginForm />);
    expect(screen.getByRole('heading', { name: 'Admin Login' })).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('navigates to home when home button is clicked', () => {
    render(<AdminLoginForm />);
    screen.debug(); // Debug the DOM

    const homeButton = screen.getByRole('button', { name: /go to home/i });
    expect(homeButton).toBeInTheDocument();

    userEvent.click(homeButton);
    expect(navigate).toHaveBeenCalledWith('/');
  });
});