import { describe, test, expect } from "vitest";

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";
import { unmountComponentAtNode } from "react-dom";

const testTodos = [
    {
        id: 1,
        title: "Test1",
        description: "Test1 Descr",
        priority: 1,
    },
];

describe("TodoApp component", function () {
    test("renders without crashing", function () {
        render(<TodoApp initialTodos={testTodos} />);
    });

    test('matches snapshot', function () {
        const { container } = render(<TodoApp initialTodos={testTodos} />);
        expect(container).toMatchSnapshot();
    });

    test("renders expected components", function () {
        const result = render(<TodoApp initialTodos={testTodos} />);

        expect(result.queryAllByText("Test1").length).toEqual(2);
        expect(result.queryByText("Top Todo")).toBeInTheDocument();
        expect(result.queryByText("Add Nü")).toBeInTheDocument();
    });

    test("adds todo successfully", function () {
        const result = render(<TodoApp initialTodos={testTodos} />);

        const titleInputField = result.getByPlaceholderText("Title");
        const descriptionInputField = result.getByPlaceholderText("Description");
        const priorityInputField = result.getByLabelText("Priority:");
        const submitBtn = result.container.querySelector(".NewTodoForm-addBtn");

        fireEvent.change(titleInputField, { target: { value: "New Title" } });
        fireEvent.change(descriptionInputField, { target: { value: "New Descr" } });
        fireEvent.change(priorityInputField, { target: { value: 2 } });
        fireEvent.click(submitBtn);

        expect(result.queryByText("New Title")).toBeInTheDocument();
        expect(result.queryByText("New Descr")).toBeInTheDocument();
        expect(result.queryByText("(priority: 2)")).toBeInTheDocument();
    });

    // FIXME: how do i test edits when the two forms are the same form?
    // test("edits todo successfully", function () {
    //     const result = render(<TodoApp initialTodos={testTodos} />);

    //     const editBtn = result.container.querySelector(".EditableTodo-toggle");
    //     fireEvent.click(editBtn);

    //     const titleInputField = result.getByPlaceholderText("Title");
    //     const descriptionInputField = result.getByPlaceholderText("Description");
    //     const priorityInputField = result.getByLabelText("Priority:");
    //     const submitBtn = result.container.querySelector(".NewTodoForm-addBtn");

    //     expect(titleInputField.value).toBe("Test1");
    //     expect(descriptionInputField.value).toBe("Test1 Descr");
    //     expect(priorityInputField.value).toBe("1");

    //     fireEvent.change(titleInputField, { target: { value: "New Title" } });
    //     fireEvent.change(descriptionInputField, { target: { value: "New Descr" } });
    //     fireEvent.change(priorityInputField, { target: { value: 2 } });
    //     fireEvent.click(submitBtn);

    //     expect(result.queryByText("Test1")).not.toBeInTheDocument();
    //     expect(result.queryByText("Test Descr")).not.toBeInTheDocument();
    //     expect(result.queryByText("(priority: 1)")).not.toBeInTheDocument();
    //     expect(result.queryByText("New Title")).toBeInTheDocument();
    //     expect(result.queryByText("New Descr")).toBeInTheDocument();
    //     expect(result.queryByText("(priority: 2)")).toBeInTheDocument();
    // });

    test("removes todo when delete button is clicked", function () {
        const { container, queryByText } = render(<TodoApp initialTodos={testTodos} />);

        const deleteBtn = container.querySelector('.EditableTodo-delBtn');
        fireEvent.click(deleteBtn);

        expect(queryByText("Test1")).not.toBeInTheDocument();
        expect(queryByText("You have no todos.")).toBeInTheDocument();
    });

    test("displays correct msg when no todos present", function () {
        const result = render(<TodoApp initialTodos={[]} />);
        expect(result.queryByText("Test1")).not.toBeInTheDocument();
        expect(result.queryByText("Test2")).not.toBeInTheDocument();
        expect(result.queryByText("You have no todos.")).toBeInTheDocument();
    });
});