import {render, screen, fireEvent} from '@testing-library/react';

import Header from './Header';

test('should render Header component', () => {
    render(<Header />);
    const container = screen.getByTestId('header');
    expect(container).toBeInTheDocument();
});

test('switch should not have success class', () => {
    render(<Header />);
    const container = screen.getByTestId('header');
    expect(container.querySelector('[role="switch"]').classList.contains('ant-switch-checked')).toBe(false);

    fireEvent.click(container.querySelector('[role="switch"]'));
    expect(container.querySelector('[role="switch"]').classList.contains('ant-switch-checked')).toBe(true);
});
