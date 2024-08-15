import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toast } from 'react-toastify';
import AdminLoginForm from '../login/AdminLogin';
import Api from '../../apis/Api';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('react-toastify', () => ({
  success: jest.fn(),
  error: jest.fn(),
}));

jest.mock('../apis/Api', () => ({
  post: jest.fn(),
}));

describe('AdminLoginForm', () => {
  let navigate;

  beforeEach(() => {
    navigate = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation((initialValue) => [initialValue, jest.fn()]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the login form', () => {
    render(<AdminLoginForm />);
    expect(screen.getByRole('heading', { name: 'Admin Login' })).toBeInTheDocument();
  });


  it('handles successful login', async () => {
    const mockResponse = { data: { token: 'abc123', userData: { name: 'John Doe' } } };
    Api.post.mockResolvedValueOnce(mockResponse);

    render(<AdminLoginForm />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Login' });

    userEvent.type(emailInput, 'test@example.com');
    userEvent.type(passwordInput, 'password123');
    userEvent.click(submitButton);

    await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for async actions

    expect(Api.post).toHaveBeenCalledWith('/user/login', { email: 'test@example.com', password: 'password123' });
    expect(toast.success).toHaveBeenCalledWith('Logged in successfully!');
    expect(localStorage.setItem).toHaveBeenCalledWith('token', 'abc123');
    expect(localStorage.setItem).toHaveBeenCalledWith('adminData', JSON.stringify({ name: 'John Doe' }));
    expect(navigate).toHaveBeenCalledWith('/admin/dashboard');
  });
});