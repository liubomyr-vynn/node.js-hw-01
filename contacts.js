import fs from "fs/promises";
import { nanoid } from "nanoid";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");

export const listContacts = async () => {
	// ...твій код. Повертає масив контактів.
	const data = await fs.readFile(contactsPath);
	return JSON.parse(data);
};

export const getContactById = async contactId => {
	// ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
	const contacts = await listContacts();
	const result = contacts.find(contact => contact.id === contactId);
	return result || null;
};

export const addContact = async ({ name, email, phone }) => {
	// ...твій код. Повертає об'єкт доданого контакту.
	const contacts = await listContacts();
	const newContact = {
		id: nanoid(),
		name,
		email,
		phone,
	};
	contacts.push(newContact);
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
	return newContact;
};

export const removeContact = async contactId => {
	// ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
	const contacts = await listContacts();
	const index = contacts.findIndex(item => item.id === contactId);
	if (index === -1) {
		return null;
	}
	const [result] = contacts.splice(index, 1);
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
	return result || null;
};

export default {
	listContacts,
	getContactById,
	addContact,
	removeContact,
};
