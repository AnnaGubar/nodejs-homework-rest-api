const { v4 } = require("uuid");
const fs = require("fs/promises");

const path = require("path");
const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const result = await fs.readFile(contactsPath);

  return JSON.parse(result);
};

const getContactById = async (contactId) => {
  const list = await listContacts();
  const contact = list.find(({ id }) => id === contactId);

  if(!contact){
    return null;
}
  
  return contact;
};

const addContact = async ({name, email, phone}) => {
  const list = await listContacts();
  const newContact = {id:v4(), name, email, phone};

  list.push(newContact);
  await updateContactsList(list);

  return newContact;
};


const removeContact = async (contactId) => {
  const list = await listContacts();
  const contactToRemove = list.find(({ id }) => id === contactId);
  
  if(!contactToRemove){
    return null;
  }
  
  const newList = list.filter(({ id }) => id !== contactId);
  await updateContactsList(newList);

  return contactToRemove;
};


const updateContact = async (contactId, {name, email, phone}) => {
  const list = await listContacts();
  const idx = list.findIndex(({id}) => id === contactId);
  if(idx === -1){
      return null;
  }

  list[idx] = {id:contactId, name, email, phone};
  await updateContactsList(list);
  return list[idx];
};

async function updateContactsList(list) {
  const updatedContactsList = await fs.writeFile(
    contactsPath,
    JSON.stringify(list)
  );

  return updatedContactsList;
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
};
