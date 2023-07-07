import fs from "fs/promises";
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

export const removeContact = async contactId => {
	// ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
	const contacts = await listContacts();
};

export const addContact = async (name, email, phone) => {
	// ...твій код. Повертає об'єкт доданого контакту.
};

export default {
	listContacts,
	getContactById,
	removeContact,
	addContact,
};
