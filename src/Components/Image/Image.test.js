import { fireEvent, render, screen } from "@testing-library/react";
import Image from "./Image";
import cleanDb from "../Server";

// beforeAll(()=>{
//    cleanDb()
// })

// beforeEach(()=>{
//    cleanDb()
// })

test('testing image title', () => { 
    render(<Image/>)
    const title = screen.getByTitle("treeImage")
    expect(title).toBeInTheDocument()
 })

 test('testing input box', ()=>{
    render(<Image/>)
    // const input = screen.getByRole("textbox")
    const placeholder = screen.getByPlaceholderText(/enter your username/i)

    expect(placeholder).toBeInTheDocument()
    expect(placeholder).toBeInTheDocument()
    expect(placeholder).toHaveAttribute("name", "username")
    expect(placeholder).toHaveAttribute("id", "userId")
    expect(placeholder).toHaveAttribute("type", "text")
 })

 describe("UI test case", ()=>{
   
     test("Testing onchange in input", ()=>{
        render(<Image/>)
        const onchangeInput = screen.getByPlaceholderText("Enter your name")
        fireEvent.change(onchangeInput, {target: {value: 'a'}})
        expect(onchangeInput).toHaveAttribute("name", "name")
        expect(onchangeInput.value).toBe('a')

    })

    test("Tesitng increment count on button click", ()=>{
      render(<Image/>)
      const button = screen.getByText("+")
      const value = screen.getByTestId("count")
      
      expect(value.textContent).toBe("0");
      
      fireEvent.click(button)
      expect(value.textContent).toBe("1")
    })

 })

//  afterEach(()=>{
//    console.log("after test")
//  })

// Snapshot testing
test("snapshot for image component", ()=>{
   const comp = render(<Image/>);
   expect(comp).toMatchSnapshot()
})

afterAll(()=>{
   console.log("after all test")
})

