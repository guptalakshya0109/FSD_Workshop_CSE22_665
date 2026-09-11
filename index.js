import EventEmitter from "node:events";

const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (teacher) => {
    console.log(`Class Started by ${teacher}`);
});

eventEmitter.on("exit", (teacher) => {
    console.log(`Class Ended by ${teacher}`);
});

eventEmitter.emit("greet", "John Doe");
eventEmitter.emit("exit", "John Doe");