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
			break;
	}
};

// invokeAction({ action: "list" });

// invokeAction({ action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw" });

// invokeAction({
// 	action: "add",
// 	id: "AeHIrLTr6JkxGE6SN-0Rw",
// 	name: "Michael Jordan",
// 	email: "Michael.Jordan@mail.com",
// 	phone: "(995) 917-3797",
// });

invokeAction({ action: "remove", id: "TYLVlred12ikuHjBFIJVc" });
