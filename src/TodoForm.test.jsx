import { describe, test, expect } from "vitest";

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("TodoForm component", function () {
    test("renders without crashing", function () {
        render(<TodoForm />);
    });

    test('matches snapshot', function () {
        const { container } = render(<TodoForm />);
        expect(container).toMatchSnapshot();
    });

    test("contains the form input fields with the correct values", function () {
        const result = render(<TodoForm />);
        expect(result.container.querySelectorAll(".form-control").length).toEqual(3);

        const titleInputField = result.getByPlaceholderText("Title");
        const descriptionInputField = result.getByPlaceholderText("Description");
        const priorityInputField = result.getByLabelText("Priority:");

        expect(titleInputField.value).toBe("");
        expect(descriptionInputField.value).toBe("");
        expect(priorityInputField.value).toBe("1");
    });

    test("contains the form input fields with the correct values when a change occurs", function () {
        const result = render(<TodoForm />);

        const titleInputField = result.getByPlaceholderText("Title");
        const descriptionInputField = result.getByPlaceholderText("Description");
        const priorityInputField = result.getByLabelText("Priority:");

        expect(titleInputField.value).toBe("");
        expect(descriptionInputField.value).toBe("");
        expect(priorityInputField.value).toBe("1");

        fireEvent.change(titleInputField, { target: { value: "New Title" } });
        fireEvent.change(descriptionInputField, { target: { value: "New Descr" } });
        fireEvent.change(priorityInputField, { target: { value: 2 } });

        expect(titleInputField.value).toBe("New Title");
        expect(descriptionInputField.value).toBe("New Descr");
        expect(priorityInputField.value).toBe("2");
    });
});