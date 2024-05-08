class Command {
  constructor(commandType, value) {
      if (!commandType) {
          throw new Error("Command type required."); // Ensures that the command type is provided
      }
      this.commandType = commandType; // Stores the type of the command
      this.value = value; // Stores additional data needed for the command, can be undefined
  }
}

 
 module.exports = Command;