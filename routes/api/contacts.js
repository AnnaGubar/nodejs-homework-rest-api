const express = require("express");
const router = express.Router();
const { controllerWrapper } = require("../../helpers");
const { getAll } = require("../../controllers/contacts");

// const { createError } = require("../../helpers");

router.get("/", controllerWrapper(getAll));

// router.get("/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const result = await getContactById(id);

//     if (!result) {
//       throw createError(404);
//     }

//     res.status(200).json(result);
//   } catch (error) {
//     next(error);
//   }
// });

// router.post("/", async (req, res, next) => {
//   try {
//     console.log(req.body); // { name: 'ff', email: 'gggggg', phone: 'c' }

//     const { error } = contactsSchema.validate(req.body);
//     if (error) {
//       throw createError(400, error.message);
//     }

//     const result = await addContact(req.body);
//     res.status(201).json(result);
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete("/:id", async (req, res, next) => {
//   try {
//     const {id} = req.params;
//     const result = await removeContact(id);
//     if(!result){
//         throw createError(404)
//     }

//     res.status(200).json({
//         message: "Book deleted"
//     })

//   } catch (error) {
//     next(error);
//   }
// });

// router.put("/:id", async (req, res, next) => {
//   try {
//     const { error } = contactsSchema.validate(req.body);
//     if (error) {
//       throw createError(400, error.message = "missing fields");
//     }

//     const { id } = req.params;
//     const result = await updateContact(id, req.body);
//     if (!result) {
//       throw createError(404);
//     }

//     res.status(200).json(result);

//   } catch (error) {
//     next(error)
//   }
// });

module.exports = router;
