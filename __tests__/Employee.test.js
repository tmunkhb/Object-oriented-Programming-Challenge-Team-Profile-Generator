const Employee = require("../lib/Employee");
const employee = new Employee('Jane', '123456', 'janetest@gmail.com');

test('creates a employee object via employee constructor', () => {
    expect(employee.name).toBe('Jane');
    expect(employee.id).toBe('123456');
    expect(employee.email).toBe('janetest@gmail.com')
});

test('testing getName method', () => {
    expect(employee.getName()).toBe('Jane');
});

test('testing getId method', () => {
    expect(employee.getId()).toBe('123456')
});

test('testing getEmail method', () => {
    expect(employee.getEmail()).toBe('janetest@gmail.com')
});

test('testing getRole method', () => {
    expect(employee.getRole()).toBe('Employee')
});