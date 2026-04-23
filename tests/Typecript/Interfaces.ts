export interface Employee {
    id:number;
    name:string;
    department:string;
    salary:number;
}


    
export function displayEmployee(employee: Employee): void {
    console.log("Employee Details:");
    console.log("ID: " + employee.id);
    console.log("Name: " + employee.name);
    console.log("Department: " + employee.department);
    console.log("Salary: " + employee.salary);
}
