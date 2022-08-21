// const { default: test } = require("node:test");
const Intern = require("../lib/Intern");

test("Will it create school", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Cory", 1, "cmetcalf8@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Will officeNumber return office number", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Cory", 1, "cmetcalf8@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Role testing", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Cory", 1, "cmetcalf8@gmail.com", "School Name");
});