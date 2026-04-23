import {test, expect} from '@playwright/test';

test('Callbacks in TypeScript', async ({page}) => {
    registerUser("Satish", () => {
        Login("Satish", () => {
            addToCart("Playwright Book", () => {
                checkout("Satish", () => {
                    payment("Satish", () => {
                        Logout("Satish", () => {
                            console.log("Test Completed Successfully");
                        });
                    });
                });    
            });
        });
    });

});

function registerUser(testName:any, callback:any){
    console.log("Registration Successfull: " + testName);
    callback();
}

function Login(testName:any, callback:any){
    console.log("Login Successfull: " + testName);
    callback();
}

function addToCart(testName:any, callback:any){
    console.log("Product added to cart: " + testName);
    callback();
}

function checkout(testName:any, callback:any){
    console.log("Checkout Successfull: " + testName);
    callback();
}

function payment(testName:any, callback:any){
    console.log("Payment Successfull: " + testName);
    callback();
}

function Logout(testName:any, callback:any){
    console.log("Logout Successfull: " + testName);
    callback();
}


