import {test, expect} from '@playwright/test';
import {Priority} from './Enums';
import {Employee, displayEmployee} from './Interfaces';
import { Student_Encapsulation } from './Student_Encapsulation';


test('Testing Interfaces in TypeScript',async ({page})=>{
    const employee:Employee = {
        id: 1,
        name: "Satish",
        department: "QA",
        salary: 50000
    };

    console.log(`Employee: ${employee.name}`);
    console.log(`Priority: ${Priority.High}`);
    console.log(displayEmployee(employee));
    const student: Student_Encapsulation = new Student_Encapsulation("Satish", 36);
    console.log(`Student: ${student.getName()}, Age: ${student.getAge()}`);
});