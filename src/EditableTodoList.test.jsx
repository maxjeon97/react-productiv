import { describe, test, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

const testTodos = [
    {
        id: 1,
        title: "Test1",
        description: "Test1 Descr",
        priority: 1,
        isDone: false,
    },
    {
        id: 2,
        title: "Test2",
        description: "Test2 Descr",
        priority: 2,
        isDone: false,
    },
];

describe("EditableTodoList component", function () {
    test("renders without crashing", function () {
        render(<EditableTodoList todos={testTodos} />);
    });

    test('matches snapshot', function () {
        const { container } = render(<EditableTodoList todos={testTodos} />);
        expect(container).toMatchSnapshot();
    });

    test("contains the expected number of EditableTodos", function () {
        const result = render(<EditableTodoList todos={testTodos} />);
        expect(result.queryByText("Test1")).toBeInTheDocument();
        expect(result.queryByText("Test2")).toBeInTheDocument();
        expect(result.queryAllByText("Edit").length).toEqual(2);
        expect(result.queryAllByText("Del").length).toEqual(2);
    });
});