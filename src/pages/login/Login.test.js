import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUserApi } from "../../apis/Api";
import Login from "./Login"; // Components for testing

jest.mock('../../apis/Api'); //Mocking API module (No sending request to real backend)
 
//making test case
describe("Login Component Test", () => {

    //clearing mocks after each test
    afterEach(() => {
        jest.clearAllMocks();
    });

    //Test case 1
    it("should display an error toast or message on failed login", async () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        )
    

    //mocking the api response for loginUserApi
    const mockResponse = {
        data:{
            success: false,
            message: "Password not matched!"
        }
    };

    //after the loginUserApi is called, it should return the mockResponse
    loginUserApi.mockResolvedValue(mockResponse);
    //making toast.error as test function
    toast.error = jest.fn();

    //testing real UI 

    //1. finding email, password and login button
    const email = await  screen.findByLabelText("Email");
    const password = await screen.findByLabelText("Password");
    const loginButton = await screen.findByText("Sign in");


    //2. simulating the email, password and login
    fireEvent.change(email, { target: { value: "test@gmail.com" } });
    fireEvent.change(password, { target: { value: "test123" } });
    fireEvent.click(loginButton);

    //we have done all the required setup above

    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => {
        expect(loginUserApi).toHaveBeenNthCalledWith({
            email: "test@gmail.com",
            password: "test123"
        });
    });

});

    


    
})