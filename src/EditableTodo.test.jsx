import { describe, test, expect } from "vitest";

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";

const testTodo =
{
    id: 1,
    title: "Test1",
    description: "Test1 Descr",
    priority: 1,
};

describe("EditableTodo component", function () {
    test("renders without crashing", function () {
        render(<EditableTodo todo={testTodo} />);
    });

    test('matches snapshot', function () {
        const { container } = render(<EditableTodo todo={testTodo} />);
        expect(container).toMatchSnapshot();
    });

    test("displays correct components when isEditing is false (default)", function () {
        const result = render(<EditableTodo todo={testTodo} />);

        expect(result.container.querySelector(".NewTodoForm")).not.toBeInTheDocument();
        expect(result.queryByText("Test1")).toBeInTheDocument();
        expect(result.queryByText("Test1 Descr")).toBeInTheDocument();
        expect(result.queryByText("(priority: 1)")).toBeInTheDocument();
    });

    test("displays correct components when isEditing is true", function () {
        const result = render(<EditableTodo todo={testTodo} />);
        const editBtn = result.container.querySelector(".EditableTodo-toggle");
        fireEvent.click(editBtn);

        expect(result.container.querySelector(".NewTodoForm")).toBeInTheDocument();
        expect(result.container.querySelector(".Todo")).not.toBeInTheDocument();
    });
});