Description:
This is a Node.js-based Console Application for managing guest data. The application allows users to add, update, delete, view, and list guest records through simple command-line instructions. The app utilizes yargs for handling command-line arguments and chalk for styling terminal output.

Features:
*Add Guest: Allows adding a new guest with their name, address, contact number, and date.
*Update Guest: Updates existing guest records using their unique ID.
*Delete Guest: Deletes a guest record by ID.
*View Guest: Displays details of a guest using their ID.
*List Guests: Lists all guest records stored in the application.

Technologies Used:
*Node.js
*yargs for command-line argument parsing.
*chalk for terminal string styling.
*nodemon for development environment automation.
*File System (fs) module for data persistence (JSON format).

How to Run:
*Clone the repository.
*Install dependencies using npm install.
*Use the following commands to manage guest data:
  Add a guest: node app.js Add --name="John Doe" --address="123 Main St" --contact=123456789 --date="2024-10-20"
  Update a guest: node app.js Update --id=1 --name="Jane Doe"
  Delete a guest: node app.js Delete --id=1
  View a guest: node app.js View --id=1
  List all guests: node app.js List

Intended Users:
This application is ideal for developers or students looking to manage guest records in a simple way or use it as a learning tool for Node.js and command-line argument handling.

Future Plans:
*Enhance validation for input fields (e.g., contact number format).
*Add functionality to export guest data in CSV or other formats.
*Introduce search functionality by name or contact number.

sLicense: ISC License