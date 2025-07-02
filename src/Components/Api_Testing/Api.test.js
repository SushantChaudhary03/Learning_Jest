import {screen, render} from '@testing-library/react'
import Api from "./Api"

test("testing mock api", async ()=>{
    render(<Api />)
    const el = await screen.findAllByRole("listitem")
    expect(el).toHaveLength(1)
})
