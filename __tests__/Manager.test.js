const Manager = require("../lib/Manager");
const manager = new Manager ('Sue', '12', 'suetest@gmail.com', '14');

test('creates a manager object via constructor', () => {
    expect(manager.name).toBe('Sue');
    expect(manager.id).toBe('12');
    expect(manager.email).toBe('suetest@gmail.com');
    expect(manager.officeNumber).toBe('14');
});

test('testing getName method', () => {
    expect(manager.getName()).toBe('Sue');
});

test('testing getId method', () => {
    expect(manager.getId()).toBe('12')
});

test('testing getEmail method', () => {
    expect(manager.getEmail()).toBe('suetest@gmail.com')
});

test('testing getofficeNumber method', () => {
    expect(manager.getofficeNumber()).toBe('14')
});

test('testing getRole method', () => {
    expect(manager.getRole()).toBe('Manager')
});