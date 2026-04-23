import { test, expect } from '@playwright/test';

test('Arrays in TypeScript', async ({ page }) => {

    const Names: string[] = ["Satish", "John", "Alice", "Bob"];
    console.log("Names Array: " + Names);

    const salary: number[] = [50000, 60000, 55000, 70000];
    console.log("Salary Array: " + salary);

    const updatedSalary = salary.map(sal => {
        return sal + 5000;
    });
    console.log("Updated Salary Array: " + updatedSalary);
    const filteredSalary = updatedSalary.filter(salary => {
        return salary > 60000;
    });
    console.log("Filtered Salary Array: " + filteredSalary);

    const totalSalary = updatedSalary.reduce((a, b) => a + b, 0);
    console.log("Total Salary: " + totalSalary);

    const maxSalary = Math.max(...updatedSalary);
    console.log("Max Salary: " + maxSalary);

    const minSalary = Math.min(...updatedSalary);
    console.log("Min Salary: " + minSalary);

    const findName = Names.find(name => name === "Alice");
    console.log("Find Name: " + findName);

    const indexOfBob = Names.indexOf("Bob");
    console.log("Index of Bob: " + indexOfBob);

});

