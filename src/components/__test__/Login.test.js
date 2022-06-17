import {render, screen} from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import Login from '../Login';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Login/>
        </BrowserRouter>
    )
};

describe("Login", () => {
    it('should view button', function () {
        render(
            <MockTodo />
        );
        const buttonElement = screen.getByRole("button", { name: /Login/i} );
        expect(buttonElement).toBeInTheDocument();
    });

    it('should view input username', function () {
        render(
            <MockTodo />
        );
        const inputElement = screen.getByText( /email/i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should view input password', function () {
        render(
            <MockTodo />
        );
        const inputElement = screen.getByText(/password/i );
        expect(inputElement).toBeInTheDocument();
    });
});