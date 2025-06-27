import {addNum} from './Sum'
import Sum from './Sum'
import {screen, render} from '@testing-library/react'

test("testing sum of two numbers", ()=>{
    expect(addNum(2, 4)).toBe(6)
})

test("testing correct test",  ()=>{
    render(<Sum/>)
    const textElm = screen.getByText(/hello/i)
    expect(textElm).toBeInTheDocument()
})