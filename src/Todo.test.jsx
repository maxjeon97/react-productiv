import { describe, test, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const testTodo =
{
    id: 1,
    title: "Test1",
    description: "Test1 Descr",
    priority: 1,
    isDone: false,
};

describe("Todo component", function () {
    test("renders without crashing", function () {
        render(<Todo todo={testTodo}/>);
    });

    test('matches snapshot', function () {
        const { container } = render(<Todo todo={testTodo}/>);
        expect(container).toMatchSnapshot();
    });

    test("contains expected id, title, priority, description", function () {
        const result = render(<Todo todo={testTodo}/>);
        expect(result.queryByText("Test1")).toBeInTheDocument();
        expect(result.queryByText("Test1 Descr")).toBeInTheDocument();
        expect(result.queryByText("(priority: 1)")).toBeInTheDocument();
        expect(result.container.querySelector(".Todo").getAttribute("id")).toEqual("1");
    });
});