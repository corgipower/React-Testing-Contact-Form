import React from "react";
import {findByText, fireEvent, getByLabelText, render, screen} from '@testing-library/react';
import ContactForm from "./ContactForm";

test('renders Contact Form', () => {
    render(<ContactForm />);
});

test('filling out and submitting form', async () => {
    const {getByPlaceholderText} = render(<ContactForm />);

    const firstName = getByPlaceholderText(/Edd/i);
    const lastName = getByPlaceholderText(/Burke/i);
    const email = getByPlaceholderText(/bluebill1049@hotmail.com/i);
    const message = getByPlaceholderText(/Message.../i);

    fireEvent.change(firstName, {target: {value: 'Elizabeth'}});
    fireEvent.change(lastName, {target: {value: 'Shulman'}});
    fireEvent.change(email, {target: {value: 'corgipower@hotmail.com'}});
    fireEvent.change(message, {target: {value: 'hjfsdhf lasudha'}});

    expect(firstName).toHaveValue('Elizabeth');
    expect(lastName).toHaveValue('Shulman');
    expect(email).toHaveValue('corgipower@hotmail.com');
    expect(message).toHaveValue('hjfsdhf lasudha');

    const button = findByText(/submit/i);
})