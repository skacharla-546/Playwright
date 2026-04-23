import { test, expect } from '@playwright/test';

test('Promises in TypeScript', async ({ page }) => {
    registerUser("Satish")
        .then((testName) => login(testName))
        .then((testName) => addToCart())
        .then(() => checkout("Satish"))
        .then((testName) => payment(testName))
        .then((testName) => logout(testName))
        .then(() => console.log("Test Completed Successfully"))
        .catch((error) => console.error("Error: " + error));
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

// registerUser("Satish")
//     .then((testName) => login(testName))
//     .then((testName) => addToCart())
//     .then(() => checkout("Satish"))
//     .then((testName) => payment(testName))
//     .then((testName) => logout(testName))
//     .then(() => console.log("Test Completed Successfully"))
//     .catch((error) => console.error("Error: " + error));
