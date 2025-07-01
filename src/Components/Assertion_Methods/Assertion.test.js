import { screen, render, within } from "@testing-library/react";
import Assertion from "./Assertion";

test("Testing different assertion method", () => {
  render(<Assertion />);

  const employee = screen.getByRole("textbox");
  const div = screen.getByText("hey");

  expect(employee).toBeInTheDocument();
  expect(employee).toHaveValue();
  expect(employee).toBeEnabled();
  // expect(employee).toBeDisabled();
  expect(employee).toHaveAttribute("id", "employee");
  expect(employee).toHaveClass("employee");
  expect(employee).not.toBeDisabled();
  expect(div.textContent).toMatch(/Hey/i);
});


test("test match with function", ()=>{
  render(<Assertion />)
  const dv = screen.getByText((content, element)=> content.startsWith("hello"))
  expect(dv).toBeInTheDocument();
})

test("queryBy test cast", ()=>{
  render(<Assertion/>)
  const login = screen.queryByText("login")
  const logout = screen.queryByText("logout")

  expect(login).toBeInTheDocument();
  expect(logout).not.toBeInTheDocument();
})


test("findBy test case", async ()=>{
  render(<Assertion/>)
  const data = await screen.findByText("data found", {}, {timeout: 3000})
  expect(data).toBeInTheDocument();
})

test("testing with custom query", ()=>{
  render(<Assertion/>)
  const elem = document.querySelector('.elem')
  expect(elem).toBeInTheDocument();
  expect(elem).toHaveTextContent("element")
})

test("testing with within function", ()=>{
  render(<Assertion/>)
  const el = screen.getByText("container")
  let subEl = within(el).getByText("bye")

  expect(el).toBeInTheDocument()
  expect(subEl).toBeInTheDocument()
})