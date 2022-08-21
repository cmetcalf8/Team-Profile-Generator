const { default: test } = require("node:test");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const Employee = require("../lib/Employee");

test("Create a new employee", () => {
    const employeeInstance = new Employee();
    hasUncaughtExceptionCaptureCallback(typeof(employeeInstance)).toBe("object");
})

test("Name testing", () => {
    const name = "Cory";
    const employeeInstance = new Employee(name);
    hasUncaughtExceptionCaptureCallback(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 1;
    const employeeInstance = new Employee("Cory", id);
})

test("Email testing", () => {
    const email = "cmetcalf8@gmail.com";
    const employeeInstance = new Employee("Cory", 1, email);
    hasUncaughtExceptionCaptureCallback(employeeInstance.email).toBe(email);
})

test("Puts name through getName method", () => {
    const testName = "Cory";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Test ID in getID method", () => {
    const testID = 1;
    const employeeInstance = new Employee("Cory", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Test email in getEmail method", () => {
    const testEmail = "cmetcalf8@gmail.com";
    const employeeInstance = new Employee("Cory", 1, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Role testing", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Cory", 1, "cmetcalf8@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})