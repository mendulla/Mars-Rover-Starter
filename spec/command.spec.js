const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {
  // Test 1: Checks if the constructor throws an error when no commandType is provided
  test("throws error if a command type is NOT passed into the constructor as the first parameter", function() {
    expect(function() {
      new Command();
    }).toThrow("Command type required.");
  });

  // Test 2: Checks that the commandType property is correctly set
  test("constructor sets command type", function() {
    const type = "MOVE";
    const command = new Command(type);
    expect(command.commandType).toBe(type);
  });

  // Test 3: Checks that the value property is correctly set when provided
  test("constructor sets a value passed in as the 2nd argument", function() {
    const type = "MOVE";
    const value = 12000;
    const command = new Command(type, value);
    expect(command.value).toBe(value);
  });
});
