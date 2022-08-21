const { default: test } = require("node:test");
const { hasUncaughtExceptionCaptureCallback } = require("process");

const Manager = requirie("../lib/Manager");

test("Can create an office number.", () => {
    const testOfficeNumber = 1;
    const employeeInstance = new Manager ("Cory", 1, "cmetcalf8@gmail.com", testOfficeNumber);
    hasUncaughtExceptionCaptureCallback(employeeInstance.testOfficeNumber).toBe(testOfficeNumber);
});

test("Will officNumber return office number", () => {
    const testOfficeNumber = 1;
    const employeeInstance = new Manager("Cory", 1, "cmetcalf8@gmail.com", testOfficeNumber);
    hasUncaughtExceptionCaptureCallback(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Role test", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Cory", 1, "cmetcalf8@gmail.com", 1);
    expect(employeeInstance.getRole()).toBe(returnValue);
});