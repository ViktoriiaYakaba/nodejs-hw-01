import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { generateContacts } from './generateContacts.js';

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');

        const contacts = JSON.parse(data);
        const newContact = generateContacts(1);
        contacts.push(newContact);

        await fs.appendFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    } catch (error) {
        console.log(error)
    }
};

await addOneContact();
