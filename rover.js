class Rover {
  constructor(position) {
      if (position === undefined) {
          throw new Error("Position required.");
      }
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
  }

  receiveMessage(message) {
      let results = [];
      message.commands.forEach(command => {
          const result = {completed: true};
          switch (command.commandType) {
              case 'MOVE':
                  if (this.mode === 'LOW_POWER') {
                      result.completed = false;
                  } else {
                      this.position = command.value;
                  }
                  break;
              case 'STATUS_CHECK':
                  result.roverStatus = {
                      mode: this.mode,
                      generatorWatts: this.generatorWatts,
                      position: this.position
                  };
                  break;
              case 'MODE_CHANGE':
                  this.mode = command.value;
                  break;
          }
          results.push(result);
      });

      return {
          message: message.name,
          results: results
      };
  }
}


module.exports = Rover;