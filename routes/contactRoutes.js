const express = require("express")
const { getContacts, createContact, getContact, updateContact, deleteContact } = require("./controllers/contactController")
const router = express.Router()

// ******* Get All Contacts ********
router.route("/").get(getContacts)

// ****** Create Contacts ********
router.route("/").post(createContact)

// ****** Get Single Contact ********
router.route("/:id").get(getContact)

// ******** Update A Contact *********
router.route("/:id").put(updateContact)

// ******* Delete A Contact **********
router.route("/:id").delete(deleteContact)

module.exports = router
