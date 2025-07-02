import { logRoles, prettyDOM, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import UserEvent from "./UserEvent";
import { act } from "react";

test('testing with user event library', async () => {
    userEvent.setup();
    render(<UserEvent />)
    const btn = screen.getByText("click me")
    const input = screen.getByRole("textbox")

    await userEvent.click(btn)
    expect(screen.getByText("hello")).toBeInTheDocument();

    await userEvent.type(input, "sushant")
    expect(screen.getByText("sushant")).toBeInTheDocument();
})

test('props testing', ()=>{
    render(<UserEvent email= "sushant@gmail.com"/>)
    const email = screen.getByText("sushant@gmail.com")
    expect(email).toBeInTheDocument();
})

test("functional testing", async ()=>{
    const handleClick = jest.fn();
    userEvent.setup();

    const {container, debug} = render(<UserEvent handleClick={handleClick}/>)
    
    const btn = screen.getByText("Click");
    await userEvent.click(btn);
    expect(handleClick).toBeCalled();
    // console.log(prettyDOM(container.container))
    debug()
    logRoles(container)
})