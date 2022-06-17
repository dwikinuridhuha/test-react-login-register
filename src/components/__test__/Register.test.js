import {render, screen} from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

import Register from '../Register';

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Register/>
        </BrowserRouter>
    )
};

describe("Register", () => {
    it('should view button', function () {
        render(
            <MockTodo />
        );
        const buttonElement = screen.getByRole("button", { name: /Register/i} );
        expect(buttonElement).toBeInTheDocument();
    });

    it('should view First Name', function () {
        render(
            <MockTodo />
        );
        const firstNameElement = screen.getByText( /First Name/i);
        expect(firstNameElement).toBeInTheDocument();
    });

    it('should view Last Name', function () {
        render(
            <MockTodo />
        );
        const lastNameElement = screen.getByText( /Last Name/i);
        expect(lastNameElement).toBeInTheDocument();
    });

    it('should view No Hp', function () {
        render(
            <MockTodo />
        );
        const noHpElement = screen.getByText( /No Hp/i);
        expect(noHpElement).toBeInTheDocument();
    });

    it('should view Tanggal Lahir', function () {
        render(
            <MockTodo />
        );
        const tglHpElement = screen.getByText( /Tanggal Lahir/i);
        expect(tglHpElement).toBeInTheDocument();
    });

    it('should view Grup', function () {
        render(
            <MockTodo />
        );
        const grupHpElement = screen.getByText( /Grup/i);
        expect(grupHpElement).toBeInTheDocument();
    });

    it('should view role', function () {
        render(
            <MockTodo />
        );
        const roleHpElement = screen.getByText( /role/i);
        expect(roleHpElement).toBeInTheDocument();
    });

    it('should view Email', function () {
        render(
            <MockTodo />
        );
        const emailHpElement = screen.getByText( /Email/i);
        expect(emailHpElement).toBeInTheDocument();
    });

    it('should view Password', function () {
        render(
            <MockTodo />
        );
        const passwordHpElement = screen.getByText( "Password");
        expect(passwordHpElement).toBeInTheDocument();
    });

    it('should view Confirm Password', function () {
        render(
            <MockTodo />
        );
        const confirmPasswordHpElement = screen.getByText( "Confirm Password");
        expect(confirmPasswordHpElement).toBeInTheDocument();
    });
});