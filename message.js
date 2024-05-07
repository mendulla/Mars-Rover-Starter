const Message = require('../message.js');
const Command = require('../command.js');

describe("Message class", function() {
  test("throws error if no name is provided", function() {
    expect(function() {
      new Message();
    }).toThrow("Name required.");
  });

  test("constructor sets name and commands array", function() {
    const name = "Test Message";
    const commands = [new Command("MOVE", 100)];
    const message = new Message(name, commands);
    expect(message.name).toBe(name);
    expect(message.commands).toEqual(commands);
  });

  test("throws error if commands is not an array", function() {
    expect(function() {
      new Message("Test Message", "not-an-array");
    }).toThrow("Commands must be an array.");
  });
});

module.exports = Message;