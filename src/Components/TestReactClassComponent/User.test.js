import React from 'react';
import renderer, {act} from 'react-test-renderer';
import User from './User';

describe("Testing React Class Component", () => {
    test("User method testing", () => {
        let user;
        act(() => {
             user = renderer.create(<User />);
        })
        const instance = user.getInstance();
        expect(instance.getUser()).toMatch("sushant")
    })
})