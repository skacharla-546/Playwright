import {test, expect} from '@playwright/test';

test('Async/Await in TypeScript', async ({page}) => {
    await registerUser("Satish");
    await login("Satish");
    await addToCart();
    await checkout("Satish");
    await payment("Satish");
    await logout("Satish");
    console.log("Test Completed Successfully");
});

function registerUser(testName: string): Promise<string> {
    return new Promise((resolve, reject) => {
        console.log("Registration Successfull: " + testName);
        resolve(testName);
    });
}   

function login(testName: string): Promise<string> {
    return new Promise((resolve, reject) => {
        console.log("Login Successfull: " + testName);
        resolve(testName);
    });
}

function addToCart(): Promise<string> {
    return new Promise((resolve, reject) => {
        console.log("Product added to cart");
        resolve("Product added to cart");
    });
}

function checkout(testName: string): Promise<string> {
    return new Promise((resolve, reject) => {
        console.log("Checkout Successfull: " + testName);
        resolve(testName);
    });
}

function payment(testName: string): Promise<string> {
    return new Promise((resolve, reject) => {
        console.log("Payment Successfull: " + testName);
        resolve(testName);
    });
}

function logout(testName: string): Promise<string> {
    return new Promise((resolve, reject) => {
        console.log("Logout Successfull: " + testName);
        resolve(testName);
    });
}

