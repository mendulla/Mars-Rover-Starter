const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
describe("Rover class", function() {
    test("constructor sets position and default values for mode and generatorWatts", function() {
        const rover = new Rover(100);
        expect(rover.position).toBe(100);
        expect(rover.mode).toBe('NORMAL');
        expect(rover.generatorWatts).toBe(110);
    });

    test("response returned by receiveMessage contains the name of the message", function() {
        const rover = new Rover(100);
        const commands = [new Command('STATUS_CHECK')];
        const message = new Message('Test message', commands);
        const response = rover.receiveMessage(message);
        expect(response.message).toBe('Test message');
    });

    test("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
        const rover = new Rover(100);
        const commands = [new Command('STATUS_CHECK'), new Command('MOVE', 358)];
        const message = new Message('Test message', commands);
        const response = rover.receiveMessage(message);
        expect(response.results.length).toBe(2);
    });

    test("responds correctly to the status check command", function() {
        const rover = new Rover(100);
        const commands = [new Command('STATUS_CHECK')];
        const message = new Message('Test message', commands);
        const response = rover.receiveMessage(message);
        expect(response.results[0].roverStatus).toEqual({
            mode: 'NORMAL',
            generatorWatts: 110,
            position: 100
        });
    });

    test("responds correctly to the mode change command", function() {
        const rover = new Rover(100);
        const commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
        const message = new Message('Test message', commands);
        const response = rover.receiveMessage(message);
        expect(response.results[0].completed).toBe(true);
        expect(rover.mode).toBe('LOW_POWER');
    });

    test("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
        const rover = new Rover(100);
        rover.mode = 'LOW_POWER';
        const commands = [new Command('MOVE', 358)];
        const message = new Message('Test message', commands);
        const response = rover.receiveMessage(message);
        expect(response.results[0].completed).toBe(false);
        expect(rover.position).toBe(100); // Position should not change
    });

    test("responds with the position for the move command", function() {
        const rover = new Rover(100);
        const commands = [new Command('MOVE', 200)];
        const message = new Message('Test message', commands);
        rover.receiveMessage(message);
        expect(rover.position).toBe(200);
    });
});

