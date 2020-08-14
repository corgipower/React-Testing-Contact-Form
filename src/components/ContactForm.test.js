import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";


test("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});

test('verify fields are visible', () => {
    const {getByPlaceholderText} = render(<ContactForm />);
    const firstName = getByPlaceholderText(/Edd/i);
    const lastName = getByPlaceholderText(/Burke/i);

    expect(firstName).toBeVisible();
    expect(lastName).toBeVisible();

  });

  test('input text', () => {
    const {getByPlaceholderText} = render(<ContactForm />);
    const firstName = getByPlaceholderText(/Edd/i);
    const lastName = getByPlaceholderText(/Burke/i);

    fireEvent.change(firstName, {target: {value: 'Elizabeth'}});
    fireEvent.change(lastName, {target: {value: 'Shulman'}});
    
    expect(firstName.value).toBe('Elizabeth');
    expect(lastName.value).toBe('Shulman');

  })



