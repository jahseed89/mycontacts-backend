const asyncHandler = require("express-async-handler");
// iJxY75HCJB4A64ly
//@des Get All Contacts
//@route Get api/contacts
//@access public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all Contacts" });
});
//@des Create New Contact
//@route POST api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log(`The request body is ${req.body}`);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  res.status(201).json({ message: "Create Contacts" });
});
//@des Get Single Contact
//@route GET api/contacts/id
//@access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
});
//@des Update Contact
//@route PUT api/contacts/id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
});

//@des Delete Contact
//@route DELETE api/contacts/id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
