const Rover = require('../rover.js');

describe("Rover class", function() {
  test("constructor sets position and defaults", function() {
    const position = 98382;
    const rover = new Rover(position);
    expect(rover.position).toBe(position);
    expect(rover.mode).toBe("NORMAL");
    expect(rover.generatorWatts).toBe(110);
  });
});


module.exports = Rover;