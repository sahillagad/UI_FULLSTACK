// Here Make All Different Url
// For Every Url WE Make Different Function

let uri = "http://localhost:9000";

// It Will Give All The Contact Data
export const getAllContact = () => {
  let allContactUri = uri + "/contacts";
  return axios.get(allContactUri);
};

//Get Single Contact
// http://localhost:9000/contacts/D68NdwnHw
export const getContactById = (contactId) => {
  let getSingleContactUri = uri + "/contacts/" + contactId;
  return axios.get(getSingleContactUri);
};

export const createContact = (contact) => {
  let postConactUri = uri + "/contacts";
  return axios.post(postConactUri);
};

export const updateContact = (contact, contactId) => {
  let putConactUri = uri + "/contacts/" + contactId;
  return axios.put(putConactUri);
};

export const getDeleteContactById = (contactId) => {
  let contactDeleteUri = uri + "/contacts/" + contactId;
  return axios.delete(contactDeleteUri);
};

// Group ------------->

export const getAllGroup = () => {
  let getAllGroup = uri + "/groups";
  return axios.get(getAllGroup);
};

export const getGroupById = (groupId) => {
  let getGroupByIdUri = uri + "/groups/" + groupId;
  return axios.get(getGroupByIdUri);
};

export const addGroups = (group) => {
  let addGroups = uri + "groups";
  return axios.post(addGroups);
};

export const updateGroups = (group, groupId) => {
  let updateGroup = uri + "/groups/" + groupId;
  return axios.put(updateGroup);
};

export const deleteGroupById = (groupId) => {
  let deleteGroupByIdUri = uri + "/groups/" + groupId;
  return axios.delete(deleteGroupByIdUri);
};
