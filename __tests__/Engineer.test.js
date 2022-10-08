const Engineer = require("../lib/Engineer");
const engineer = new Engineer ('John', '123', 'johntest@gmail.com', 'johngit');

test('creates a employee object via employee constructor', () => {
    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('johntest@gmail.com');
    expect(engineer.github).toBe('johngit');
});

test('testing getName method', () => {
    expect(engineer.getName()).toBe('John');
});

test('testing getId method', () => {
    expect(engineer.getId()).toBe('123')
});

test('testing getEmail method', () => {
    expect(engineer.getEmail()).toBe('johntest@gmail.com')
});

test('testing getGithub method', () => {
    expect(engineer.getGithub()).toBe('johngit')
});

test('testing getRole method', () => {
    expect(engineer.getRole()).toBe('Engineer')
});