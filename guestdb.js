const fs = require("fs");
const chalk = require("chalk");
// console.log("Hi");

// const name = "chamath";
// const Lname = "Sandagiri";

// const add = ()=>{
//     return console.log(chalk.green("adding"), chalk.red("Data"));
// };

// const view = ()=>console.log(chalk.blue("viewing"), chalk.red("Data"));

const saveFile = "data.json";

//Add 
const AddGuest = (name, address, contact, date) => {
  const guests = loadGuests();
  const length = guests.length;
  let id = 1;
  if (length > 0) {
    id = guests[length - 1].id + 1;
  }
  guests.push({
    id,
    name,
    address,
    contact,
    date
  });

  saveGuest(guests);

  console.log(chalk.green("Data Saved"));
};

//Update
const UpdateGuest = (id, name, address, contact, date) => {
  const guests = loadGuests();
  const guestIndex = guests.findIndex(guest => guest.id === id);
  // console.log(guestIndex);
  if (guestIndex != -1) {
    const guest = guests[guestIndex];
    // if (name) {
    //   console.log(name);
    // } else {
    //   console.log("No Name");
    // }

    guest.name = name ? name : guest.name;
    guest.address = address ? address : guest.address;
    guest.contact = contact ? contact : guest.contact;
    guest.date = date ? date : guest.date;

    console.log(chalk.yellow("Update", id));
    saveGuest(guests);
  } else {
    console.log(chalk.yellow.inverse("No Record Found"));
  }
};

//Delete
const DeleteGuest = id => {
  const guests = loadGuests();
  const newGuests = guests.filter(guest => guest.id != id);
  if (guests.length > newGuests.length) {
    saveGuest(newGuests);
    console.log(chalk.red("Delete", id));
  } else {
    console.log(chalk.red.inverse("No Record Found"));
  }
};

//View
const ViewGuest = id => {
  const guests = loadGuests();
  const guest = guests.find(guest => guest.id === id);
  if (guest) {
    console.log(chalk.blue("Guest id :", id));
    console.log(guest);
  } else {
    console.log(chalk.blue.inverse("No Record Found"));
  }
};

//List
const ListGuest = () => {
  console.log(chalk.cyan("Gusets List"));
  const guests = loadGuests();
  guests.forEach(guest => {
    console.log(guest);
  });
};

//Save
const saveGuest = guests => {
  const dataJson = JSON.stringify(guests);
  fs.writeFileSync(saveFile, dataJson);
};

//load
const loadGuests = () => {
  try {
    const dataBuffer = fs.readFileSync(saveFile);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  AddGuest,
  UpdateGuest,
  DeleteGuest,
  ViewGuest,
  ListGuest
};
