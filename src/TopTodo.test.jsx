import { describe, test, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

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
    {
        id: 3,
        title: "Test3",
        description: "Test3 Descr",
        priority: 3,
        isDone: false,
    },
];

describe("TopTodo component", function () {
    test("renders without crashing", function () {
        render(<TopTodo todos={testTodos}/>);
    });

    test('matches snapshot', function () {
        const { container } = render(<TopTodo todos={testTodos}/>);
        expect(container).toMatchSnapshot();
    });

    test("renders the correct todo (highest priority)", function () {
        const result = render(<TopTodo todos={testTodos}/>);
        expect(result.queryByText("Test1")).toBeInTheDocument();
        expect(result.queryByText("Test2")).not.toBeInTheDocument();
        expect(result.queryByText("Test3")).not.toBeInTheDocument();
    });
});