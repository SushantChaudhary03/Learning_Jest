import { render, screen, configure, fireEvent } from '@testing-library/react'
import UI from './Ui'
import { Checkbox } from './Ui'
configure({testIdAttribute: 'element-id'})

test("getAllByRole", ()=>{
    render(<UI />)
    const btns = screen.getAllByRole("button")
    const options = screen.getAllByRole("option")

    expect(btns[0]).toBeInTheDocument()
    for(let i=0; i<options.length; i++){
        expect(options[i]).toBeInTheDocument()
    }
})

test("getByLabelText", ()=>{
    render(<UI/>)
    const input = screen.getByLabelText("Student Name")
    const checkbox = screen.getByLabelText("check box")
    const allInput = screen.getAllByLabelText("username")
    const div = screen.getByTestId('hello')

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("name");
    expect(checkbox).toBeChecked()
    for (let i = 0; i < allInput.length; i++) {
        expect(allInput[i]).toBeInTheDocument()
    }
    expect(div).toBeInTheDocument()
})

test('checkbox triggers onChange when clicked', () => {
  const handleChange = jest.fn();
  render(<Checkbox checked={false} onChange={handleChange} />);
  const checkbox = screen.getByTestId("test-checkbox");
  fireEvent.click(checkbox);
  expect(handleChange).toHaveBeenCalled();
});