const yargs = require("yargs");
const chalk = require("chalk");
const db = require("./guestdb.js");

// console.log(chalk.red("hellow chamath..."));
// db.add();
// db.view();

// console.log(chalk.yellow.bgBlue.bold("Chamath"));

// const command = process.argv;
// if (command[2] === "Add") {
//   db.AddGuest();
// } else if (command[2] === "Update") {
//   db.UpdateGuest();
// } else if (command[2] === "Delete") {
//   db.DeleteGuest();
// } else if (command[2] === "View"){
//     db.ViewGuest();
// } else if (command[2] === "List"){
//     db.ViewGuest();
// } else {
//     console.log("Error...");
// }

// console.log(process.argv);

yargs.version("1.2.4");

//Add
yargs.command({
  command: "Add",
  describe: "To add a guest",
  builder: {
    name: {
      describe: "Name",
      demandOption: true,
      type: "string"
    },
    address: {
      describe: "Address",
      demandOption: true,
      type: "string"
    },
    contact: {
      describe: "Contact Number",
      type: "number",
      demandOption: true
    },
    date: {
      describe: "Date",
      type: "string",
      demandOption: true
    }
  },
  handler: argv => db.AddGuest(argv.name, argv.address, argv.contact, argv.date)
  // console.log("Name : ",argv.name);
  // console.log("Address : ",argv.address);
  // console.log("Contact Number : ",argv.contact);
  // console.log("Date : ",argv.date);
});

//Update
yargs.command({
  command: "Update",
  describe: "To update a guest",
  builder: {
    id: {
      describe: "id",
      type: "number",
      demandOption: true
    },
    name: {
      describe: "Updated Name",
      type: "string"
    },
    address: {
      describe: "Updated Address",
      type: "string"
    },
    contact: {
      describe: "Updated Contact Number",
      type: "number"
    },
    date: {
      describe: "Updated Date",
      type: "string"
    }
  },
  handler: argv =>
    db.UpdateGuest(argv.id, argv.name, argv.address, argv.contact, argv.date)
});

//Delete
yargs.command({
  command: "Delete",
  describe: "To delete a guest",
  builder: {
    id: {
      describe: "id",
      type: "number",
      demandOption: true
    }
  },
  handler: argv => db.DeleteGuest(argv.id)
});

//View
yargs.command({
  command: "View",
  describe: "To view a guest",
  builder: {
    id: {
      describe: "id",
      type: "number",
      demandOption: true
    }
  },
  handler: argv => db.ViewGuest(argv.id)
});

//List
yargs.command({
  command: "List",
  describe: " To list guests",
  handler: () => db.ListGuest()
});

// console.log(yargs.argv);
yargs.parse();
