import { render, fireEvent } from '@testing-library/react';

import NetworkPanel from './NetworkPanel';

describe('Network Panel Component Tests', () => {

    test('Network switch should render', () => {
        const containerElement = render(<NetworkPanel />);
        const switchElement = containerElement.getByTestId('network-switch');

        expect(switchElement).toBeInTheDocument();
    });

    test('Network title should say', () => {
        const containerElement = render(<NetworkPanel />);
        const titleElement = containerElement.getByTestId('network-title');

        expect(titleElement).toHaveTextContent('Simulate network error:');
    });

    test('Network switch should have class after 1 click', () => {
        const containerElement = render(<NetworkPanel />);
        const switchElement = containerElement.getByTestId('network-switch');

        fireEvent.click(switchElement);

        expect(switchElement).toHaveClass('ant-switch-checked');
    });

    test('Network switch should not have class after 2 clicks', () => {
        const containerElement = render(<NetworkPanel />);
        const switchElement = containerElement.getByTestId('network-switch');

        fireEvent.click(switchElement);

        expect(switchElement.classList.contains('ant-switch-checked')).toBe(false);
    });
});