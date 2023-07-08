import { program } from "commander";
import contactsService from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
	switch (action) {
		case "list":
			const allContacts = await contactsService.listContacts();
			return console.table(allContacts);
		case "get":
			const getById = await contactsService.getContactById(id);
			return console.log(getById);
		case "add":
			const newContact = await contactsService.addContact({
				name,
				email,
				phone,
			});
			return console.log(newContact);
		case "remove":
			const deleteContact = await contactsService.removeContact(id);
			return console.log(deleteContact);
		default:
			console.warn("\x1B[31m Unknown action type!");
	}
};

program
	.option("-a, --action <type>", "choose action")
	.option("-i, --id <type>", "user id")
	.option("-n, --name <type>", "user name")
	.option("-e, --email <type>", "user email")
	.option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const options = program.opts();
invokeAction(options);
