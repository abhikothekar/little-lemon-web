//generate App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
describe('App Component', () => {
    test('renders Nav component', () => {
        render(<App />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    test('renders Main component', () => {
        render(<App />);
        expect(screen.getByRole('main')).toBeInTheDocument();
    });

    test('renders Menu component', () => {
        render(<App />);
        expect(screen.getByText(/Menu/i)).toBeInTheDocument(); // Assuming Menu has a text "Menu"
    });

    test('renders Footer component', () => {
        render(<App />);
        expect(screen.getByText(/Footer/i)).toBeInTheDocument(); // Assuming Footer has a text "Footer"
    });
});
