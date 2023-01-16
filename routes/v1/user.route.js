import express from "express";

import { userController } from "../../controllers/index.js";

const router = express.Router();

router.route("/").post(userController.createUser).get(userController.getUsers);

router
  .route("/:userId")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export default router;
