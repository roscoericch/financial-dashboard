import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { OutlineButton, FilledButton } from './CustomButtons';
import '@testing-library/jest-dom/extend-expect';

describe('OutlineButton', () => {
  test('renders OutlineButton with startIcon correctly', () => {
    const { getByTestId } = render(<OutlineButton title="Click Me" startIcon={<span data-testid="start-icon" />} />);
    expect(getByTestId('start-icon')).toBeInTheDocument();
  });

  test('renders OutlineButton with endIcon correctly', () => {
    const { getByTestId } = render(<OutlineButton title="Click Me" endIcon={<span data-testid="end-icon" />} />);
    expect(getByTestId('end-icon')).toBeInTheDocument();
  });
});

describe('FilledButton', () => {
  test('disabled FilledButton should not be clickable', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<FilledButton title="Submit" disabled onClick={onClickMock} />);
    getByText('Submit').click();
    expect(onClickMock).not.toHaveBeenCalled();
  });

  test('renders FilledButton with startIcon correctly', () => {
    const { getByTestId } = render(<FilledButton title="Submit" startIcon={<span data-testid="start-icon" />} />);
    expect(getByTestId('start-icon')).toBeInTheDocument();
  });

  test('renders FilledButton with endIcon correctly', () => {
    const { getByTestId } = render(<FilledButton title="Submit" endIcon={<span data-testid="end-icon" />} />);
    expect(getByTestId('end-icon')).toBeInTheDocument();
  });
});