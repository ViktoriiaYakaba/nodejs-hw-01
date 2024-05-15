import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
     try {
         const contacts = [];

         await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8')

    } catch (error) {
        console.log(error)
    }
};

await removeAllContacts();
