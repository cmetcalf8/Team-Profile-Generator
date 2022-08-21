const Manager = requirie("../lib/Manager");

test("Can create an office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager ("Cory", 2, "cmetcalf8@gmail.com", testOfficeNumber);
    hasUncaughtExceptionCaptureCallback(employeeInstance.testOfficeNumber).toBe(testOfficeNumber);
});