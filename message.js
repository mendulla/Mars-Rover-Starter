const Command = require('./command.js'); 

class Message {
    constructor(name, commands) {
        if (!name) {
            throw new Error("Name required.");
        }
        this.name = name;
        
        if (!Array.isArray(commands)) {
            throw new Error("Commands must be an array.");
        }
        this.commands = commands;
    }
}

module.exports = Message;
