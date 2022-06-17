import {render, screen} from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import Dashboard from '../Dashboard';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Dashboard/>
        </BrowserRouter>
    )
};

describe("Dashboard", () => {
    it('should view welcome', function () {
        render(
            <MockTodo />
        );
        const welcomeElement = screen.getByText( /welcome/i);
        expect(welcomeElement).toBeInTheDocument();
    });
});