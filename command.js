const Command = require('../command.js');

describe("Command class", function() {
  test("throws error if a command type is NOT passed into the constructor as the first parameter", function() {
    expect(function() {
      new Command();
    }).toThrow("Command type required.");
  });

  test("constructor sets command type", function() {
    const type = "MOVE";
    const command = new Command(type);
    expect(command.commandType).toBe(type);
  });

  test("constructor sets a value passed in as the 2nd argument", function() {
    const type = "MOVE";
    const value = 12000;
    const command = new Command(type, value);
    expect(command.value).toBe(value);
  });
});

 
 module.exports = Command;