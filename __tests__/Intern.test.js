const Intern = require("../lib/Intern");
const intern = new Intern ('Lee', '1234', 'leetest@gmail.com', 'GMU');

test('creates a intern object via employee constructor', () => {
    expect(intern.name).toBe('Lee');
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('leetest@gmail.com');
    expect(intern.school).toBe('GMU');
});

test('testing getName method', () => {
    expect(intern.getName()).toBe('Lee');
});

test('testing getId method', () => {
    expect(intern.getId()).toBe('1234')
});

test('testing getEmail method', () => {
    expect(intern.getEmail()).toBe('leetest@gmail.com')
});

test('testing getSchool method', () => {
    expect(intern.getSchool()).toBe('GMU')
});

test('testing getRole method', () => {
    expect(intern.getRole()).toBe('Intern')
});