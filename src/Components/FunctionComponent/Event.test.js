import { render, screen, fireEvent } from "@testing-library/react";
import Event from "./Event";
import update from '../FunctionTest/FunctionTest'

describe("Testing Function Component", ()=>{
    test("Testing button", ()=>{
        render(<Event/>)
        const btn = screen.getByTestId('btn');
        const data = screen.getByTestId('data')
        fireEvent.click(btn)
        expect(data.textContent).toBe("hello")
        expect(screen.getByText("hello")).toBeInTheDocument()
    })

    test("Testing Update Function", ()=>{
        expect(update()).toMatch("sushant")
    })

    test("Testing buttons", ()=>{
        render(<Event/>)
        const btn1 = screen.getByRole("button", {name: "Click1"})
        const btn2 = screen.getByRole("button", {name: "Click2"})
        const btn3 = screen.getByRole("button", {name: "Click3"})

        const name = screen.getByRole("textbox", {name: "Name:"})
        const username = screen.getByRole("textbox", {name: "Username:"})
        const email = screen.getByRole("textbox", {name: "Email:"})

        const div1 = screen.getByRole("div1")
        const div2 = screen.getByRole("div2")

        expect(btn1).toBeInTheDocument();
        expect(btn2).toBeInTheDocument();
        expect(btn3).toBeInTheDocument();

        expect(name).toBeInTheDocument()
        expect(username).toBeInTheDocument()
        expect(email).toBeInTheDocument()

        expect(div1).toBeInTheDocument()
        // expect(div2).toBeInTheDocument()
    })
})