// const { default: test } = require("node:test");
const { default: test } = require("node:test");
const Engineer = require("../lib/Engineer");

test("Will it create github", ()=> {
    const testGithub = "cmetcalf8";
    const employeeInstance = new Engineer("Cory", 1, "cmetcalf8@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Will getGithub return github", () => {
    const testGithub = "cmetcalf8";
    const employeeInstance = new Engineer("Cory", 1, "cmetcalf8@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Role test", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Cory", 1, "cmetcalf8@gmail.com", "cmetcalf8");
    expect(employeeInstance.getRole()).toBe(returnValue);
});