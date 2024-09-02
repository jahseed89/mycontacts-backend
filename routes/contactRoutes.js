const express = require("express")
const router = express.Router()

// ******* Get All Contacts ********
router.route("/").get((req, res) => {
    res.status(200).json({message: 'Get all Contacts'})
})

// ****** Create Contacts ********
router.route("/").post((req, res) => {
    res.status(200).json({message: 'Create Contacts'})
})

// ****** Get Single Contact ********
router.route("/:id").get((req, res) => {
    res.status(200).json({message: `Update Contact for ${req.params.id}`})
})

// ******** Update A Contact *********
router.route("/:id").put((req, res) => {
    res.status(200).json({message: `Update Contact for ${req.params.id}`})
})

// ******* Delete A Contact **********
router.route("/:id").delete((req, res) => {
    res.status(200).json({message: `Delete Contact for ${req.params.id}`})
})

module.exports = router
