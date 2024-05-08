const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
describe("Message class", function() {
    test("throws error if a name is NOT passed into the constructor as the first parameter", function() {
        expect(function() {
            new Message();
        }).toThrow("Name required.");
    });

    test("constructor sets name", function() {
        const name = "Test message";
        const commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
        const message = new Message(name, commands);
        expect(message.name).toBe(name);
    });

    test("contains a commands array passed into the constructor as the 2nd argument", function() {
        const name = "Test message";
        const commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
        const message = new Message(name, commands);
        expect(message.commands).toEqual(commands);
    });
});
