import { describe, test, expect } from "vitest";

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";

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